import { createClient } from "next-sanity";

console.log(process.env);

const client = createClient({
	projectId: process.env.CLIENT_ID,
	dataset: "production",
	apiVersion: "2022-11-14",
	useCdn: false,
});

export default client;
