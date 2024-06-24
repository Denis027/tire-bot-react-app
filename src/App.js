import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    });

    return (
        <div className="App">
            <h1>work</h1>
            <Header />
            <Routes>
                <Route index path="/" element={<ProductList />} />
                <Route path="form" element={<Form />} />
            </Routes>
            <Button onClick={onToggleButton}>toggle</Button>
        </div>
    );
}

export default App;
