import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<h1>MEDICINA GENERAL Y NUTRICIÓN CLÍNICA</h1>
				<h2>¡Yo te ayudo a hacerlo posible!</h2>
			</div>

			<div className="buttons-container">
				<a
					href="https://www.doctoralia.com.mx/carmen-cecilia-esparza-morales/medico-general-especialista-en-obesidad-y-delgadez/villahermosa"
					target="_blank"
					className="hire-button"
				>
					Agenda tú cita
				</a>
				<Link to="/about-me" className="about-button">
					Acerca de mi
				</Link>
			</div>
		</div>
	);
};
