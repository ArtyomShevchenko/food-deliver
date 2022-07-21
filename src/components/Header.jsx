import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

const Header = () => {

    return (
        <header>
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/basket">Shoping cart</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;