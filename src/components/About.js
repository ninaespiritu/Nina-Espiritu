import "../styles/About.css";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const About = () => {
	return (
		<motion.div
			id="about"
			className="about"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.h2 variants={item}>About Me</motion.h2>
			<motion.h3 variants={item}>
				I began self-studying web development after being mesmerised by
				what I could create with code. I enjoy being able to combine
				both my passion for design and my love for technology and
				problem-solving.
			</motion.h3>
			<motion.p variants={item}>
				As a Software Development Bootcamp graduate, I started my tech
				career on the GRAYCE Tech+ Graduate Development Programme which
				shapes emerging talent into future tech leaders. I am currently
				embarking on my new adventure as a Junior Software Engineer at
				the BBC. I am also passionate about supportive initiatives that
				help bring more women and ethnic minorities into the tech
				industry.
			</motion.p>
			<motion.p variants={item}>
				Here are some technologies I have been working with:
			</motion.p>
			<motion.ul className="about-skills" variants={item}>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					JavaScript E6+
				</li>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					HTML &amp; CSS
				</li>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					React.js
				</li>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					Node.js
				</li>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					MongoDB
				</li>
				<li>
					<span>
						<HiArrowRight />
					</span>{" "}
					Python
				</li>
			</motion.ul>
		</motion.div>
	);
};

export default About;
