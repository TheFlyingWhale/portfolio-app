import { Stack, Title, Text, Image } from "@mantine/core";
import Link from "next/link";
import useActiveHover from "../../lib/hooks/useActiveHover";
import { IndexProject } from "../../lib/interfaces/project";
import useResponsiveShadow from "../../styles/useResponsiveShadow";

interface ProjectCardProps {
	project: IndexProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { active, hovered, ref } = useActiveHover<HTMLImageElement>();
	const { classes: resShadow } = useResponsiveShadow({ hovered, active });
	return (
		<Link href={`app/project/${project.slug.current}`}>
			<Stack>
				<Image
					ref={ref}
					alt=""
					src={project.imageUrl}
					radius={6 * 2}
					className={resShadow.sm}
				/>
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
