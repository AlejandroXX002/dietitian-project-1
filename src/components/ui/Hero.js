import React from "react";
import "./Hero.css";
import heroPhoto from "../../images/picnic.jpeg";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<img className="img-profile" src={heroPhoto} />
				<div className="positioning">
					<a
						href="https://www.doctoralia.com.mx/carmen-cecilia-esparza-morales/medico-general-especialista-en-obesidad-y-delgadez/villahermosa"
						target="_blank"
						className="hire-button"
					>
						Agenda <br /> tú cita
					</a>
					<Link to="/about-me" className="about-button">
						Acerca <br /> de mi
					</Link>
				</div>
			</div>

			<div className="containers">
				<h1>¡Yo te ayudo a hacerlo posible!</h1>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Eligendi non quis exercitationem culpa nesciunt nihil Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Eligendi non quis
					exercitationem culpa nesciunt nihil Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Eligendi non quis exercitationem
				</div>
			</div>
		</div>
	);
};
