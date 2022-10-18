import "../styles/ProjectTile.css";
import { HiArrowRight } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectTile = (props) => {
	return (
		<div className="project">
			<div className="project-img">
				<img src={props.image} alt="" />
			</div>

			<div className="project-info">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<p className="project-techstack">
					<HiArrowRight /><span>{props.techstack}</span>
				</p>

				<div className="project-links">
					{props.website ? (
						<a href={props.website} target="_blank" rel="noopener noreferrer">
							<button>Website<span><FaExternalLinkAlt /></span></button>
						</a>
					) : null}
					{props.github ? (
						<a href={props.github} target="_blank" rel="noopener noreferrer">
							<button>GitHub<span><FaExternalLinkAlt /></span></button>
						</a>
					) : null}
					{props.behance ? (
						<a href={props.behance} target="_blank" rel="noopener noreferrer">
							<button>Behance<span><FaExternalLinkAlt /></span></button>
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
