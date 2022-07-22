import React from "react";

const ButtonToTop = () => {
	const [isActive, setIsActive] = React.useState("button-to-top-hidden")

	window.addEventListener("scroll", () => {
		if (window.scrollY < 800) {
			setIsActive("button-to-top-hidden")
		} else {
			setIsActive("button-to-top-show")
		};
	})

	// ----

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	return (
		<button onClick={handleClick} className={isActive}>
			UP
		</button>
	)
}

export default ButtonToTop;