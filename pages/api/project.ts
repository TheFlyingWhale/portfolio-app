import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/client/client";

type Data = {
	name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const projectResponse = await client.fetch(`*[_type == "project"]`);

	if (projectResponse) {
		return res.status(200).json(projectResponse);
	}

	return res.status(400);
};

export default handler;
