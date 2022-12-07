import "../styles/globals.css";
import type { AppProps } from "next/app";
import SeparateMantineProvider from "../components/separateMantineProvider/separateMantineProvider";
import SeparateAppShell from "../components/separateAppShell/separateAppShell";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SeparateMantineProvider>
			<SeparateAppShell>
				<Component {...pageProps} />
			</SeparateAppShell>
		</SeparateMantineProvider>
	);
}
