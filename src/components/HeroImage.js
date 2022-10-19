import "../styles/HeroImage.css";
import HeroImg from "../images/HeroImage.png";

const HeroImage = () => {
	return (
		<div id="home" className="hero">
			<img
				src={HeroImg}
				alt="Digital illustration of a woman working at a desk"
			/>
		</div>
	);
};

export default HeroImage;
