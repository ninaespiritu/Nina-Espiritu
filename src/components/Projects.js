import "../styles/Projects.css";
import ProjectTile from "./ProjectTile";
import IMG_Catjack from "../images/Project_Catjack.png";
import IMG_CoffeeIsLife from "../images/Project_CoffeeIsLife.png";
import IMG_ManUnited from "../images/Project_ManUnited.png";
import IMG_Coffida from "../images/Project_Coffida.png";
import IMG_Notion from "../images/Project_Notion.png";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const Projects = () => {
	return (
		<motion.div
			id="projects"
			className="projects"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.h2 variants={item}>Some Projects I've Made</motion.h2>
			<ProjectTile
				image={IMG_Catjack}
				title="Catjack"
				description="A cat-themed Blackjack game, Catjack is a spin on your traditional Blackjack game — score as close to 21 and beat the dealer's hand to keep winning, or you risk losing your 9 cat lives!"
				techstack="JavaScript, React.js, HTML &amp; CSS, Figma"
				website="https://catjack.netlify.app/"
				github="https://github.com/ninaespiritu/Catjack"
			/>
			<ProjectTile
				image={IMG_CoffeeIsLife}
				title="Coffee Is Life Website"
				description="A full-stack MERN application for coffee lovers. Users can signup or login to browse cafes, view information about each shop, read reviews left by fellow coffee enthusiasts and publish your own."
				techstack="JavaScript, React.js, Node.js, Express, MongoDB"
				website="https://coffeeislife.netlify.app/"
				github="https://github.com/ninaespiritu/Coffee-Is-Life"
			/>
			<ProjectTile
				image={IMG_Notion}
				title="Notion Website Clone"
				description="Cloning the website design of Notion’s home page as close to identical as possible. Only HTML and CSS were used to build this clone. This is one of my first projects while learning how to code and build websites from scratch. "
				techstack="HTML &amp; CSS"
				website="https://ninaespiritu.github.io/Notion-Website-Clone/"
				github="https://github.com/ninaespiritu/Notion-Website-Clone"
			/>
			<ProjectTile
				image={IMG_ManUnited}
				title="Man United App Design"
				description="A UX/UI design project centred on redesigning a part of Manchester United's mobile application. The aim of the redesign is to improve the accessibility of navigating to the league table results, especially for those new to football."
				techstack="Figma &amp; Adobe Photoshop"
				behance="https://www.behance.net/gallery/143700323/Manchester-United-App-Redesign"
			/>
			<ProjectTile
				image={IMG_Coffida}
				title="Coffida Mobile App Design"
				description="A UX/UI design project for a conceptual app centered on reviewing cafés and their coffee drinks. Sounds familiar? Yes, this was the inspiration for my full-stack project, Coffee Is Life."
				techstack="Figma &amp; Adobe Photoshop"
				behance="https://www.behance.net/gallery/123523189/Coffida-UI-App-Design"
			/>
		</motion.div>
	);
};

export default Projects;
