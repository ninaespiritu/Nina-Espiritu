import "../styles/Intro.css";
import { motion } from "framer-motion";

const Intro = () => {
	const containerIntro = {
		hidden: {
			opacity: 0,
			scale: 0.85,
			y: -10,
			filter: "blur(5px)",
		},
		show: {
			opacity: 1,
			scale: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.75,
				delay: 0.5,
				ease: "easeOut",
				staggerChildren: 0.25,
				delayChildren: 1,
			},
		},
	};

	const itemIntro = {
		hidden: {
			opacity: 0,
			y: 40,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.75,
				ease: "easeOut",
			},
		},
	};

	return (
		<header id="home" className="intro">
			<motion.div
				id="intro"
				className="intro-info"
				variants={containerIntro}
				initial="hidden"
				animate="show"
			>
				<h1>Hello, I'm Nina</h1>
				<motion.h2 variants={itemIntro}>I love to design and code</motion.h2>
				<motion.p variants={itemIntro}>
					I am a passionate tech professional with a keen interest in
					full-stack development, graphic design, user experience, and
					everything in between.
				</motion.p>
				<a href="#contact">
					<motion.button variants={itemIntro}>
						Contact Me
					</motion.button>
				</a>
			</motion.div>
		</header>
	);
};

export default Intro;
