import { SimpleGrid } from "@mantine/core";
import {
	ImageCollectionSection,
	ImageSection,
} from "../../lib/interfaces/project";
import ImageElement from "./imageElement";

interface ImageCollectionProps {
	section: ImageCollectionSection;
}

const ImageCollection: React.FC<ImageCollectionProps> = ({ section }) => {
	const { collection } = section;

	return (
		<SimpleGrid cols={collection.length} spacing={6 * 10}>
			{collection.map((section, index) => (
				<ImageElement key={index} section={section as ImageSection} />
			))}
		</SimpleGrid>
	);
};

export default ImageCollection;
