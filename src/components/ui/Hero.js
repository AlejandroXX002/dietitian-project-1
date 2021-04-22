import React from "react";
import "./Hero.css";
import photo from "../../images/asuka.png";

export const Hero = () => {
	return (
		<div className="hero">
			<div className="intro">
				<h1>Hola soy Asuka tu medico favorita!</h1>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Eligendi non quis exercitationem culpa nesciunt nihil Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Eligendi non quis
					exercitationem culpa nesciunt nihil Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Eligendi non quis exercitationem
					culpa nesciunt nihil Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Eligendi non quis exercitationem culpa nesciunt
					nihil
				</div>
			</div>
			<img src={photo} />
		</div>
	);
};
