// import Header from "../Header/Header";
import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.modul.css";
import { useTelegram } from "../hooks/useTelegram";

const tires = [
    {
        id: 1,
        title: "TOYO",
        season: "winter",
        width: "175",
        hight: "65",
        diameter: "15",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti molestiae id distinctio sint aspernatur reiciendis odit eligendi ipsa explicabo? Perspiciatis nisi sed eligendi recusandae neque pariatur, molestiae quae quod.",
    },
    {
        id: 2,
        title: "TOYO",
        season: "winter",
        width: "185",
        hight: "65",
        diameter: "16",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti molestiae id distinctio sint aspernatur reiciendis odit eligendi ipsa explicabo? Perspiciatis nisi sed eligendi recusandae neque pariatur, molestiae quae quod.",
    },
    {
        id: 3,
        title: "TOYO",
        season: "winter",
        width: "195",
        hight: "45",
        diameter: "17",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti molestiae id distinctio sint aspernatur reiciendis odit eligendi ipsa explicabo? Perspiciatis nisi sed eligendi recusandae neque pariatur, molestiae quae quod.",
    },
    {
        id: 4,
        title: "TOYO",
        season: "summer",
        width: "195",
        hight: "35",
        diameter: "18",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti molestiae id distinctio sint aspernatur reiciendis odit eligendi ipsa explicabo? Perspiciatis nisi sed eligendi recusandae neque pariatur, molestiae quae quod.",
    },
    {
        id: 5,
        title: "TOYO",
        season: "summer",
        width: "185",
        hight: "45",
        diameter: "19",
        price: "5000",
        mainPhoto:
            "https://st20.stpulscen.ru/images/product/314/714/445_medium3.jpg",
        discription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus deleniti molestiae id distinctio sint aspernatur reiciendis odit eligendi ipsa explicabo? Perspiciatis nisi sed eligendi recusandae neque pariatur, molestiae quae quod.",
    },
];

function ProductList(props) {
    const { tg } = useTelegram();
    const [addedItems, setAddedItems] = useState([]);

    const [season, setSeason] = useState("");
    const [width, setWith] = useState("");
    const [hight, setHight] = useState("");
    const [diameter, setDiameter] = useState("");

    const onChangeSeason = (e) => {
        setSeason(e.target.value);
    };

    const onChangeWidth = (e) => {
        setWith(e.target.value);
    };

    const onChangeHight = (e) => {
        setHight(e.target.value);
    };

    const onChangeDiameter = (e) => {
        setDiameter(e.target.value);
    };

    const getTotalPrice = (items = []) => {
        return items.reduce((acc, item) => {
            return (acc += item.price);
        }, 0);
    };

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)} руб.`,
            });
        }
    };

    const TireItems = tires
        .filter(function (item) {
            if (season === "") {
                return true;
            } else {
                return item.season === season;
            }
        })
        .filter(function (item) {
            if (width === "") {
                return true;
            } else {
                return item.width === width;
            }
        })
        .filter(function (item) {
            if (hight === "") {
                return true;
            } else {
                return item.hight === hight;
            }
        })
        .filter(function (item) {
            if (diameter === "") {
                return true;
            } else {
                return item.diameter === diameter;
            }
        })
        .map((item) => <ProductItem item={item} onAdd={onAdd} />);

    return (
        <div className="productListWrapper">
            <div className="filter">
                <select
                    value={season}
                    onChange={onChangeSeason}
                    className={"select"}
                >
                    <option value={""}>Сезон</option>
                    <option value={"winter"}>Зима</option>
                    <option value={"summer"}>Лето</option>
                </select>
                <select
                    value={width}
                    onChange={onChangeWidth}
                    className={"select"}
                >
                    <option value={""}>Ширина</option>
                    <option value={"175"}>175</option>
                    <option value={"180"}>180</option>
                    <option value={"185"}>185</option>
                    <option value={"195"}>195</option>
                    <option value={"200"}>200</option>
                    <option value={"205"}>205</option>
                </select>
                <select
                    value={hight}
                    onChange={onChangeHight}
                    className={"select"}
                >
                    <option value={""}>Высота</option>
                    <option value={"35"}>35</option>
                    <option value={"40"}>40</option>
                    <option value={"45"}>45</option>
                    <option value={"50"}>50</option>
                    <option value={"55"}>55</option>
                    <option value={"60"}>60</option>
                    <option value={"65"}>65</option>
                </select>
                <select
                    value={diameter}
                    onChange={onChangeDiameter}
                    className={"select"}
                >
                    <option value={""}>Диаметр</option>
                    <option value={"15"}>15</option>
                    <option value={"16"}>16</option>
                    <option value={"17"}>17</option>
                    <option value={"18"}>18</option>
                    <option value={"19"}>19</option>
                    <option value={"20"}>20</option>
                </select>
            </div>
            <div className="productList">{TireItems}</div>
        </div>
    );
}

export default ProductList;
