import { Box, Group } from "@mantine/core";
import HeaderLink from "./headerLink";
import useNavigationStyles from "./useNavigationStyles";

const NavigationHeader = () => {
	const { root, homeLink } = useNavigationStyles().classes;

	return (
		<Group className={root}>
			<Box>
				<HeaderLink href="/app" className={homeLink}>
					Ole Walberg
				</HeaderLink>
			</Box>
			{/*<Group spacing={6 * 6}>
				<HeaderLink href="/app" fontSize={6 * 3}>
					Portfolio
				</HeaderLink>
				<HeaderLink href="/app" fontSize={6 * 3}>
					About
				</HeaderLink>
			</Group>*/}
		</Group>
	);
};

export default NavigationHeader;
