import { useState } from "react";
import "../styles/Experience.css";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const Experience = () => {
	const [click1, setClick1] = useState(false);
	const [click2, setClick2] = useState(false);
	const [click3, setClick3] = useState(false);
	const handleClick1 = () => setClick1(!click1);
	const handleClick2 = () => setClick2(!click2);
	const handleClick3 = () => setClick3(!click3);

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
							<h3>Technical Analyst @ GRAYCE</h3>
							<h4>London, UK | Apr 2022 - present</h4>
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
							I'm part of a community of emerging tech
							professionals, working on digital transformation
							projects across the UK. The three-year Tech+
							Development Programme at Grayce provides me with
							accredited qualifications, career coaching and
							hands-on experience to support my professional
							development.
						</p>
						<p className="resp">
							<span>Current Client Role:</span> Test Analyst
							(Performance &amp; Integrated Testing) at a
							multinational technology corporation
						</p>
						<ul>
							<li>
								Meeting with Architects, Test Managers, and
								Business Analysts to understand the scope of
								projects and identify test requirements
							</li>
							<li>
								Planning, executing and reporting performance
								tests
							</li>
							<li>
								Using testing and documentation tools (JIRA,
								Confluence, JMeter)
							</li>
							<li>Writing detailed test cases</li>
							<li>
								Executing test script, running automated tests,
								and reporting defects
							</li>
							<li>Testing in different environments</li>
							<li>
								Monitoring applications and software systems
							</li>
							<li>
								Communicating findings to technical and
								non-technical colleagues
							</li>
						</ul>
					</div>
				</motion.div>

				<motion.div className="job2" variants={item}>
					<div className="job-title" onClick={() => handleClick2()}>
						<div>
							<h3>Thumbnail Designer @ WatchNetwork</h3>
							<h4>UK (Remote) | Nov 2021 - present</h4>
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
							As a freelancer, I create thumbnails for the
							company's YouTube videos whilst adhering to brand
							guidelines and using Adobe Photoshop to make each
							thumbnail unique.
						</p>
					</div>
				</motion.div>

				<motion.div className="job3" variants={item}>
					<div className="job-title" onClick={() => handleClick3()}>
						<div>
							<h3>Design and Marketing Assiociate @ Flytinary</h3>
							<h4>UK (Remote) | Jan 2021 - Jul 2021</h4>
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
							I joined the Flytinary Team in December 2020 as a
							Graphic Design Intern and later progressed into a
							Design and Marketing Associate position.
						</p>
						<ul>
							<li>
								Creating digital content for the company's
								social media campaigns, using Canva Teams and
								Adobe Photoshop
							</li>
							<li>
								Edited and launched multiple videos
								advertisements for the Flytinary App
							</li>
							<li>
								Growing the company's Instagram following from
								4k to 5.8k followers
							</li>
							<li>
								Collaborating with the Design and Marketing team
								with strong communication skills
							</li>
							<li>
								Working to tight deadlines, reporting to the
								Managing Director
							</li>
						</ul>
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
