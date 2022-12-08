import api from "../../lib/apiService/apiService";
import { SimpleGrid, Stack, useMantineTheme } from "@mantine/core";
import PageContainer from "../../components/pageContainer/pageContainer";
import Hero from "../../components/hero/hero";
import { IndexProject, Project } from "../../lib/interfaces/project";
import ProjectCard from "../../components/projectCard/projectCard";
import AboutSection from "../../components/aboutSection/aboutSection";
import { About } from "../../lib/interfaces/about";
interface HomeProps {
	projects: IndexProject[];
	about: [About];
}

const Home: React.FC<HomeProps> = ({ projects, about }) => {
	const { breakpoints } = useMantineTheme();

	return (
		<PageContainer>
			<Stack spacing={6 * 20}>
				<Hero
					title="Digital Designer"
					subtitle="In a world of impressions"
					paragraph="Designing visual solutions which is understandable and aids the user is what I'm passionate about"
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
						imageUrl:
							"https://olewalberg.com/content/gnosis/MockupCover.jpg",
					}}
				/>
				<SimpleGrid
					cols={2}
					breakpoints={[{ maxWidth: breakpoints.md, cols: 1 }]}
					spacing={6 * 10}
				>
					{projects &&
						projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
				</SimpleGrid>
				<AboutSection about={about} />
			</Stack>
		</PageContainer>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const projects = await api
		.get<Project[]>("/project")
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(
				"index - getServerSideProps - get project failed",
				err
			);
			return null;
		});

	const about = await api
		.get<[About]>("/about")
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error("index - getServerSideProps - get about failed", err);
			return null;
		});

	return {
		props: {
			projects,
			about,
		},
	};
};
