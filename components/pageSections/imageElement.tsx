import { Stack, Title, Image, Text, Box, useMantineTheme } from "@mantine/core";
import { ImageSection } from "../../lib/interfaces/project";
import { useShadow } from "../../styles/useShadow";
import TextElement from "./textElement";

interface ImageElementProps {
	section: ImageSection;
}

const ImageElement: React.FC<ImageElementProps> = ({ section }) => {
	const { classes: shadow } = useShadow();
	const {
		caption,
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
				justifyContent: align ? align : "normal",
				alignItems: align ? align : "normal",
				flexGrow: 1,
			}}
		>
			<Stack spacing={6}>
				<Box className={`${withShadow && shadow.md}`}>
					<Image
						mah={height ? height : ""}
						maw={width ? width : ""}
						//fit="contain"
						alt={caption}
						src={imageUrl}
						style={{
							borderRadius: withBorderRadius ? 6 * 2 : 0,
							overflow: withBorderRadius ? "hidden" : "visible",
						}}
						caption={caption}
					/>
				</Box>
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
