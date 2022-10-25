import "../styles/Navbar.css";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const handleHome = () => {
		handleClick();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const itemNavbar = {
		hidden: {
			scale: 0,
		},
		show: {
			scale: [0, 1.75, 1],
			transition: {
				delay: 2.5,
				type: "spring",
			},
		},
	};

	return (
		<motion.nav
			className={click ? "navbar active" : "navbar"}
			onClick={handleClick}
			variants={itemNavbar}
			initial="hidden"
			animate="show"
		>
			<div className={click ? "nav-icons active" : "nav-icons"}>
				<div>
					<BsPlusLg />
				</div>
			</div>

			<ul className={click ? "nav-items active" : "nav-items"}>
				<a href="#home">
					<li onClick={handleHome}>Home</li>
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
		</motion.nav>
	);
};

export default Navbar;
