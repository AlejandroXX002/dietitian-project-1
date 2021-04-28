import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CgHomeAlt } from "react-icons/cg";
import { ImStarFull } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import photoLogo from "../../images/largeLOGO.png";

import "./Navbar.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
				<img src={photoLogo} />
			</Link>

			<div onClick={() => setOpen(!open)} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>

			<ul className={open ? "nav-links active" : "nav-links"}>
				<li className="nav-item ">
					<Link
						to="/"
						className="btn from-left"
						onClick={() => setOpen(false)}
					>
						<CgHomeAlt className="style-icon" />
						Home
					</Link>
				</li>

				<li className="nav-item">
					<Link
						to="/testimonials"
						className="btn from-left"
						onClick={() => setOpen(false)}
					>
						<ImStarFull className="style-icon" />
						Testimonios
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/contact"
						className="btn from-left"
						onClick={() => setOpen(false)}
					>
						<AiOutlineProfile className="style-icon" />
						Contacto
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/about-me"
						className="btn from-left"
						onClick={() => setOpen(false)}
					>
						<RiContactsLine className="style-icon" />
						Conoceme
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
