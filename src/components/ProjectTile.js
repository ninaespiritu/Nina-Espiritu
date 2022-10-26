import "../styles/ProjectTile.css";
import { HiArrowRight } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const ProjectTile = (props) => {
	const itemProjectImage = {
		hidden: {
			opacity: 0,
			scale: 0.5,
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="project"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.45 }}
		>
			<motion.div className="project-img" variants={itemProjectImage}>
				<img src={props.image} alt="" />
			</motion.div>

			<div className="project-info">
				<motion.h3 variants={item}>{props.title}</motion.h3>
				<motion.p variants={item}>{props.description}</motion.p>
				<motion.p className="project-techstack" variants={item}>
					<HiArrowRight />
					<span>{props.techstack}</span>
				</motion.p>

				<motion.div className="project-links" variants={item}>
					{props.website ? (
						<a
							href={props.website}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>
								Website
								<span>
									<FaExternalLinkAlt />
								</span>
							</button>
						</a>
					) : null}
					{props.github ? (
						<a
							href={props.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>
								GitHub
								<span>
									<FaExternalLinkAlt />
								</span>
							</button>
						</a>
					) : null}
					{props.behance ? (
						<a
							href={props.behance}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button>
								Behance
								<span>
									<FaExternalLinkAlt />
								</span>
							</button>
						</a>
					) : null}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default ProjectTile;
