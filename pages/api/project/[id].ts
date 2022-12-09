import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/client/client";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	if (method === "GET") return await getProject(req, res);

	return res.status(400).send("project handler with id failed");
};

export default handler;

const getProject = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	const projectResponse = await client.fetch(
		`//groq
			*[slug.current=='${id}']
			{
				hero{
					..., image{"imageUrl":image.asset->url,...}
				}, pageSections[]{
  					_type=="textElement" => @{_type,...},
					_type=="imageElement" => @{_type,"imageUrl":@.image.asset->url, title, includeTitle, text, subtitle, displayCaption, withBorderRadius, withShadow, caption, align, weight, height, width},
					_type=="textCollection" => @{_type,"collection":textCollection[]},
					_type=="imageCollection" => @{_type, ignoreBreakpoints, fixedColumns, "collection":imageCollection[]{
						_type=="imageElement"=>@{_type,"imageUrl":@.image.asset->url, title, includeTitle, caption, displayCaption, text, subtitle, align, withBorderRadius, withShadow, weight, height, width}
					}}
				}
			}
		`
	);

	if (projectResponse.length) return res.status(200).json(projectResponse);

	return res
		.status(404)
		.send({ message: `project with id: ${id} not found` });
};
