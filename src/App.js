import "./App.css";
import Intro from "./components/Intro";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const App = () => {
	const slideIntro = {
		start: {
			width: "100%",
		},
		end: {
			width: "50%",
			transition: {
				duration: 1.25,
				delay: 1.5,
				ease: "anticipate",
			},
		},
	};

	return (
		<div className="app">
			<Navbar />
			<div className="app-intro">
				<Intro />
				<motion.div
					className="app-intro-slide"
					variants={slideIntro}
					initial="start"
					animate="end"
				></motion.div>
				<div className="app-socials">
					<Socials />
				</div>
			</div>
			<div className="app-all">
				<div className="section-hero">
					<HeroImage />
				</div>
				<div className="section-about">
					<About />
				</div>
				<div className="section-experience">
					<Experience />
				</div>
				<div className="section-projects">
					<Projects />
				</div>
				<div className="section-contact">
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default App;
