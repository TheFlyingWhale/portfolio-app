import { Stack, Title, Text, Image, LoadingOverlay, Box } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import useActiveHover from "../../lib/hooks/useActiveHover";
import { IndexProject } from "../../lib/interfaces/project";
import useResponsiveTransformShadow from "../../styles/useResponsiveShadow";

interface ProjectCardProps {
	project: IndexProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { active, hovered, ref } = useActiveHover<HTMLImageElement>();
	const { classes: resShadow } = useResponsiveTransformShadow({
		hovered,
		active,
	});
	return (
		<Link
			href={`app/project/${project.slug.current}`}
			onClick={() => setIsLoading(true)}
		>
			<Stack>
				<Box
					style={{
						position: "relative",
					}}
				>
					<LoadingOverlay
						visible={isLoading}
						style={{
							borderRadius: 6 * 2,
						}}
					/>
					<Image
						ref={ref}
						alt=""
						src={project.imageUrl}
						radius={6 * 2}
						className={resShadow.sm}
					/>
				</Box>
				<Stack spacing={0}>
					<Title
						order={3}
						weight={700}
						style={{
							fontSize: `${(1 / 16) * 6 * 6}em`,
						}}
					>
						{project.title}
					</Title>
					<Title
						order={4}
						weight={500}
						style={{
							fontSize: `${(1 / 16) * 6 * 3}em`,
							fontFamily: "Heebo",
						}}
					>
						{project.subtitle}
					</Title>
					<Text
						style={{
							fontSize: `${(1 / 16) * 6 * 3}em`,
						}}
					>
						{project.description}
					</Text>
				</Stack>
			</Stack>
		</Link>
	);
};

export default ProjectCard;
