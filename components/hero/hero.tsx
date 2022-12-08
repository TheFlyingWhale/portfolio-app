import {
	Group,
	Stack,
	Title,
	Text,
	Image,
	Box,
	SimpleGrid,
	useMantineTheme,
} from "@mantine/core";
import { ImageSection } from "../../lib/interfaces/project";
import { useShadow } from "../../styles/useShadow";
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
		textBody,
		imageContainer,
	} = useHeroStyles().classes;

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
							className={`${textTitle} ${shadow.sm}`}
							order={1}
							style={
								{
									//whiteSpace: "nowrap",
								}
							}
						>
							{title}
						</Title>
					)}
					<Stack spacing={6}>
						{subtitle && (
							<Title
								className={`${textSubtitle} ${shadow.sm}`}
								order={2}
								weight={700}
								style={{
									fontFamily: "Heebo",
								}}
							>
								{subtitle}
							</Title>
						)}
						{paragraph && (
							<Text
								className={`${textBody} ${shadow.sm}`}
								style={{
									maxWidth: "50ch",
									fontSize: `${(1 / 16) * 6 * 3}em`,
									lineHeight: "150%",
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
