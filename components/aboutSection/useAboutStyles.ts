import { createStyles } from "@mantine/core";

const useAboutStyles = createStyles((theme) => {
	return {
		textTitle: {
			whiteSpace: "nowrap",

			fontSize: `${(1 / 16) * 6 * 10}em`,

			[`@media(max-width: ${theme.breakpoints.md}px)`]: {
				fontSize: `${(1 / 16) * 6 * 8}em`,
			},

			[`@media(max-width: ${theme.breakpoints.sm}px)`]: {
				fontSize: `${(1 / 16) * 6 * 6}em`,
			},
		},
	};
});

export default useAboutStyles;
