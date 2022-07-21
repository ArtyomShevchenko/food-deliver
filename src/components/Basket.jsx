import React from "react";
import Context from "../Context";

const Basket = () => {
	const context = React.useContext(Context);
	const [state, setState] = React.useState(0);

	const handleClickRemove = (index) => {
		setState(index)
		delete context.data[index]
	}

	return (
		<div className="wrapper">
			<div>
				<h2>ShopingCart</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quaerat minima excepturi, ea aspernatur cupiditate, quae fugiat consectetur quibusdam vel maxime blanditiis ex molestias, eveniet nihil neque asperiores dolorem incidunt?
					Consectetur, eos mollitia dolores perspiciatis minima ipsa illo. Dolorem cupiditate deserunt maxime, tenetur, ea fuga corrupti laborum molestias quidem, ut impedit. Et eius rerum, quas pariatur consequatur ab tempore saepe.
					Sequi fugit quos fugiat saepe rerum eum soluta nostrum optio odit dolores unde, minima magni aperiam non deserunt, aspernatur quaerat dolorem suscipit cupiditate cum error inventore? Voluptatem iste cum officiis.</p>
				<div className="products-container">
					{context.data.map((card, index) => {
						return (
							<div className="product" key={index}>
								<h3>{card.id}</h3>
								<div>
									<img src={card.image + "/300"} alt="Image" />
								</div>
								<p>Ціна: <span>{card.price}</span></p>
								<p>{card.description}</p>
								<button onClick={() => handleClickRemove(index)}>Видалить</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Basket;