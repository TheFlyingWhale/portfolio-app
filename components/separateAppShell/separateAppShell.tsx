import { AppShell, Stack, useMantineTheme } from "@mantine/core";
import Footer from "../footer/footer";
import NavigationHeader from "../navigation/navigationHeader";
import useShellStyles from "./useShellStyles";

interface SeparateAppShellProps {
	children: React.ReactNode;
}

const SeparateAppShell: React.FC<SeparateAppShellProps> = ({ children }) => {
	const { classes } = useShellStyles();

	return (
		<AppShell header={<NavigationHeader />} classNames={classes}>
			<Stack spacing={6 * 10}>
				{children}
				<Footer />
			</Stack>
		</AppShell>
	);
};

export default SeparateAppShell;
