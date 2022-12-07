import { Group, Stack, Title, Text, Image, Box } from "@mantine/core";
import { ImageSection } from "../../lib/interfaces/project";
import { useShadow } from "../../styles/useShadow";
import ImageElement from "../pageSections/imageElement";

interface HeroProps {
	title?: string;
	subtitle?: string;
	paragraph?: string;
	image?: ImageSection;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, paragraph, image }) => {
	return (
		<Group
			position="apart"
			noWrap
			style={{
				minHeight: "600px",
			}}
		>
			<Stack
				spacing={0}
				style={{
					flexGrow: 1,
					flexBasis: 1,
				}}
			>
				{title && (
					<Title
						order={1}
						style={{
							fontSize: `${(1 / 16) * 6 * 14}em`,
							whiteSpace: "nowrap",
						}}
					>
						{title}
					</Title>
				)}
				<Stack spacing={6}>
					{subtitle && (
						<Title
							order={2}
							weight={700}
							style={{
								fontFamily: "Heebo",
								fontSize: `${(1 / 16) * 6 * 4}em`,
							}}
						>
							{subtitle}
						</Title>
					)}
					{paragraph && (
						<Text
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
			{image && <ImageElement section={image} />}
		</Group>
	);
};

export default Hero;
