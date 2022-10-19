import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<nav>
			<div onClick={handleClick}>
				{click ? <button>Close</button> : <button>Menu</button>}
			</div>
			
			<ul>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
