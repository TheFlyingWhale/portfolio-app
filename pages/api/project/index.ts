import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";

type ResponseError = {
	message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "GET") {
		return await getProjects(req, res);
	}

	return res.status(400).send({ message: "project handler failed" });
};

export default handler;

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
	const projectResponse = await client.fetch(
		`*[_type == "project" && active == true] | order(order asc) {...,title, subtitle, description, slug, "imageUrl":coverImage.asset->url}`
	);

	if (projectResponse) {
		return res.status(200).json(projectResponse);
	}

	return res.status(400).send({ message: "getProject failed" });
};
