import "../styles/globals.css";
import type { AppProps } from "next/app";
import SeparateMantineProvider from "../components/separateMantineProvider/separateMantineProvider";
import SeparateAppShell from "../components/separateAppShell/separateAppShell";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SeparateMantineProvider>
			<Provider store={store}>
				<SeparateAppShell>
					<Head>
						<title>Ole Walberg</title>
						<link rel="icon" href="./ico.ico" />
					</Head>
					<Component {...pageProps} />
				</SeparateAppShell>
			</Provider>
		</SeparateMantineProvider>
	);
}
