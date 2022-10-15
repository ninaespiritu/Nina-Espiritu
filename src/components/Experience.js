import "../styles/Experience.css";

const Experience = () => {
	return (
		<div className="experience">
			<div className="work">
				<h2>Work Experience</h2>

				<div className="grayce">
					<h3>Technical Analyst @ GRAYCE</h3>
					<h4>London, UK | Apr 2022 - present</h4>
					<p>
						I’m part of a community of emerging tech professionals,
						working on digital transformation projects across the
						UK. The three-year Tech+ Development Programme at Grayce
						provides me with accredited qualifications, career
						coaching and hands-on experience to support my
						professional development.
					</p>
					<p>
						Current Client Role: Test Analyst (Performance Testing)
						at a multinational technology corporation
					</p>
					<ul>
						<li>
							Meeting with Architects, Test Managers, and Business
							Analysts to understand the scope of projects and
							identify test requirements​
						</li>
						<li>
							Planning, executing and reporting performance tests​
						</li>
						<li>
							Using testing and documentation tools (JIRA,
							Confluence, JMeter)​
						</li>
						<li>Writing detailed test cases​</li>
						<li>
							Executing test script, running automated tests, and
							reporting defects
						</li>
						<li>Testing in different environments</li>
						<li>Monitoring applications and software systems​</li>
						<li>
							Communicating findings to technical and
							non-technical colleagues​
						</li>
					</ul>
				</div>

				<div className="watch-network">
					<h3>Thumbnail Designer @ WatchNetwork</h3>
					<h4>London, UK | Nov 2022 - present</h4>
					<p>
						As a freelancer, I create thumbnails for the company's
						YouTube videos whilst adhering to brand guidelines and
						using Adobe Photoshop to make each thumbnail unique.
					</p>
				</div>

				<div className="flytinary">
					<h3>Design and Marketing Assiociate @ Flytinary</h3>
					<h4>London, UK | Jan 2021 - Jul 2021</h4>
					<p>
						I joined the Flytinary Team in December 2020 as a
						Graphic Design Intern and later progressed into a Design
						and Marketing Associate position.
					</p>
					<ul>
						<li>
							Creating digital content for the company's social
							media campaigns, using Canva Teams and Adobe
							Photoshop
						</li>
						<li>
							Edited and launched multiple videos advertisements
							for the Flytinary App
						</li>
						<li>
							Growing the company's Instagram following from 4k to
							5.8k followers
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
			</div>

			<div className="certs">
				<h2>Certifications</h2>

				<div className="certs-box">
					<div>
						<h4>AgilePM® Agile Project Management Foundation</h4>
						<p>APMG International, 2022</p>
            <button>View Credential</button>
					</div>

					<div>
						<h4>ISTQB® Certified Tester Foundation Level</h4>
						<p>BCS, The Chartered Institute for IT, 2022</p>
            <button>View Credential</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
