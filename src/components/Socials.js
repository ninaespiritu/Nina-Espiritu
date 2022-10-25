import "../styles/Socials.css";
import { BsBehance, BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Socials = () => {
	const containerSocials = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 2,
			},
		},
	};

	const itemSocials = {
		hidden: {
			opacity: 0,
			y: -15,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			className="socials"
			variants={containerSocials}
			initial="hidden"
			animate="show"
		>
			<a
				href="https://github.com/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<motion.div variants={itemSocials}>
					<BsGithub size="1.5em" />
				</motion.div>
			</a>
			<a
				href="https://www.behance.net/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<motion.div variants={itemSocials}>
					<BsBehance size="1.5em" />
				</motion.div>
			</a>
			<a
				href="https://dribbble.com/ninaespiritu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<motion.div variants={itemSocials}>
					<BsDribbble size="1.5em" />
				</motion.div>
			</a>
			<a
				href="https://www.linkedin.com/in/nina-espiritu/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<motion.div variants={itemSocials}>
					<BsLinkedin size="1.5em" />
				</motion.div>
			</a>
		</motion.div>
	);
};

export default Socials;
