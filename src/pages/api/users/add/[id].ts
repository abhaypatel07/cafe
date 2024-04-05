import type { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@/types/HttpMethod";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { withAuth } from "@/lib/authMiddleware";
import { UserProfile } from "@/types/User";

async function saveUserById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let userData: UserProfile = req.body;
  try {
    res.status(200).json({
      ok: "ok",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.POST:
      await saveUserById(
        req,
        res
      );
      break;
    default:
      res.setHeader("Allow", [HttpMethod.POST]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default withAuth(handler);
