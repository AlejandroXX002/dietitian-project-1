import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/navbar/AboutMe";
import Contact from "./components/navbar/Contact";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/navbar/Testimonials";
import Home from "./components/ui/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about-me" exact component={AboutMe} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/testimonials" exact component={Testimonials} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
