import "../styles/Navbar.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<nav className={click ? "navbar active" : "navbar"} onClick={handleClick}>
			
				<div className={click ? "nav-icons active" : "nav-icons"}>
					<BsPlusLg />
				</div>
			
			<ul className={click ? "nav-items active" : "nav-items"}>
				<a href="#home">
					<li onClick={handleClick}>Home</li>
				</a>
				<a href="#about">
					<li onClick={handleClick}>About</li>
				</a>
				<a href="#experience">
					<li onClick={handleClick}>Experience</li>
				</a>
				<a href="#projects">
					<li onClick={handleClick}>Projects</li>
				</a>
				<a href="#contact">
					<li onClick={handleClick}>Contact</li>
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
