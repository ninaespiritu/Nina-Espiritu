import "../styles/Intro.css";

const Intro = () => {
	return (
		<header id="home" className="intro">
			{/* <Navbar /> */}

			<div id="intro" className="intro-info">
				<h1>Hello, I'm Nina</h1>
				<h2>Developer + Designer</h2>
				<p>
					I am a passionate tech professional with a keen interest in
					full-stack development, graphic design, user exprience, and
					everything in between.
				</p>
				<a href="#contact">
					<button>Contact Me</button>
				</a>
			</div>

			{/* <Socials /> */}
		</header>
	);
};

export default Intro;
