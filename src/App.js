import Intro from "./components/Intro";
import HeroImage from "./components/HeroImage";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="app-intro">
				<Intro />
			</div>
			<div className="app-all">
				<HeroImage />
			</div>
		</div>
	);
};

export default App;
