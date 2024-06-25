import "./App.css";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const App = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    });

    return (
        <div className="App">
            <h1>work</h1>
            <Button
                onClick={() => {
                    window.Telegram.WebApp.MainBotton.show();
                }}
            >
                Показать
            </Button>
            <Button
                onClick={() => {
                    window.Telegram.WebApp.MainBotton.hide();
                }}
            >
                Скрыть
            </Button>
            <Routes>
                <Route index path={"/*"} element={<ProductList />} />
                <Route path={"form"} element={<Form />} />
            </Routes>
        </div>
    );
};

export default App;
