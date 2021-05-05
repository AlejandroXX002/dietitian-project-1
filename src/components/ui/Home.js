import React from "react";
import { Hero } from "./Hero";
import "./Home.css";
import Opinions from "./Opinions";
import { OpinionsData } from "./OpinionsData";
import Services from "./Services";

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Services />
			<Opinions slides={OpinionsData} />
		</div>
	);
};

export default Home;
