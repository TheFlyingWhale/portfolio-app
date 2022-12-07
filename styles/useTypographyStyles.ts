import { createStyles } from "@mantine/core";

const useTypographyStyles = createStyles((theme, _params, getRef) => ({
	link: {
		color: theme.colors.gray[7],

		"&:hover": {
			textDecoration: "none",
			color: theme.colors.gray[6],
		},
	},
}));

export default useTypographyStyles;
