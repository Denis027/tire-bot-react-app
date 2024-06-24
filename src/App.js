import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";

function App() {
    // const tg = window.Telegram.WebApp;
    // const onToggleButton = () => {
    //     if (tg.MainBotton.isVisible) {
    //         tg.MainBotton.hide();
    //     } else {
    //         tg.MainBotton.show();
    //     }
    // };

    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    });

    return (
        <div className="App">
            {/* <h1>work</h1> */}
            <Header />
            <Button onClick={onToggleButton}>toggle</Button>
        </div>
    );
}

export default App;
