import React from "react";
import "./Popup.css";

const Popup = ({ handleClose, content }) => {
	return (
		<div className="popup-box">
			{console.log(content)}
			<div className="box">
				<span className="close-icon" onClick={handleClose}>
					x
				</span>
				{content}
			</div>
		</div>
	);
};

export default Popup;
