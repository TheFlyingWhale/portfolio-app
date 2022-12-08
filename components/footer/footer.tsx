import {
	Group,
	Title,
	Text,
	Stack,
	Paper,
	ActionIcon,
	useMantineTheme,
	Anchor,
	Button,
} from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons";
import Link from "next/link";
import { useShadow } from "../../styles/useShadow";
import useFooterStyles from "./useFooterStyles";

const Footer = () => {
	const { classes: shadow } = useShadow();
	const { colors } = useMantineTheme();
	const { root, container, title, text } = useFooterStyles().classes;

	return (
		<Group position="center" className={root}>
			<Paper className={`${shadow.sm} ${container}`}>
				<Stack>
					<Stack spacing={0}>
						<Title
							className={title}
							//style={{
							//	fontSize: `${(1 / 16) * 6 * 10}em`,
							//}}
						>
							Wanna get in touch?
						</Title>
						<Text
							className={text}
							//style={{
							//	fontSize: `${(1 / 16) * 6 * 3.5}em`,
							//}}
						>
							Head over to my LinkedIn profile
						</Text>
					</Stack>
					<Anchor
						href="https://www.linkedin.com/in/ole-walberg-b21203186/"
						target="_blank"
					>
						<Button
							variant="light"
							color="gray"
							size="md"
							leftIcon={<IconBrandLinkedin size={6 * 4} />}
						>
							LinkedIn
						</Button>
					</Anchor>
				</Stack>
			</Paper>
		</Group>
	);
};

export default Footer;
