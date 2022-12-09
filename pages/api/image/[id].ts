import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "GET") return await getImageUrl(req, res);

	return res.status(400).send("image handler with id failed");
};

export default handler;

const getImageUrl = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	const imageResponse = await client.fetch(`//groq
		*[slug.current=='${id}']
		{
			"imageUrl": image.asset->url
		}
	`);

	if (imageResponse) return res.status(200).json(imageResponse);

	//console.log(imageResponse);

	return res.status(400).send({ message: `image with id: ${id} not found` });
};
