import { Box, Paper, Stack, Text, Title } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons";
import Link from "next/link";
import React from "react";
import useActiveHover from "../../lib/hooks/useActiveHover";
import useResponsiveTransformShadow from "../../styles/useResponsiveShadow";
import useToolCardStyles from "./useToolCardStyles";

interface ToolCardProps {
	href?: string;
	title?: string;
	text?: string;
	icon?: React.ReactElement;
}

const ToolCard: React.FC<ToolCardProps> = ({
	href = "",
	title = "title",
	text = "text",
	icon = <IconQuestionMark />,
}) => {
	const { active, hovered, ref } = useActiveHover();
	const { classes: resShadow } = useResponsiveTransformShadow({
		hovered,
		active,
	});

	const { classes } = useToolCardStyles();

	const clonedIcon = React.cloneElement(icon, { size: 6 * 12 }, null);

	return (
		<Link
			href={href}
			style={{
				display: "flex",
			}}
		>
			<Paper
				ref={ref}
				radius={6 * 2}
				className={`${classes.square} ${resShadow.sm}`}
			>
				<Box className={classes.content}>
					<Box
						sx={(theme) => ({
							display: "flex",
							color: theme.colors.violet[5],
						})}
					>
						{clonedIcon}
					</Box>
					<Stack spacing={0} align="center">
						<Title
							order={2}
							sx={(theme) => ({
								color: theme.colors.gray[7],
							})}
						>
							{title}
						</Title>
						<Text
							sx={(theme) => ({
								color: theme.colors.gray[6],
							})}
						>
							{text}
						</Text>
					</Stack>
				</Box>
			</Paper>
		</Link>
	);
};

export default ToolCard;
