import api from "../../lib/apiService/apiService";
import Animal from "../../lib/interfaces/animal";
interface HomeProps {
	animals: Animal[];
}

const Home: React.FC<HomeProps> = ({ animals }) => {
	if (!animals || animals.length === 0)
		return (
			<>
				<header>
					<h1>Sanity + Next.js</h1>
				</header>
				<main>
					<h2>Animals</h2>
					<div>
						<div>¯\_(ツ)_/¯</div>

						<p>
							Your data will show up here when you have configured
							everything correctly
						</p>
					</div>
				</main>
			</>
		);

	return (
		<>
			<header>
				<h1>Sanity + Next.js</h1>
			</header>
			<main>
				<h2>Animals</h2>
				{animals.length > 0 && (
					<ul>
						{animals.map((animal) => (
							<li key={animal._id}>{animal?.name}</li>
						))}
					</ul>
				)}
				{!(animals.length > 0) && <p>No animals to show</p>}
				{animals.length > 0 && (
					<div>
						<pre>{JSON.stringify(animals, null, 2)}</pre>
					</div>
				)}
				{!(animals.length > 0) && (
					<div>
						<div>¯\_(ツ)_/¯</div>

						<p>
							Your data will show up here when you have configured
							everything correctly
						</p>
					</div>
				)}
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const animals = await api
		.get("/project")
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return null;
		});

	return {
		props: {
			animals,
		},
	};
};
