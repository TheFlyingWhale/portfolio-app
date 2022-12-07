import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/client/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		return await getAbout(req, res);
	}

	return res.status(400).send("-------- about handler failed --------");
};

export default handler;

const getAbout = async (_req: NextApiRequest, res: NextApiResponse) => {
	const aboutResponse = await client.fetch(
		'*[_type == "aboutSection"]{title, description, educationSections, "profilePicture":profilePicture.asset->url}'
	);

	if (aboutResponse) {
		return res.status(200).json(aboutResponse);
	}

	return res.status(400).send("-------- getAbout failed --------");
};
