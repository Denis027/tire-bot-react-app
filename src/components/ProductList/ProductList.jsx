// import Header from "../Header/Header";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.modul.css";

let tires = [
    {
        id: 1,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
    },
    {
        id: 2,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
    },
    {
        id: 3,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
    },
    {
        id: 4,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
    },
    {
        id: 5,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
    },
];

function ProductList(props) {
    const [addedItems, setAddedItems] = useState([]);
    
    // eslint-disable-next-line
    const tireItem = tires.map((item) => {
        <ProductItem className={"item"} product={item} onAdd={onAdd} />;
    });

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);
    };

    return <div className="productList">{tireItem}</div>;
}

export default ProductList;
