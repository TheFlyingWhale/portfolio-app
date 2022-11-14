import api from "../lib/apiService/apiService";
import client from "../lib/client/client";
import Animal from "../lib/interfaces/animal";
interface HomeProps {
	animals: Animal[];
}

const Home: React.FC<HomeProps> = ({ animals }) => {
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
	const animals = await fetch("http://localhost:3000/api/project")
		.then(async (res) => {
			return await res.json();
		})
		.catch((err) => console.log(err));

	const apiRes = await api
		.get("/project")
		.then((res) => console.log("-------api res --------", res))
		.catch((err) => console.log("-------api err --------", err));

	return {
		props: {
			animals,
		},
	};
};
