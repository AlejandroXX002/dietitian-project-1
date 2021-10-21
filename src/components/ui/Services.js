import "./Services.css";

import React, { useState } from "react";

import Popup from "./Popup";
import { ServiceData } from "./ServicesData";

const Services = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState();

  /**
   * Opens or closes the popup, and sets the content we want to show.
   * @param {number} index Index of the element we want to render inside of the Popup
   */
	const togglePopup = (index) => {
		setIsOpen(!isOpen); // ⭐️
    if(typeof index !== 'number') {
      return
    }
    setContent(ServiceData[index].description)
	};

  const renderContainer = (serviceData) => ServiceData.map((icon, index) => {
    return (
      <div
        className={`service-container container-${index}`}
        onClick={() => togglePopup(index)}

        key={index}
      >
        <div className="titles-container">
          <div className="icons">{icon.icon}</div>
          <h2 className="title">{icon.title}</h2>
          <h4 className="subtitle">{icon.titleTwo}</h4>
        </div>

        <a href={icon.link} rel="noreferrer" target="_blank" className="link">
          {icon.linkName}
        </a>
        <hr />
      </div>
    );
  })

  const renderPopUp = () => isOpen
  && content && (
    <Popup
      content={content}
      handleClose={() => togglePopup()}
    />
      )

	return (
		<div className="main-container">
			{renderContainer(ServiceData)}
      {renderPopUp()}
		</div>
	);
};

export default Services;
