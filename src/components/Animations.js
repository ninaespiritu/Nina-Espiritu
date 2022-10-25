export const container = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const item = {
	hidden: {
		opacity: 0,
		scale: 1.1,
		filter: "blur(5px)",
	},
	show: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};
