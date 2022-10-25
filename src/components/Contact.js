import "../styles/Contact.css";
import Socials from "../components/Socials.js";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { container, item } from "./Animations";

const Contact = () => {
	return (
		<motion.div
			id="contact"
			className="contact"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<div>
				<motion.h2 variants={item}>Get In Touch</motion.h2>
				<motion.h4 variants={item}>
					My inbox is always open &#8212; whether you have an enquiry,
					a project and collaboration idea, or just want to say hello,
					I'd love to hear from you!
				</motion.h4>

				<motion.div className="link" variants={item}>
					<a
						href="mailto:ninaangela.espiritu@gmail.com"
						rel="noopener noreferrer"
					>
						<button>
							<IoMdMail size="1.8em" />
						</button>
					</a>

					<div>
						<h3>Send me an email</h3>
						<a
							href="mailto:ninaangela.espiritu@gmail.com"
							rel="noopener noreferrer"
						>
							<p>ninaangela.espiritu@gmail.com</p>
						</a>
					</div>
				</motion.div>

				<motion.div className="link" variants={item}>
					<a
						href="https://www.linkedin.com/in/nina-espiritu/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>
							<FaLinkedinIn size="1.8em" />
						</button>
					</a>

					<div>
						<h3>Stay connected on LinkedIn</h3>
						<a
							href="https://www.linkedin.com/in/nina-espiritu/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>https://www.linkedin.com/in/nina-espiritu/</p>
						</a>
					</div>
				</motion.div>
			</div>

			<div className="footer">
				<div className="footer-socials">
					<Socials />
				</div>
				<small>
					Built and designed by{" "}
					<a
						href="https://github.com/ninaespiritu/Nina-Espiritu"
						target="_blank"
						rel="noopener noreferrer"
					>
						Nina Espiritu
					</a>{" "}
					&copy; All rights reserved
				</small>
			</div>
		</motion.div>
	);
};

export default Contact;
