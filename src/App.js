import "./App.css";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            {/* <h1>work</h1> */}
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
