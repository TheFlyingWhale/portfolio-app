import { Stack, Title, Text, Group } from "@mantine/core";
import { TextSection } from "../../lib/interfaces/project";
import useTypographyStyles from "../../styles/useTypographyStyles";

interface TextElementProps {
	section: TextSection;
}

const TextElement: React.FC<TextElementProps> = ({ section }) => {
	const { title, subtitle, body, align, includeTitle, _type } = section;
	const { classes: typography } = useTypographyStyles();

	return (
		<Group
			style={{
				justifyContent: align ? align : "",
			}}
		>
			<Stack spacing={3}>
				{title && includeTitle && (
					<Title
						order={2}
						className={typography.title}
						style={{
							fontSize: `${(1 / 16) * 6 * 5}em`,
						}}
					>
						{title}
					</Title>
				)}
				{(subtitle || body) && (
					<Stack spacing={3}>
						{subtitle && (
							<Title
								order={3}
								className={typography.subtitle}
								style={{
									fontSize: `${(1 / 16) * 6 * 3.5}em`,
								}}
							>
								{subtitle}
							</Title>
						)}
						{body && (
							<Text className={typography.body}>{body}</Text>
						)}
					</Stack>
				)}
			</Stack>
		</Group>
	);
};

export default TextElement;
