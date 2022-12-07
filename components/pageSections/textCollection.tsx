import { SimpleGrid } from "@mantine/core";
import { TextCollectionSection } from "../../lib/interfaces/project";
import TextElement from "./textElement";

interface TextCollectionProps {
	section: TextCollectionSection;
}

const TextCollection: React.FC<TextCollectionProps> = ({ section }) => {
	const { collection } = section;

	return (
		<SimpleGrid cols={collection.length} spacing={6 * 10}>
			{collection.map((section, index) => (
				<TextElement key={index} section={section} />
			))}
		</SimpleGrid>
	);
};

export default TextCollection;
