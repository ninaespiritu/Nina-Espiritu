import "../styles/Socials.css";
import { BsBehance, BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

const Socials = () => {
	return (
		<div className="socials">
			<a
				href="https://github.com/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<BsGithub size="1.5em" />
				</div>
			</a>
			<a
				href="https://www.behance.net/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<BsBehance size="1.5em" />
				</div>
			</a>
			<a
				href="https://dribbble.com/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<BsDribbble size="1.5em" />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/nina-espiritu/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<BsLinkedin size="1.5em" />
				</div>
			</a>
		</div>
	);
};

export default Socials;
