import React from "react";
import Opinions from "./Opinions";
import Footer from "./Footer";
import { Hero } from "./Hero";
import { OpinionsData } from "./OpinionsData";
import "./Home.css";

import Services from "./Services";

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Services />
			<Opinions slides={OpinionsData} />
			<Footer />
		</div>
	);
};

export default Home;
