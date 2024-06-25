// import Header from "../Header/Header";
import "./ProductItem.modul.css";
import Button from "../Button/Button";

function ProductItem(props) {
    const onAddHandler = () => {
        props.onAdd(props.product.id);
    };

    return (
        <div className="productItem">
            <div className="img">
                <img alt="tire" src={props.product.mainPhoto}></img>
            </div>
            <div className="title"></div>
            <div className="discription"></div>
            <div className="price">
                <span>
                    Стоимость: <b>{props.product.price} руб.</b>
                </span>
                <Button className="add-btn" onClick={onAddHandler}>
                    Добавить в корзину
                </Button>
            </div>
        </div>
    );
}

export default ProductItem;
