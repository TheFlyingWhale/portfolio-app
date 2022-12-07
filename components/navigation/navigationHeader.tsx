import { Group, useMantineTheme } from "@mantine/core";
import HeaderLink from "./headerLink";

const NavigationHeader = () => {
	return (
		<Group position="center">
			<Group
				style={{
					width: "1300px",
					padding: `${6 * 2}px ${0}px`,
					alignItems: "end",
				}}
				position="apart"
			>
				<HeaderLink href="/app" fontSize={6 * 4} fontWeight={700}>
					Ole Walberg
				</HeaderLink>
				<Group spacing={6 * 6}>
					<HeaderLink href="/app" fontSize={6 * 3}>
						Portfolio
					</HeaderLink>
					<HeaderLink href="/app" fontSize={6 * 3}>
						About
					</HeaderLink>
				</Group>
			</Group>
		</Group>
	);
};

export default NavigationHeader;
