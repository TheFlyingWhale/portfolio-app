import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "GET") {
		return await getProjects(req, res);
	}

	return res.status(400).send({ message: "project handler failed" });
};

export default handler;

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
	interface GetProjectsParams {
		onlySlugs?: boolean;
	}

	const params: GetProjectsParams = req.query;

	if (params.onlySlugs) {
		const response = await client.fetch(
			`//groq
				*[_type == "project" && active == true] | order(order asc) {
					"slug": slug.current, 
				}
			`
		);

		return res.status(200).json(response);
	}

	const response = await client.fetch(
		`//groq
			*[_type == "project" && active == true] | order(order asc) {
				...,
				title,
				subtitle,
				description,
				slug, 
				"imageUrl":coverImage.asset->url
			}
		`
	);

	if (response) {
		return res.status(200).json(response);
	}

	return res.status(400).send({ message: "getProject failed" });
};
