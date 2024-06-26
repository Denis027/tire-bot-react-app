// import Header from "../Header/Header";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.modul.css";

const tires = [
    {
        id: 1,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription: "Lorem ipsum",
    },
    {
        id: 2,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription: "Lorem ipsum",
    },
    {
        id: 3,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription: "Lorem ipsum",
    },
    {
        id: 4,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription: "Lorem ipsum",
    },
    {
        id: 5,
        title: "TOYO",
        season: "зима",
        size: "r15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription: "Lorem ipsum",
    },
];

function ProductList(props) {
    const [addedItems, setAddedItems] = useState([]);

    const TireItem = tires.map((t) => (
        <ProductItem
            mainPhoto={t.mainPhoto}
            title={t.title}
            discription={t.discription}
            price={t.price}
        />
    ));

    // eslint-disable-next-line
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

    return <div className="productList">{TireItem}</div>;
}

export default ProductList;
