import client from "../lib/client/client";
import Animal from "../lib/interfaces/animal";
interface HomeProps {
	props: {
		animals: Animal[];
	};
	animals: Animal[];
}

const Home: React.FC<HomeProps> = (props) => {
	const animals = props.animals;

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

export const getStaticProps = async () => {
	const animals = await client.fetch(`*[_type == "project"]`);

	return {
		props: {
			animals,
		},
	};
};
