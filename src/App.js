import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    });

    // const onClose = () => {
    //     tg.close();
    // };

    return (
        <div className="App">
            {/* <h1>work</h1> */}
            <Header />
        </div>
    );
}

export default App;
