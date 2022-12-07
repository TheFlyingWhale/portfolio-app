import { createStyles } from "@mantine/core";

export const useShadow = createStyles((_theme, _params, getRef) => {
	return {
		sm: {
			filter: "drop-shadow(0px 15px 15px rgba(0,0,0, 0.15) )",
		},
		md: {
			filter: "drop-shadow(0px 25px 25px rgba(0,0,0, 0.15) )",
		},
	};
});
