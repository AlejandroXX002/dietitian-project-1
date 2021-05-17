import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div>
			<div className="hero">
				<div className="container">
					<h1>MEDICINA GENERAL Y NUTRICIÓN CLÍNICA</h1>
					<h2>¡Yo te ayudo a hacerlo posible!</h2>
				</div>

				<div className="buttons-container">
					<Link to="/about-me" className="about-button">
						Acerca de mi
					</Link>
				</div>
			</div>
		</div>
	);
};
