import "../styles/About.css";

const About = () => {
	const arrow = (
		<svg width="16" height="16" viewBox="0 0 16 16">
			<path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
		</svg>
	);

	return (
		<div className="about">
			<h2>About Me</h2>
			<h3>
				I began self-studying web development after being mesmerised by
				what I could create with code. I enjoy being able to combine
				both my passion for design and my love for technology and
				problem-solving.
			</h3>
			<p>
				I am a recent Software Development Bootcamp graduate, starting
				my tech career on the Grayce Tech+ Graduate Development
				Programme which shapes emerging talent into future tech leaders.
				I am currently on assigment with a multinational technology
				corporation nationwide to help them implement a high-level
				software testing strategy.
			</p>
			<p>Here are some technologies I have been working with:</p>
			<ul className="about-skills">
				<li>
					<span>{arrow}</span> JavaScript E6+
				</li>
				<li>
					<span>{arrow}</span> HTML &amp; CSS
				</li>
				<li>
					<span>{arrow}</span> React.js
				</li>
				<li>
					<span>{arrow}</span> Node.js
				</li>
				<li>
					<span>{arrow}</span> MongoDB
				</li>
				<li>
					<span>{arrow}</span> Python
				</li>
			</ul>
		</div>
	);
};

export default About;
