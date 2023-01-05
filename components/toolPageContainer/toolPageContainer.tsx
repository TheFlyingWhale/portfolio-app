import { Stack, Title, Text, Group } from "@mantine/core";
import { useEffect } from "react";
import { setDisplayFooter, setDisplayHeader } from "../../store/appSlice";
import { useAppDispatch } from "../../store/hooks";

interface ToolPageContainerProps {
	title: string;
	description?: string;
	children: React.ReactNode | React.ReactNode[];
	titleChildren?: React.ReactNode | React.ReactNode[];
}

const ToolPageContainer: React.FC<ToolPageContainerProps> = ({
	title,
	children,
	description,
	titleChildren,
}) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setDisplayHeader(false));
		dispatch(setDisplayFooter(false));
	}, []);

	return (
		<Stack
			style={{
				padding: `${6 * 6}px 0px`,
			}}
		>
			<Group
				spacing="lg"
				style={{
					alignItems: "end",
				}}
			>
				<Stack spacing={0}>
					<Title>{title}</Title>
					{description && (
						<Text sx={(theme) => ({ color: theme.colors.gray[6] })}>
							{description}
						</Text>
					)}
				</Stack>
				{titleChildren && titleChildren}
			</Group>
			{children}
		</Stack>
	);
};

export default ToolPageContainer;
