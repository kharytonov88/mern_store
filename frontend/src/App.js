import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";

// Components
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
const App = () => {
	const [sideToggle, setSideToggle] = useState(false);
	return (
		<Router>
			<div className="app">
				<Navbar click={() => setSideToggle(true)} />
				<SideDrawer show={sideToggle} />
				<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
				<main>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="cart" element={<CartScreen />} />
						<Route path=":productId" element={<ProductScreen />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
