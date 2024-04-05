import type { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@/types/HttpMethod";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { withAuth } from "@/lib/authMiddleware";

async function saveNewPassswordById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
  password: string,
) {
  try {
    res.status(200).json({
      ok: "ok",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, password } = req.body;

  switch (req.method) {
    case HttpMethod.POST:
      await saveNewPassswordById(req, res, id, password as string);
      break;
    default:
      res.setHeader("Allow", [HttpMethod.GET]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default withAuth(handler);
