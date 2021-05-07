import React, { useState } from "react";
import "./Services.css";
import Popup from "./Popup";
import { ServiceData } from "./ServicesData";

const Services = () => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="main-container">
			{ServiceData.map((icon) => {
				return (
					<>
						<div className="service-container" onClick={togglePopup}>
							<div className="icons">{icon.icon}</div>
							<h3>{icon.title}</h3>
							<a href={icon.link} target="_blank" className="">
								{icon.linkName}
							</a>
						</div>
						{isOpen && (
							<Popup
								content={icon.description}
								handleClose={togglePopup}
							/>
						)}
					</>
				);
			})}
		</div>
	);
};

export default Services;
