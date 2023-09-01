import { useState } from "react";
import "../styles/Experience.css";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const Experience = () => {
	const [click1, setClick1] = useState(false);
	const [click2, setClick2] = useState(false);
	const [click3, setClick3] = useState(false);
	const [click4, setClick4] = useState(false);
	const [click5, setClick5] = useState(false);
	const handleClick1 = () => setClick1(!click1);
	const handleClick2 = () => setClick2(!click2);
	const handleClick3 = () => setClick3(!click3);
	const handleClick4 = () => setClick4(!click4);
	const handleClick5 = () => setClick5(!click5);

	return (
		<div id="experience" className="experience">
			<motion.div
				className="work"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<motion.h2 variants={item}>Work Experience</motion.h2>

				<motion.div className="job1" variants={item}>
					<div className="job-title" onClick={() => handleClick1()}>
						<div>
							<h3>Junior Software Engineer @ BBC</h3>
							<h4>London, UK | Aug 2023 - present</h4>
						</div>
						<div
							className={
								click1 ? "job-toggle active" : "job-toggle"
							}
						>
							<FaChevronRight size="1.1em" />
						</div>
					</div>
					<div className={click1 ? "desc active1" : "desc"}>
						<p>
							I am part of the BBC’s Corporate Digital &amp;
							Applications team that looks after the BBC intranet,
							internal web and mobile apps and external corporate
							sites which receive millions of views from our
							audience every month.
						</p>
					</div>
				</motion.div>

				<motion.div className="job2" variants={item}>
					<div className="job-title" onClick={() => handleClick2()}>
						<div>
							<h3>Test Analyst @ IBM</h3>
							<h4>London, UK | Apr 2022 - Aug 2023</h4>
						</div>
						<div
							className={
								click2 ? "job-toggle active" : "job-toggle"
							}
						>
							<FaChevronRight size="1.1em" />
						</div>
					</div>
					<div className={click2 ? "desc active2" : "desc"}>
						<p>
							I worked in IBM's Performance Testing team, where I
							contributed to implementing a testing strategy for
							file transfer interfaces, ensuring smooth
							integration between components and stable
							performance under varying loads.
						</p>
					</div>
				</motion.div>

				<motion.div className="job3" variants={item}>
					<div className="job-title" onClick={() => handleClick3()}>
						<div>
							<h3>Technical Analyst @ GRAYCE</h3>
							<h4>London, UK | Apr 2022 - Aug 2023</h4>
						</div>
						<div
							className={
								click3 ? "job-toggle active" : "job-toggle"
							}
						>
							<FaChevronRight size="1.1em" />
						</div>
					</div>
					<div className={click3 ? "desc active3" : "desc"}>
						<p>
							I was part of GRAYCE's Tech+ Development Programme,
							upskilling alongside a dynamic community of emerging
							tech professionals. Engaged in digital
							transformation projects across the UK, this program
							provided invaluable training, accredited
							qualifications, and hands-on experience to fuel my
							professional growth. I was primarily dedicated to a
							client assignment with IBM.
						</p>
					</div>
				</motion.div>

				<motion.div className="job4" variants={item}>
					<div className="job-title" onClick={() => handleClick4()}>
						<div>
							<h3>Thumbnail Designer @ WatchNetwork</h3>
							<h4>UK (Remote) | Nov 2021 - Jan 2023</h4>
						</div>
						<div
							className={
								click4 ? "job-toggle active" : "job-toggle"
							}
						>
							<FaChevronRight size="1.1em" />
						</div>
					</div>
					<div className={click4 ? "desc active4" : "desc"}>
						<p>
							As a freelancer, I created thumbnails for the
							company's YouTube videos whilst adhering to brand
							guidelines and using Adobe Photoshop to make each
							thumbnail unique.
						</p>
					</div>
				</motion.div>

				<motion.div className="job5" variants={item}>
					<div className="job-title" onClick={() => handleClick5()}>
						<div>
							<h3>Design and Marketing Intern @ Flytinary</h3>
							<h4>UK (Remote) | Jan 2021 - Jul 2021</h4>
						</div>
						<div
							className={
								click5 ? "job-toggle active" : "job-toggle"
							}
						>
							<FaChevronRight size="1.1em" />
						</div>
					</div>
					<div className={click5 ? "desc active5" : "desc"}>
						<p>
							I crafted digital content for Instagram campaigns,
							designed graphics for posts, launched video
							advertisements to promote the Flytinary App, and
							collaborated on social media strategies to grow our
							audience.
						</p>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				className="certs"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<motion.h2 variants={item}>Certifications</motion.h2>

				<div className="certs-box">
					<motion.div variants={item}>
						<h4>AgilePM® Agile Project Management Foundation</h4>
						<p>APMG International, 2022</p>
						<a
							href="https://www.credly.com/badges/e7be6da4-b0e8-4a7c-bea9-fd9487a9ae65?source=linked_in_profile"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button id="cert-agile">View Credential</button>
						</a>
					</motion.div>

					<motion.div variants={item}>
						<h4>ISTQB® Certified Tester Foundation Level</h4>
						<p>BCS, The Chartered Institute for IT, 2022</p>
						<a
							href="https://drive.google.com/file/d/1LM72lIIQK3_a7wpDyOD-vZYL6biFpwYM/view"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button id="cert-agile">View Credential</button>
						</a>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Experience;
