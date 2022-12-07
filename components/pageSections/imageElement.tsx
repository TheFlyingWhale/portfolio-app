import { Stack, Title, Image, Text, Box, useMantineTheme } from "@mantine/core";
import { ImageSection } from "../../lib/interfaces/project";
import { useShadow } from "../../styles/useShadow";
import TextElement from "./textElement";

interface ImageElementProps {
	section: ImageSection;
}

const ImageElement: React.FC<ImageElementProps> = ({ section }) => {
	const { classes: shadow } = useShadow();

	const { colors } = useMantineTheme();
	const {
		caption,
		displayCaption,
		imageUrl,
		includeTitle,
		text,
		subtitle,
		title,
		height,
		width,
		withBorderRadius,
		align,
		withShadow,
	} = section;

	return (
		<Stack
			style={{
				justifyContent: align && align,
				alignItems: align && align,
			}}
		>
			<Stack spacing={6} align={align && align}>
				<Box>
					<Image
						className={`${withShadow && shadow.md}`}
						height={height && height}
						width={width && width}
						fit="contain"
						alt={caption}
						src={imageUrl}
						style={{
							borderRadius: withBorderRadius ? 6 * 2 : 0,
							overflow: withBorderRadius ? "hidden" : "visible",
						}}
					/>
				</Box>
				{caption && displayCaption && (
					<Text
						style={{
							fontSize: `${(1 / 16) * 6 * 2.5}em`,
							color: colors.gray[5],
						}}
					>
						{caption}
					</Text>
				)}
			</Stack>
			{(title || subtitle || text) && (
				<TextElement
					section={{
						_type: "textElement",
						title: title,
						subtitle: subtitle,
						body: text,
						align: "",
						includeTitle: includeTitle,
					}}
				/>
			)}
		</Stack>
	);
};

export default ImageElement;
