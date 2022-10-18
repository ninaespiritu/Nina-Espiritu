import "../styles/Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<div>
				<h2>Get In Touch</h2>
				<h4>
					My inbox is always open &#8212; whether you have an enquiry,
					a project and collaboration idea, or just want to say hello,
					I'd love to hear from you!
				</h4>

				<div>
					<h3>Send me an email</h3>
					<a
						href="mailto:ninaangela.espiritu@gmail.com"
						rel="noopener noreferrer"
					>
						<p>ninaangela.espiritu@gmail.com</p>
					</a>
				</div>

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
			</div>

			<div className="footer">
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
		</div>
	);
};

export default Contact;
