import "./App.css";
import Intro from "./components/Intro";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<div className="app-intro">
				<Intro />
				<div className="app-socials">
				<Socials />
				</div>
			</div>
			<div className="app-all">
				<HeroImage />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};

export default App;
