import Button from "../Button/Button";
import "./Header.modul.css";

function Header() {
    return (
        <div className="Header">
            <header>
                <ul className="seasonList">
                    <li>Лето</li>
                    <li>Зима</li>
                    <li>Всесезон</li>
                </ul>
                <ul className="r">
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                </ul>
                <Button>Закрыть</Button>
            </header>
        </div>
    );
}

export default Header;
