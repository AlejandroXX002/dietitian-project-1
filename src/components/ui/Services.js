import React from "react";
import "./Services.css";
import { FaRegAddressBook, FaHeartbeat } from "react-icons/fa";
import { GiOrange, GiMedicinePills } from "react-icons/gi";

const Services = () => {
	return (
		<div className="main-container">
			<h2> MIS SERVICIOS</h2>
			<div className="service-container">
				<FaRegAddressBook className="icons" />
				<h3> Consultas especializadas</h3>
				<span>
					Puedes agendar tus citas para que sean en linea o presenciales.
				</span>
				<a
					href="https://www.doctoralia.com.mx/carmen-cecilia-esparza-morales/medico-general-especialista-en-obesidad-y-delgadez/villahermosa"
					target="_blank"
					className=""
				>
					Agenda tú cita
				</a>
			</div>
			<div className="service-container">
				<GiOrange className="icons" />
				<h3>Chequeo Nutricional</h3>
				<span>descripcion</span>
			</div>
			<div className="service-container">
				<FaHeartbeat className="icons" />
				<h3>Chequeo Medico General</h3>
				<span>descripcion</span>
			</div>
			<div className="service-container">
				<GiMedicinePills className="icons" />
				<h3>Suplementacion</h3>
				<span>descripcion</span>
			</div>
		</div>
	);
};

export default Services;
