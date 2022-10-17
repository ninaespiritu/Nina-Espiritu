import "../styles/Projects.css";
import ProjectTile from "./ProjectTile";
import IMG_CoffeeIsLife from "../images/Project_CoffeeIsLife.png";
import IMG_ManUnited from "../images/Project_ManUnited.png";
import IMG_Coffida from "../images/Project_Coffida.jpg";
import IMG_Notion from "../images/Project_Notion.png";

const Projects = () => {
	return (
		<div className="projects">
			<ProjectTile
				image={IMG_CoffeeIsLife}
				title="Coffee Is Life Website"
			/>
      <ProjectTile
				image={IMG_ManUnited}
				title="Man United App Design"
			/>
      <ProjectTile
				image={IMG_Coffida}
				title="Coffida Mobile App Design"
			/>
      <ProjectTile
				image={IMG_Notion}
				title="Notion Website Clone"
			/>
		</div>
	);
};

export default Projects;
