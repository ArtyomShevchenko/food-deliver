import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shops from "./components/Shops"
import ShopingCart from "./components/ShopingCart";
import Error from "./components/Error";

function App(props) {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route>
					<Route path="/" element={<Shops />} />
					<Route path="/shopingcart" element={<ShopingCart />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
