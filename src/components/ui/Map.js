import React from "react";
import map from "../../images/map.png";
import "./Map.css";

const Map = () => {
	return (
		<div className="ubication-container">
			<a href="https://g.page/DraCeciliaEsparza?share" target="_blank">
				<img className="map" src={map} />
			</a>
			<div>
				Av. Jose Pages Llergo 111 Col, Lago Ilusiones, 86125 Villahermosa,
				Tab.
			</div>
			<table>
				<tbody>
					<tr>
						<th>Domingo</th>
						<td>Cerrado</td>
					</tr>
					<tr>
						<th>Lunes</th>
						<td>9am - 5pm,</td>
						<td> 9am - 5pm</td>
					</tr>
					<tr>
						<th>Martes</th>
						<td>9am - 5pm,</td>
						<td>9am - 5pm</td>
					</tr>
					<tr>
						<th>Miercoles</th>
						<td>9am - 5pm,</td>
						<td>9am - 5pm</td>
					</tr>
					<tr>
						<th>Jueves</th>
						<td>9am - 5pm,</td>
						<td>9am - 5pm</td>
					</tr>
					<tr>
						<th>viernes</th>
						<td>9am - 5pm,</td>
						<td>9am - 5pm</td>
					</tr>
					<tr>
						<th>Sabados</th>
						<td>9am - 5pm,</td>
						<td>9am - 5pm</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Map;
