import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const App = (props) => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    });

    return (
        <div className="App">
            <h1>work</h1>
            <Routes>
                <Route
                    index
                    path={"/*"}
                    element={
                        <ProductList
                        // tires={props.tires}
                        />
                    }
                />
                <Route path={"form"} element={<Form />} />
            </Routes>
        </div>
    );
};

export default App;
