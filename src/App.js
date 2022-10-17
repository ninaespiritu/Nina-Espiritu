import "./App.css";
import Intro from "./components/Intro";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
	return (
		<div className="app">
			<div className="app-intro">
				<Intro />
			</div>
			<div className="app-all">
				<HeroImage />
				<About />
				<Experience />
				<Projects />
			</div>
		</div>
	);
};

export default App;
