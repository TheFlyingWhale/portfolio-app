import { Box, Group, Stack } from "@mantine/core";

interface PageContainerProps {
	children: React.ReactNode | React.ReactNode[];
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
	return <Box>{children}</Box>;
};

export default PageContainer;
