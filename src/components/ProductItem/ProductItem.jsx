import "./ProductItem.modul.css";
import Button from "../Button/Button";

function ProductItem(props) {
    const onAddHandler = () => {
        props.onAdd(props.item);
    };

    return (
        <div className="product">
            <img className="img" alt="tire" src={props.item.mainPhoto}></img>
            <h3 className="title">
                {props.item.title} id:{props.item.id}
            </h3>
            <div className="season">Сезон: {props.item.season}</div>
            <div className="size">
                Размер: {props.item.width}/{props.item.hight}/r
                {props.item.diameter}
            </div>
            <div className="discription">
                Описание: {props.item.discription}
            </div>
            <div className="price">
                <span>
                    Цена: <b>{props.item.price} руб.</b>
                </span>
            </div>
            <Button onClick={onAddHandler} className="add-btn">
                Добавить в корзину
            </Button>
        </div>
    );
}

export default ProductItem;
