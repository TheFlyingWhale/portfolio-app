import {
	Box,
	Select,
	SimpleGrid,
	Stack,
	Title,
	Text,
	Group,
	ActionIcon,
	Modal,
	List,
} from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons";
import { useEffect, useState } from "react";
import ToolPageContainer from "../../../components/toolPageContainer/toolPageContainer";

const KnuckleCalculator = () => {
	const [playerOneScore, setPlayerOneScore] = useState<number>(0);
	const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<ToolPageContainer
			title="Knucklebones"
			description="Calculate who's the best knuckle buster"
			titleChildren={
				<ActionIcon
					variant="light"
					color="violet"
					size="lg"
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					<IconQuestionMark />
				</ActionIcon>
			}
		>
			<PlayerGrid
				title="Player 1"
				onChange={(score) => {
					setPlayerOneScore(score);
				}}
			/>

			<Result playerOne={playerOneScore} playerTwo={playerTwoScore} />

			<PlayerGrid
				title="Player 2"
				onChange={(score) => {
					setPlayerTwoScore(score);
				}}
			/>
			<Modal
				opened={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
				}}
				title="How to play"
			>
				<ModalContent />
			</Modal>
		</ToolPageContainer>
	);
};

export default KnuckleCalculator;

const ModalContent = () => {
	return (
		<Stack spacing={6 * 3}>
			<Stack spacing={0}>
				<Title order={3}>What you need</Title>
				<List>
					<List.Item>An opponent, preferably</List.Item>
					<List.Item>9 dice for each player</List.Item>
					<List.Item>A drawing of the layout</List.Item>
				</List>
			</Stack>
			<Stack spacing={0}>
				<Title order={3}>Layout</Title>
				<Text>The layout consists of two grids</Text>
				<Text>3 rows with 3 columns for each grid</Text>
			</Stack>
			<Stack spacing={0}>
				<Title order={3}>Match dices</Title>
				<Text>
					When dice of the same value are placed in the same column,
					multiply the value with the number of dices, then multiply
					with the number of dices once more
				</Text>
				<Text>
					<i>
						e.g The math for a column with two dices of value 3 and
						one with the value of 4 goes as follows: 3 * 2 * 2 + 4
					</i>
				</Text>
			</Stack>
			<Stack spacing={0}>
				<Title order={3}>Destroy the opponent</Title>
				<Text>
					When a dice is placed in a column and the opponent have
					dices of the same value in their column, the opponent looses
					their dices
				</Text>
			</Stack>
			<Stack spacing={0}>
				<Title order={3}>End condition</Title>
				<Text>
					Once a player have filled their grid with dice, the round is
					over. And when the round is over, use the calculator to
					figure out who won
				</Text>
			</Stack>
		</Stack>
	);
};

interface ResultProps {
	playerOne: number;
	playerTwo: number;
}

const Result: React.FC<ResultProps> = ({ playerOne, playerTwo }) => {
	return (
		<Group position="center" spacing={6 * 6}>
			<Stack
				spacing={0}
				align="center"
				sx={(theme) => ({
					flexGrow: 1,
					//minWidth: "25%",
					padding: 6 * 2,
					borderRadius: 6 * 2,
					backgroundColor:
						playerOne === playerTwo
							? undefined
							: playerOne < playerTwo
							? theme.colors.red[1]
							: theme.colors.green[1],
				})}
			>
				<Text
					sx={(theme) => ({
						color:
							playerOne === playerTwo
								? undefined
								: playerOne < playerTwo
								? theme.colors.red[9]
								: theme.colors.green[9],
					})}
				>
					Player 1
				</Text>
				<Title
					order={2}
					sx={(theme) => ({
						fontSize: `${(1 / 16) * (6 * 6)}em`,
						color:
							playerOne === playerTwo
								? undefined
								: playerOne < playerTwo
								? theme.colors.red[9]
								: theme.colors.green[9],
					})}
				>
					{playerOne}
				</Title>
			</Stack>
			<Stack
				align="center"
				spacing={0}
				sx={(theme) => ({
					borderRadius: 6 * 2,
					padding: 6 * 2,
					flexGrow: 1,
					backgroundColor:
						playerOne === playerTwo
							? undefined
							: playerOne > playerTwo
							? theme.colors.red[2]
							: theme.colors.green[2],
				})}
			>
				<Text
					sx={(theme) => ({
						color:
							playerOne === playerTwo
								? undefined
								: playerOne > playerTwo
								? theme.colors.red[9]
								: theme.colors.green[9],
					})}
				>
					Player 2
				</Text>
				<Title
					order={2}
					sx={(theme) => ({
						fontSize: `${(1 / 16) * (6 * 6)}em`,
						color:
							playerOne === playerTwo
								? undefined
								: playerOne > playerTwo
								? theme.colors.red[9]
								: theme.colors.green[9],
					})}
				>
					{playerTwo}
				</Title>
			</Stack>
		</Group>
	);
};

