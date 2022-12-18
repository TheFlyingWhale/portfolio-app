import { Box, Loader, useMantineTheme } from "@mantine/core";
import { useState } from "react";

interface CustomLoadingOverlayProps {
	isLoading: boolean;
}

const CustomLoadingOverlay: React.FC<CustomLoadingOverlayProps> = ({
	isLoading,
}) => {
	const { colors } = useMantineTheme();

	return (
		<Box
			style={{
				transition: "opacity 0.25s, visibility 0.25s",
				opacity: isLoading ? 1 : 0,
				backdropFilter: "blur(10px)",
				visibility: isLoading ? "visible" : "hidden",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				backgroundColor: colors.gray[0],
				zIndex: 20,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Loader variant="dots" color="gray" />
		</Box>
	);
};

export default CustomLoadingOverlay;
