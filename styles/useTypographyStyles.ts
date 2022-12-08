import { createStyles } from "@mantine/core";

const useTypographyStyles = createStyles((theme, _params, getRef) => ({
	title: {
		fontWeight: 700,
	},

	subtitle: {
		fontWeight: 500,
		fontFamily: "Heebo",
	},

	body: {
		maxWidth: "60ch",
		whiteSpace: "pre-wrap",
		fontSize: `${(1 / 16) * 18}em`,
	},

	link: {
		color: theme.colors.gray[7],

		"&:hover": {
			textDecoration: "none",
			color: theme.colors.gray[6],
		},
	},
}));

export default useTypographyStyles;
