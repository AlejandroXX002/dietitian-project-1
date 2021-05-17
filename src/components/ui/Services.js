import React, { useState } from "react";
import "./Services.css";
import Popup from "./Popup";
import { ServiceData } from "./ServicesData";

const Services = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContenxt] = useState();

	const togglePopup = (index) => {
		setIsOpen(!isOpen);
	const	setContent(ServiceData[index].description)
	};
	return (
		<div className="main-container">
			{ServiceData.map((icon, index) => {
				return (
					<div
						className={`service-container container-${index}`}
						onClick={togglePopup}
						key={index}
					>
						<div className="titles-container">
							<div className="icons">{icon.icon}</div>
							<h2 className="title">{icon.title}</h2>
							<h4 className="subtitle">{icon.titleTwo}</h4>
						</div>

						<a href={icon.link} target="_blank" className="link">
							{icon.linkName}
						</a>

						{isOpen && (
							<Popup key={}
								content={icon.description}
								handleClose={() => togglePopup(index)}
							/>
						)}
						<hr />
					</div>
				);
			})}
		</div>
	);
};

export default Services;
