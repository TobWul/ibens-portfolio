// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req);
  // Get clients url from request
  const { origin } = req.headers;
  console.log(origin);

  res.status(200).json({ name: "John Doe" });
}
