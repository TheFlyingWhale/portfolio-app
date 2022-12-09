import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "GET") {
		//return await getProjects(req, res);
	}

	return res.status(400).send({ message: "project handler failed" });
};
