import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.modul.css";
import { useTelegram } from "../hooks/useTelegram";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTires,
    seasonFilter,
    selectTireItems,
    widthFilter,
    // hightFilter,
    // diameterFilter,
} from "../../app/slices/tireListSlice";

const ProductList = (props) => {
    const [addedItems, setAddedItems] = useState([]);
    const [season, setSeason] = useState("");
    const [width, setWith] = useState("");
    const [hight, setHight] = useState("");
    const [diameter, setDiameter] = useState("");

    const { tg } = useTelegram();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTires());
        // eslint-disable-next-line
    }, []);

    const tireItems = useSelector(selectTireItems);

    const onChangeSeason = (e) => {
        let season = e.target.value;
        setSeason(e.target.value);
        console.log();
        dispatch(seasonFilter({ season }));
    };

    const onChangeWidth = (e) => {
        let width = e.target.value;
        setWith(e.target.value);
        dispatch(widthFilter({ width }));
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

    const tires = tireItems.map((item) => (
        <ProductItem key={item.id} item={item} onAdd={onAdd} />
    ));

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
                    <option value={"150"}>150</option>
                    <option value={"155"}>155</option>
                    <option value={"160"}>160</option>
                    <option value={"165"}>165</option>
                    <option value={"170"}>170</option>
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
            <div className="productList">{tires}</div>
        </div>
    );
};

export default ProductList;
