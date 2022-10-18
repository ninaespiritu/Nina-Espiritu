import "../styles/ProjectTile.css";

const ProjectTile = (props) => {
	const arrow = (
		<svg width="16" height="16" viewBox="0 0 16 16">
			<path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
		</svg>
	);

	return (
		<div className="project">
			<div className="project-img">
				<img src={props.image} alt="" />
			</div>

			<div>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<p>
					<span>{props.techstack}</span>
				</p>

				<div>
					{props.website ? (
						<a href={props.website} alt="">
							<button>Website</button>
						</a>
					) : null}
					{props.github ? (
						<a href={props.github} alt="">
							<button>GitHub</button>
						</a>
					) : null}
					{props.behance ? (
						<a href={props.behance} alt="">
							<button>Behance</button>
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectTile;
