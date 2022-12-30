import { SimpleGrid } from "@mantine/core";
import { IconDice6 } from "@tabler/icons";
import ToolCard from "../../components/toolCard/toolCard";
import ToolPageContainer from "../../components/toolPageContainer/toolPageContainer";

const Tools = () => {
	return (
		<ToolPageContainer title="Tools">
			<SimpleGrid
				cols={3}
				spacing={6 * 6}
				verticalSpacing={6 * 6}
				breakpoints={[
					{ maxWidth: 760, cols: 2 },
					{ maxWidth: 600, cols: 1 },
				]}
			>
				<ToolCard
					title="Knucklebones"
					icon={<IconDice6 />}
					text="Calculate scores"
					href="/tools/knuckleCalculator"
				/>
			</SimpleGrid>
		</ToolPageContainer>
	);
};

export default Tools;