interface PlayerGridProps {
	title?: string;
	onChange: (value: number) => void;
}

const PlayerGrid: React.FC<PlayerGridProps> = ({
	title: scoreTitle = "Total score",
	onChange,
}) => {
	const [totalScore, setTotalScore] = useState<number>(0);

	const [rowOne, setRowOne] = useState<number>(0);
	const [rowTwo, setRowTwo] = useState<number>(0);
	const [rowThree, setRowThree] = useState<number>(0);

	useEffect(() => {
		let newScore = 0;
		newScore = newScore + rowOne;
		newScore = newScore + rowTwo;
		newScore = newScore + rowThree;

		setTotalScore(newScore);
	}, [rowOne, rowTwo, rowThree]);

	useEffect(() => {
		onChange(totalScore);
	}, [totalScore]);

	return (
		<Stack spacing={6}>
			<Stack spacing={0}>
				<Title
					order={2}
					style={{
						fontSize: `${(1 / 16) * (6 * 3)}em`,
					}}
				>
					{scoreTitle}
				</Title>
			</Stack>
			<SimpleGrid cols={3}>
				<DiceColumn
					onChange={(score) => {
						setRowOne(score);
					}}
				/>
				<DiceColumn
					onChange={(score) => {
						setRowTwo(score);
					}}
				/>
				<DiceColumn
					onChange={(score) => {
						setRowThree(score);
					}}
				/>
			</SimpleGrid>
		</Stack>
	);
};

interface DiceItemProps {
	onChange: (value: number) => void;
}

const DiceItem: React.FC<DiceItemProps> = ({ onChange }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		const valueToNumber = Number(value);
		onChange(valueToNumber);
	}, [value]);

	return (
		<Box>
			<Select
				onChange={(event) => {
					setValue(event as string);
				}}
				data={[
					{ value: "0", label: "0" },
					{ value: "1", label: "1" },
					{ value: "2", label: "2" },
					{ value: "3", label: "3" },
					{ value: "4", label: "4" },
					{ value: "5", label: "5" },
					{ value: "6", label: "6" },
				]}
			/>
		</Box>
	);
};

interface DiceColumnProps {
	onChange: (value: number) => void;
}

const DiceColumn: React.FC<DiceColumnProps> = ({ onChange }) => {
	const [values, setValues] = useState([0, 0, 0]);
	const [score, setScore] = useState<number>(0);

	useEffect(() => {
		let newScore = 0;
		const counts: any = {};
		values.forEach((item: number) => {
			counts[item] = (counts[item] || 0) + 1;
		});
		for (const key in counts) {
			const keyAsNumber = Number.parseInt(key);
			const calculation = keyAsNumber * counts[key] * counts[key];
			console.log("calculation", calculation);
			newScore = newScore + calculation;
		}
		setScore(newScore);
	}, [values]);

	useEffect(() => {
		onChange(score);
	}, [score]);

	return (
		<Stack>
			<DiceItem
				onChange={(value) => {
					setValues([value, values[1], values[2]]);
				}}
			/>
			<DiceItem
				onChange={(value) => {
					setValues([values[0], value, values[2]]);
				}}
			/>
			<DiceItem
				onChange={(value) => {
					setValues([values[0], values[1], value]);
				}}
			/>
		</Stack>
	);
};
