import React from "react";
import Context from "./Context";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Basket from "./components/Basket";
import Error from "./components/Error";

function App() {
	const [length, setLength] = React.useState(0)

	const contextData = {
		data: [],
		length: 0,
	}

	return (
		<Context.Provider value={contextData}>
			<div className="App">
				<Header />
				<Routes>
					<Route>
						<Route path="/" element={<Home />} />
						<Route path="/basket" element={<Basket />} />
						<Route path="*" element={<Error />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</Context.Provider>
	);
}

export default App;
