import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ShopingCart">Shoping cart</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;