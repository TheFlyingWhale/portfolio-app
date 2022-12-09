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
	const { collection, ignoreBreakpoints, fixedColumns } = section;
	const { breakpoints } = useMantineTheme();

	return (
		<SimpleGrid
			cols={fixedColumns ? fixedColumns : undefined}
			spacing={6 * 10}
			breakpoints={[
				{
					maxWidth: breakpoints.sm,
					cols: ignoreBreakpoints
						? collection.length
						: fixedColumns
						? fixedColumns
						: 1,
				},
				{
					minWidth: breakpoints.md,
					cols: ignoreBreakpoints
						? collection.length
						: fixedColumns
						? fixedColumns
						: 2,
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
