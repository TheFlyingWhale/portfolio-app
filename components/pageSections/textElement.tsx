import { Stack, Title, Text, Group } from "@mantine/core";
import { TextSection } from "../../lib/interfaces/project";

interface TextElementProps {
	section: TextSection;
}

const TextElement: React.FC<TextElementProps> = ({ section }) => {
	const { title, subtitle, body, align, includeTitle, _type } = section;

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
								style={{
									fontFamily: "Heebo",
									fontWeight: 500,
									fontSize: `${(1 / 16) * 6 * 3.5}em`,
								}}
							>
								{subtitle}
							</Title>
						)}
						{body && (
							<Text
								style={{
									maxWidth: "60ch",
								}}
							>
								{body}
							</Text>
						)}
					</Stack>
				)}
			</Stack>
		</Group>
	);
};

export default TextElement;
