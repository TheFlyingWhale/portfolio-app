import { SimpleGrid, useMantineTheme } from "@mantine/core";
import {
	ImageCollectionSection,
	ImageSection,
} from "../../lib/interfaces/project";
import ImageElement from "./imageElement";

interface ImageCollectionProps {
	section: ImageCollectionSection;
}

const ImageCollection: React.FC<ImageCollectionProps> = ({ section }) => {
	const { collection, ignoreBreakpoints } = section;
	const { breakpoints } = useMantineTheme();

	return (
		<SimpleGrid
			//cols={collection.length}
			spacing={6 * 10}
			breakpoints={[
				{
					maxWidth: breakpoints.md,
					cols: ignoreBreakpoints ? collection.length : 1,
				},
				{
					minWidth: breakpoints.md,
					cols: ignoreBreakpoints ? collection.length : 2,
				},
			]}
		>
			{collection.map((section, index) => (
				<ImageElement key={index} section={section as ImageSection} />
			))}
		</SimpleGrid>
	);
};

export default ImageCollection;
