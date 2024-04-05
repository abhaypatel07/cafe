import type { NextApiRequest, NextApiResponse } from "next";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { HttpMethod } from "@/types/HttpMethod";
import { setTokenCookie } from "@/lib/cookie";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== HttpMethod.POST) {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const data = await fetchApi(`api/v1/token`, HttpMethod.POST, {
      username: req.body.userName,
      password: req.body.password,
    });
    if (data.jwt_token) {
      const decodedToken = jwt.verify(
        data.jwt_token as any,
        process.env.JWT_SECRET as string,
      );
      data.userId = decodedToken.sub;
      setTokenCookie(res, data.jwt_token);
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err, error: true });
  }
}
