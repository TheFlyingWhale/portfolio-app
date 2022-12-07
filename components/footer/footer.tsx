import {
	Group,
	Title,
	Text,
	Stack,
	Paper,
	ActionIcon,
	useMantineTheme,
	Anchor,
} from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons";
import Link from "next/link";
import { useShadow } from "../../styles/useShadow";

const Footer = () => {
	const { classes: shadow } = useShadow();
	const { colors } = useMantineTheme();

	return (
		<Group position="center">
			<Paper
				className={shadow.sm}
				style={{
					width: "1300px",
					padding: `${4}em ${6}em`,
					marginBottom: `${6 * 20}px`,
					color: "white",
					background:
						"linear-gradient(135deg, #E52E7D, #FF9D33, #E52E7D, #FF9D33)",
					backgroundSize: "400% 400%",
				}}
				radius={6 * 2}
			>
				<Stack>
					<Stack spacing={0}>
						<Title
							style={{
								fontSize: `${(1 / 16) * 6 * 10}em`,
							}}
						>
							Wanna get in touch?
						</Title>
						<Stack spacing={0}>
							<Text
								style={{
									fontSize: `${(1 / 16) * 6 * 3}em`,
								}}
							>
								{"Don't hesitate!"}
							</Text>
							<Text
								style={{
									fontSize: `${(1 / 16) * 6 * 3}em`,
								}}
							>
								Head over to my LinkedIn profile
							</Text>
						</Stack>
					</Stack>
					<Anchor
						href="https://www.linkedin.com/in/ole-walberg-b21203186/"
						target="_blank"
					>
						<ActionIcon variant="light" size="xl">
							<IconBrandLinkedin
								size={6 * 6}
								color={colors.blue[5]}
							/>
						</ActionIcon>
					</Anchor>
				</Stack>
			</Paper>
		</Group>
	);
};

export default Footer;
