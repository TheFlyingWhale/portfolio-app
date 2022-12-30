import { AppShell, Stack } from "@mantine/core";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import CustomLoadingOverlay from "../customLoadingOverlay/customLoadingOverlay";
import Footer from "../footer/footer";
import NavigationHeader from "../navigation/navigationHeader";
import useShellStyles from "./useShellStyles";

interface SeparateAppShellProps {
	children: React.ReactNode;
}

const SeparateAppShell: React.FC<SeparateAppShellProps> = ({ children }) => {
	const { classes } = useShellStyles();
	//Loader have been disabled since its to efficient
	//const [isLoading, setIsLoading] = useState(true);
	const { displayFooter, displayHeader } = useAppSelector(
		(state) => state.app
	);

	//useEffect(() => {
	//	Router.events.on("routeChangeStart", () => {
	//		console.log("routeChangeStart");
	//		setIsLoading(true);
	//	});

	//	Router.events.on("routeChangeComplete", () => {
	//		console.log("routeChangeComplete");
	//		setIsLoading(false);
	//	});

	//	window.addEventListener("load", (event) => {
	//		console.log("page done load");
	//		setIsLoading(false);
	//	});
	//}, []);

	return (
		<AppShell
			header={displayHeader ? <NavigationHeader /> : undefined}
			classNames={classes}
		>
			{/*<CustomLoadingOverlay isLoading={isLoading} />*/}
			<Stack spacing={6 * 10}>
				{children}
				{displayFooter && <Footer />}
			</Stack>
		</AppShell>
	);
};

export default SeparateAppShell;
