import { createStyles } from "@mantine/core";

const useNavigationStyles = createStyles((theme) => {
	return {
		root: {
			width: "100%",
			maxWidth: "1300px",
			display: "flex",
			justifyContent: "space-between",
			padding: `${6 * 2}px ${0}px`,

			[`@media(max-width: ${theme.breakpoints.xl}px)`]: {
				padding: `${6 * 1}px ${0}px`,
			},
		},

		homeLink: {
			fontSize: `${(1 / 16) * 6 * 4}em`,
			fontWeight: 700,

			[`@media(max-width: ${theme.breakpoints.md}px)`]: {
				fontSize: `${(1 / 16) * 6 * 3}em`,
			},
		},
	};
});

export default useNavigationStyles;
