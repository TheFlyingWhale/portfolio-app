import { createStyles } from "@mantine/core";

const useToolCardStyles = createStyles(() => {
	return {
		square: {
			width: "100%",
			height: 0,
			paddingTop: "100%",
			position: "relative",
		},

		content: {
			display: "flex",
			gap: `${6 * 3}px`,
			flexDirection: "column",
			position: "absolute",
			width: "100%",
			height: "100%",
			justifyContent: "center",
			alignItems: "center",
			top: 0,
			left: 0,
		},
	};
});

export default useToolCardStyles;
