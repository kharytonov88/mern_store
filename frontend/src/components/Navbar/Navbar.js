import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar__logo">
				<h2>Part Store</h2>
			</div>
			{/* links */}
			<ul className="navbar__links">
				<li>
					<Link to="/cart" className="cart__link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							{" "}
							Cart
							<span className="cartlogo__badge">0</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/" className="cart__link">
						Shop
					</Link>
				</li>
			</ul>

			<div className="hamburger__menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
