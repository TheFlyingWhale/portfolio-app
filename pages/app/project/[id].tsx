import { Button, Group, Stack } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { NextPageContext } from "next";
import Link from "next/link";
import Hero from "../../../components/hero/hero";
import PageContainer from "../../../components/pageContainer/pageContainer";
import ImageCollection from "../../../components/pageSections/imageCollection";
import ImageElement from "../../../components/pageSections/imageElement";
import TextCollection from "../../../components/pageSections/textCollection";
import TextElement from "../../../components/pageSections/textElement";
import api from "../../../lib/apiService/apiService";
import {
	Project,
	ImageSection,
	TextSection,
} from "../../../lib/interfaces/project";

interface ProjectPageProps {
	project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
	if (!project) return <></>;

	const { hero, pageSections } = project;

	return (
		<PageContainer>
			<Stack spacing={6 * 20}>
				{hero && (
					<Hero
						title={hero.header}
						subtitle={hero.subheader}
						paragraph={hero.text}
						image={hero.image}
					/>
				)}
				{pageSections &&
					pageSections.map((section, index) => {
						if (section._type === "imageElement")
							return (
								<ImageElement
									key={index}
									section={section as ImageSection}
								/>
							);
						if (section._type === "textElement")
							return (
								<TextElement
									key={index}
									section={section as TextSection}
								/>
							);
						if (section._type === "textCollection")
							return (
								<TextCollection key={index} section={section} />
							);
						if (section._type === "imageCollection")
							return (
								<ImageCollection
									key={index}
									section={section}
								/>
							);
						return null;
					})}
				<Group
					style={{
						justifyContent: "center",
					}}
				>
					<Link href="/app">
						<Button
							leftIcon={<IconArrowLeft size={6 * 4} />}
							color="gray"
							size="sm"
						>
							Head back
						</Button>
					</Link>
				</Group>
			</Stack>
		</PageContainer>
	);
};

export default ProjectPage;

export const getServerSideProps = async (context: NextPageContext) => {
	const { id } = context.query;

	const project = await api
		.get(`/project/${id}`)
		.then((res) => {
			return res.data[0];
		})
		.catch((err) => {
			console.error(
				"project/[id] - getServerSideProps - get project failed",
				err
			);
			return null;
		});

	return {
		props: {
			project,
		},
	};
};
