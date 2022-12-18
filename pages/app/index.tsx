import api from "../../lib/apiService/apiService";
import { SimpleGrid, Stack, useMantineTheme } from "@mantine/core";
import PageContainer from "../../components/pageContainer/pageContainer";
import Hero from "../../components/hero/hero";
import {
	HeroInterface,
	IndexProject,
	Project,
} from "../../lib/interfaces/project";
import ProjectCard from "../../components/projectCard/projectCard";
import AboutSection from "../../components/aboutSection/aboutSection";
import { About } from "../../lib/interfaces/about";
import client from "../../lib/client/client";
interface HomeProps {
	projects: IndexProject[];
	about: [About];
	hero: HeroInterface;
}

const Home: React.FC<HomeProps> = ({ projects, about, hero }) => {
	const { breakpoints } = useMantineTheme();

	return (
		<PageContainer>
			<Stack spacing={6 * 20}>
				{hero !== null && (
					<Hero
						title={hero.header}
						subtitle={hero.subheader}
						paragraph={hero.text}
						image={{
							text: "",
							caption: "",
							height: undefined,
							width: undefined,
							displayCaption: false,
							align: "",
							withBorderRadius: true,
							withShadow: true,
							includeTitle: false,
							title: "",
							subtitle: "",
							_type: "imageElement",
							imageUrl: hero.image.imageUrl,
						}}
					/>
				)}
				{projects !== null && (
					<SimpleGrid
						cols={2}
						breakpoints={[{ maxWidth: breakpoints.md, cols: 1 }]}
						spacing={6 * 10}
					>
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</SimpleGrid>
				)}
				{about !== null && <AboutSection about={about} />}
			</Stack>
		</PageContainer>
	);
};

export default Home;

export const getStaticProps = async () => {
	const about = await client
		.fetch(
			`//groq
			*[_type == "aboutSection"]{
				title,
				description,
				educationSections,
				"profilePicture":profilePicture.asset->url
			}`
		)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.error(
				"index - getStaticProps - fetching about data failed"
			);
			return null;
		});

	const projects = await client
		.fetch(
			`//groq
			*[_type == "project" && active == true] | order(order asc) {
				...,
				title,
				subtitle,
				description,
				slug, 
				"imageUrl":coverImage.asset->url
			}`
		)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.error(
				"index - getStaticProps - fetching projects failed",
				err
			);
			return null;
		});

	const hero = await client
		.fetch(
			`//groq
		*[slug.current=='index']
		{
			hero{
				..., image{"imageUrl":image.asset->url,...}
			}
		}`
		)
		.then((res) => {
			return res[0].hero;
		})
		.catch((err) => {
			console.error(
				"index - getStaticProps - fetching index hro failed",
				err
			);
			return null;
		});

	return {
		props: {
			projects,
			about,
			hero,
		},
	};
};
