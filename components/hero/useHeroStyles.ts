import { createStyles } from "@mantine/core";

const useHeroStyles = createStyles((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-evenly",
			minHeight: "600px",
			wrap: "noWrap",
			gap: `${6 * 10}px`,

			[`@media(max-width: ${theme.breakpoints.md}px)`]: {
				minHeight: "400px",
			},

			[`@media(max-width: ${theme.breakpoints.sm}px)`]: {
				minHeight: "300px",
			},
		},

		grid: {
			flexGrow: 1,
		},

		textContainer: {
			display: "flex",
			alignItems: "start",
			justifyContent: "center",
			zIndex: 10,
			gap: 0,
		},

		textTitle: {
			whiteSpace: "nowrap",

			fontSize: `${(1 / 16) * 6 * 14}em`,

			[`@media(max-width: ${theme.breakpoints.md}px)`]: {
				fontSize: `${(1 / 16) * 6 * 8}em`,
			},

			[`@media(max-width: ${theme.breakpoints.sm}px)`]: {
				fontSize: `${(1 / 16) * 6 * 6}em`,
			},
		},

		textSubtitle: {
			fontSize: `${(1 / 16) * 6 * 4}em`,

			[`@media(max-width: ${theme.breakpoints.sm}px)`]: {
				fontSize: `${(1 / 16) * 6 * 3.5}em`,
			},
		},

		imageContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "end",

			[`@media(max-width: ${theme.breakpoints.md}px)`]: {
				display: "none",
			},
		},
	};
});

export default useHeroStyles;
