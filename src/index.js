import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { tires } from "./store/store";
import { setupStore } from "./app/store";
import { Provider } from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App tires={tires} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
