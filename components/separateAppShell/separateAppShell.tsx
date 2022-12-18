import { AppShell, Stack } from "@mantine/core";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import CustomLoadingOverlay from "../customLoadingOverlay/customLoadingOverlay";
import Footer from "../footer/footer";
import NavigationHeader from "../navigation/navigationHeader";
import useShellStyles from "./useShellStyles";

interface SeparateAppShellProps {
	children: React.ReactNode;
}

const SeparateAppShell: React.FC<SeparateAppShellProps> = ({ children }) => {
	const { classes } = useShellStyles();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		Router.events.on("routeChangeStart", () => {
			console.log("routeChangeStart");
			setIsLoading(true);
		});

		Router.events.on("routeChangeComplete", () => {
			console.log("routeChangeComplete");
			setIsLoading(false);
		});

		window.addEventListener("load", (event) => {
			console.log("page done load");
			setIsLoading(false);
		});
	}, []);

	return (
		<AppShell header={<NavigationHeader />} classNames={classes}>
			<CustomLoadingOverlay isLoading={isLoading} />
			<Stack spacing={6 * 10}>
				{children}
				<Footer />
			</Stack>
		</AppShell>
	);
};

export default SeparateAppShell;
