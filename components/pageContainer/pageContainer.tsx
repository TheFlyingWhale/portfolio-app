import { Group, Stack } from "@mantine/core";

interface PageContainerProps {
	children: React.ReactNode | React.ReactNode[];
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
	return (
		<Group position="center">
			<Stack
				style={{
					width: "1300px",
				}}
			>
				{children}
			</Stack>
		</Group>
	);
};

export default PageContainer;
