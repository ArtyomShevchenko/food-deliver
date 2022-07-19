import React from "react";
import { db } from "../database/db";

const Shops = () => {
    const [goodsItem, setGoodsItem] = React.useState({});

    Object.entries(db).forEach(elements => console.log(elements[1]))

    return (
        <main>
            <div className="wrapper">
                <div>
                    <h2>Shops</h2>
                    <nav>
                        {Object.keys(db).map(element => <button onClick={ () => setGoodsItem(db.element) }>{element}</button>)}
                    </nav>
                </div>
                <div>
                    <div className="card">
                        <h2>
                            {goodsItem.id ? goodsItem.id: "Goods"}
                        </h2>
                        <div>
                            {console.log(goodsItem)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Shops;