import { Button, Group, Stack } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import Link from "next/link";
import Hero from "../../../components/hero/hero";
import PageContainer from "../../../components/pageContainer/pageContainer";
import ImageCollection from "../../../components/pageSections/imageCollection";
import ImageElement from "../../../components/pageSections/imageElement";
import TextCollection from "../../../components/pageSections/textCollection";
import TextElement from "../../../components/pageSections/textElement";
import client from "../../../lib/client/client";
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

export const getStaticPaths = async () => {
	const slugs = await client.fetch(
		`//groq
			*[_type == "project" && active == true] | order(order asc) {
				"slug": slug.current, 
			}
		`
	);

	const paths = !slugs.length
		? []
		: slugs.map((project: { slug: string }) => {
				return {
					params: {
						id: project.slug,
					},
				};
		  });

	return {
		paths: paths,
		fallback: false, // can also be true or 'blocking'
	};
};

export const getStaticProps = async (context: { params: { id: string } }) => {
	const { id } = context.params;

	const project = await client
		.fetch(
			`//groq
				*[slug.current=='${id}']
				{
					hero{
						..., image{"imageUrl":image.asset->url,...}
					}, pageSections[]{
						  _type=="textElement" => @{_type,...},
						_type=="imageElement" => @{_type,"imageUrl":@.image.asset->url, title, includeTitle, text, subtitle, displayCaption, withBorderRadius, withShadow, caption, align, weight, height, width},
						_type=="textCollection" => @{_type,"collection":textCollection[]},
						_type=="imageCollection" => @{_type, ignoreBreakpoints, fixedColumns, "collection":imageCollection[]{
							_type=="imageElement"=>@{_type,"imageUrl":@.image.asset->url, title, includeTitle, caption, displayCaption, text, subtitle, align, withBorderRadius, withShadow, weight, height, width}
						}}
					}
				}
			`
		)
		.then((res) => {
			return res[0];
		})
		.catch((err) => {
			console.error("[id].tsx - error fetching project", err);
			return null;
		});

	return {
		props: {
			project,
		},
	};
};
