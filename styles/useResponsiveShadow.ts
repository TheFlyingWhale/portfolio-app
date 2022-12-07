import { createStyles } from "@mantine/core";

interface UseShadowProps {
	active: boolean;
	hovered: boolean;
}

const useResponsiveShadow = createStyles(
	(_theme, { active, hovered }: UseShadowProps, getRef) => ({
		sm: {
			transition: active
				? "transform 0.05s, filter 0.05s"
				: "transform 0.25s, filter 0.25s",
			transform: hovered
				? active
					? "scale(0.990) translateY(2px)"
					: "scale(1.025) translateY(-2px)"
				: "scale()",
			filter: hovered
				? active
					? "drop-shadow(0px 10px 10px rgba(0,0,0, 0.25) )"
					: "drop-shadow(0px 20px 20px rgba(0,0,0, 0.25) )"
				: "drop-shadow(0px 15px 15px rgba(0,0,0, 0.15) )",
		},
	})
);

export default useResponsiveShadow;
