import React from "react";
import { db } from "../database/db";
import Context from "../Context";

const Shops = () => {
	const [goodsElement, setGoodsElement] = React.useState({});
	const context = React.useContext(Context)

	const handleChoseChops = (item) => {
		setGoodsElement(db[item]);
	}

	const getProductData = (item) => {
		context.data.push(item)
	}

	return (
		<main>
			<div className="wrapper">
				<div>
					<h2>Shops</h2>
					<nav>
						{Object.keys(db).map((element, index) => {
							return (
								<button onClick={() => handleChoseChops(element)} key={index}>{db[element].id}</button>
							)
						})}
					</nav>
				</div>
				<div>
					<div className="shop-container">
						<div className="description-container">
							<h2>{goodsElement.id ? goodsElement.id : "Goods"}</h2>
							<p>{goodsElement.descriptionId}</p>
						</div>
						<div className="products-container">
							{!goodsElement.products ? false : goodsElement.products.map((element, index) => {
								return (
									<div className="product" key={index}>
										<h3>{element.id}</h3>
										<div>
											<img src={element.image + "/300"} alt="Image" />
										</div>
										<p>Ціна: <span>{element.price}</span></p>
										<p>{element.description}</p>
										<button onClick={ () =>  getProductData(element) }>Замовити</button>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Shops;