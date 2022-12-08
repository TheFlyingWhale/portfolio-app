import { createStyles } from "@mantine/core";

const useFooterStyles = createStyles((theme) => {
	const { breakpoints } = theme;

	return {
		root: {
			justifyContent: "center",
		},

		container: {
			width: "100%",
			backgroundColor: "orange",
			padding: `${4}em ${6}em`,
			marginBottom: `${6 * 20}px`,
			color: "white",
			background:
				"linear-gradient(135deg, #E52E7D, #FF9D33, #E52E7D, #FF9D33)",
			backgroundSize: "400% 400%",
			borderRadius: 6 * 2,

			[`@media(max-width: ${breakpoints.lg}px)`]: {
				padding: `${3}em ${4}em`,
			},

			[`@media(max-width: ${breakpoints.md}px)`]: {
				padding: `${3}em ${3}em`,
			},

			[`@media(max-width: ${breakpoints.sm}px)`]: {
				fontSize: `${(1 / 16) * 6 * 3.5}em`,
			},
		},

		title: {
			fontSize: `${(1 / 16) * 6 * 10}em`,
			whiteSpace: "nowrap",

			[`@media(max-width: ${breakpoints.md}px)`]: {
				fontSize: "7vw",
				//fontSize: `${(1 / 16) * 6 * 8}em`,
			},

			[`@media(max-width: ${breakpoints.sm}px)`]: {
				fontSize: "6vw",
				//fontSize: `${(1 / 16) * 6 * 4}em`,
			},
		},

		text: {
			whiteSpace: "nowrap",
			fontSize: `${(1 / 16) * 6 * 3.5}em`,

			[`@media(max-width: ${breakpoints.md}px)`]: {
				fontSize: `${(1 / 16) * 6 * 3.5}em`,
			},

			[`@media(max-width: ${breakpoints.sm}px)`]: {
				fontSize: `4vw`,
			},
		},
	};
});

export default useFooterStyles;
