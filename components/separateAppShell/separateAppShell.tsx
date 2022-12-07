import { AppShell, useMantineTheme } from "@mantine/core";
import Footer from "../footer/footer";
import NavigationHeader from "../navigation/navigationHeader";

interface SeparateAppShellProps {
	children: React.ReactNode;
}

const SeparateAppShell: React.FC<SeparateAppShellProps> = ({ children }) => {
	const { colors } = useMantineTheme();

	return (
		<AppShell
			header={<NavigationHeader />}
			styles={{
				root: {
					backgroundColor: colors.gray[0],
				},
				main: {
					display: "flex",
					flexDirection: "column",
					gap: "100px",
				},
			}}
		>
			{children}
			<Footer />
		</AppShell>
	);
};

export default SeparateAppShell;
