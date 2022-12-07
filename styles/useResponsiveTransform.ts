import { createStyles } from "@mantine/core";

interface UseTransformProps {
	active: boolean;
	hovered: boolean;
}

const useResponsiveTransform = createStyles(
	(_theme, { active, hovered }: UseTransformProps, getRef) => ({
		sm: {
			transition: active ? "transform 0.05s" : "transform 0.25s",
			transform: hovered
				? active
					? "scale(0.990) translateY(2px)"
					: "scale(1.025) translateY(-2px)"
				: "scale()",
		},
	})
);

export default useResponsiveTransform;
