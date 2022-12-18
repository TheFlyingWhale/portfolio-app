import { createStyles } from "@mantine/core";

const useShellStyles = createStyles((theme) => {
	return {
		root: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			backgroundColor: theme.colors.gray[0],

			//Less than 1030px
			[`@media(max-width: ${theme.breakpoints.xl}px)`]: {
				padding: `0px ${6 * 4}px`,
			},

			//Less than 795px
			[`@media(max-width: ${theme.breakpoints.sm}px)`]: {
				padding: `0px ${6 * 2}px`,
			},
		},

		body: {
			width: "100%",
			maxWidth: "1300px",
		},

		main: {
			width: "100%",
			justifyContent: "center",
			padding: 0,
		},
	};
});

export default useShellStyles;
