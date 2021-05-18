import React, { useState } from "react";
import "./Services.css";
import Popup from "./Popup";
import { ServiceData } from "./ServicesData";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState();
  const togglePopup = (index) => {
	  if(isOpen) {
		  setIsOpen(!isOpen)	
		return
	  }
	setIsOpen(!isOpen)	

	console.log(ServiceData)
	debugger
	setContent(ServiceData[index].description);
  };
  return (
    <div className="main-container">
      {ServiceData.map((icon, index) => {
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

            <a href={icon.link} target="_blank" className="link">
              {icon.linkName}
            </a>

            {isOpen && content && (
              <Popup
                content={content}
                handleClose={togglePopup}
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
