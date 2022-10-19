import "../styles/About.css";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
	return (
		<div id="about" className="about">
			<h2>About Me</h2>
			<h3>
				I began self-studying web development after being mesmerised by
				what I could create with code. I enjoy being able to combine
				both my passion for design and my love for technology and
				problem-solving.
			</h3>
			<p>
				I am a recent Software Development Bootcamp graduate, starting
				my tech career on the Grayce Tech+ Graduate Development
				Programme which shapes emerging talent into future tech leaders.
				I am currently on assigment with a multinational technology
				corporation nationwide to help them implement a high-level
				software testing strategy.
			</p>
			<p>Here are some technologies I have been working with:</p>
			<ul className="about-skills">
				<li>
					<span><HiArrowRight /></span> JavaScript E6+
				</li>
				<li>
					<span><HiArrowRight /></span> HTML &amp; CSS
				</li>
				<li>
					<span><HiArrowRight /></span> React.js
				</li>
				<li>
					<span><HiArrowRight /></span> Node.js
				</li>
				<li>
					<span><HiArrowRight /></span> MongoDB
				</li>
				<li>
					<span><HiArrowRight /></span> Python
				</li>
			</ul>
		</div>
	);
};

export default About;
