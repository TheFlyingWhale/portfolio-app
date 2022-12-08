import {
	Stack,
	Title,
	Text,
	SimpleGrid,
	Image,
	useMantineTheme,
} from "@mantine/core";
import { About, EductionSection } from "../../lib/interfaces/about";
import { useShadow } from "../../styles/useShadow";
import useAboutStyles from "./useAboutStyles";

interface AboutSectionProps {
	about: [About];
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
	const { classes: shadow } = useShadow();
	const { breakpoints } = useMantineTheme();
	const { textTitle } = useAboutStyles().classes;

	if (!about.length) return <></>;
	const data = about[0];

	return (
		<Stack>
			<Title order={2} className={textTitle}>
				{data.title}
			</Title>
			<SimpleGrid
				cols={3}
				breakpoints={[
					{ maxWidth: breakpoints.lg, cols: 2 },
					{ maxWidth: breakpoints.md, cols: 1 },
				]}
				spacing={6 * 10}
			>
				<Text
					style={{
						whiteSpace: "pre-wrap",
						fontSize: `${(1 / 16) * 6 * 3}em`,
						maxWidth: "60ch",
					}}
				>
					{data.description}
				</Text>
				<Stack>
					<Title order={3}>Education</Title>
					{data.educationSections.map((section, index) => (
						<EductionItem educationSection={section} key={index} />
					))}
				</Stack>

				<Image
					alt=""
					className={shadow.sm}
					style={{
						borderRadius: 6 * 2,
						overflow: "hidden",
					}}
					sx={{
						figure: {
							borderRadius: 6 * 2,
							overflow: "hidden",
						},
					}}
					src={data.profilePicture}
				/>
			</SimpleGrid>
		</Stack>
	);
};

export default AboutSection;

interface EductionItemProps {
	educationSection: EductionSection;
}

const EductionItem: React.FC<EductionItemProps> = ({
	educationSection: section,
}) => {
	return (
		<Stack spacing={0}>
			<Title
				order={4}
				style={{
					fontSize: `${(1 / 16) * 6 * 3}em`,
					fontFamily: "Heebo",
				}}
			>
				{section.subject}, {section.degree}
			</Title>
			<Text
				style={{
					fontSize: `${(1 / 16) * 6 * 3}em`,
				}}
			>
				{section.school}, {new Date(section.startDate).getFullYear()}
				{section.endDate &&
					` - ${new Date(section.endDate).getFullYear()}`}
			</Text>
		</Stack>
	);
};
