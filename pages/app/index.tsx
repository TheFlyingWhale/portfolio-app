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
	imageUrl: string;
}

const Home: React.FC<HomeProps> = ({ projects, about, imageUrl }) => {
	const { breakpoints } = useMantineTheme();

	console.log(imageUrl);

	return (
		<PageContainer>
			<Stack spacing={6 * 20}>
				<Hero
					title="Digital Generalist"
					subtitle="In a matrix of impressions"
					paragraph="Designing and developing visual solutions which is visually pleasing and understandable is my passion"
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
						imageUrl: imageUrl,
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

	const imageUrl = await api
		.get("/image/index-hero")
		.then((res) => {
			return res.data[0].imageUrl;
		})
		.catch((err) => {
			console.error(
				"index - getServerSideProps - get hero image url failed",
				err
			);
			return null;
		});

	return {
		props: {
			projects,
			about,
			imageUrl,
		},
	};
};
