import "./ProductItem.modul.css";
import Button from "../Button/Button";

function ProductItem(props) {
    const onAddHandler = () => {
        props.onAdd(props.product.id);
    };

    return (
        <div className="product">
            <img className="img" alt="tire" src={props.mainPhoto}></img>
            <h3 className="title">{props.title}</h3>
            <div className="size">Размер: {props.size}</div>
            <div className="season">Сезон: {props.season}</div>
            <div className="discription">{props.discription}</div>
            <div className="price">
                <span>
                    Цена: <b>{props.price} руб.</b>
                </span>
                <Button onClick={onAddHandler} className="add-btn">
                    Добавить в корзину
                </Button>
            </div>
        </div>
    );
}

export default ProductItem;
