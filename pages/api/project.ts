import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/client/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		return await getProjects(req, res);
	}

	return res.status(400).send("-------- project handler failed --------");
};

export default handler;

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
	const projectResponse = await client.fetch(`*[_type == "project"]`);

	if (projectResponse) {
		return res.status(200).json(projectResponse);
	}

	return res.status(400).send("-------- getProject failed --------");
};
