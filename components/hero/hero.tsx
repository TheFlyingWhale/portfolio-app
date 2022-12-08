import {
	Stack,
	Title,
	Text,
	Box,
	SimpleGrid,
	useMantineTheme,
} from "@mantine/core";
import { ImageSection } from "../../lib/interfaces/project";
import { useShadow } from "../../styles/useShadow";
import useTypographyStyles from "../../styles/useTypographyStyles";
import ImageElement from "../pageSections/imageElement";
import useHeroStyles from "./useHeroStyles";

interface HeroProps {
	title?: string;
	subtitle?: string;
	paragraph?: string;
	image?: ImageSection;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, paragraph, image }) => {
	const {
		root,
		grid,
		textContainer,
		textTitle,
		textSubtitle,
		imageContainer,
	} = useHeroStyles().classes;
	const { classes: typography } = useTypographyStyles();

	const { breakpoints } = useMantineTheme();

	const { classes: shadow } = useShadow();

	return (
		<Box className={root}>
			<SimpleGrid
				className={grid}
				cols={2}
				spacing={6 * 10}
				breakpoints={[{ maxWidth: breakpoints.md, cols: 1 }]}
			>
				<Stack className={textContainer}>
					{title && (
						<Title
							className={`${textTitle} ${shadow.sm} ${typography.title}`}
							order={1}
						>
							{title}
						</Title>
					)}
					<Stack spacing={6}>
						{subtitle && (
							<Title
								className={`${textSubtitle} ${shadow.sm} ${typography.subtitle}`}
								order={2}
								style={{
									fontFamily: "Heebo",
								}}
							>
								{subtitle}
							</Title>
						)}
						{paragraph && (
							<Text
								className={`${typography.body}`}
								style={{
									maxWidth: "50ch",
									fontSize: `${(1 / 16) * 6 * 3}em`,
									whiteSpace: "pre-wrap",
								}}
							>
								{paragraph}
							</Text>
						)}
					</Stack>
				</Stack>
				<Box className={imageContainer}>
					{image && <ImageElement section={image} />}
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Hero;
