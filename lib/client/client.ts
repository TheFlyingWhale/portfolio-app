import { createClient } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;

if (!projectId) {
	throw new Error("Sanity Project Id can not be undefined");
}

const client = createClient({
	projectId: "rz16aple",
	dataset: "production",
	apiVersion: "2022-11-14",
	useCdn: false,
});

export default client;
