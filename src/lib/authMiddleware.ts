import { NextApiRequest, NextApiResponse } from "next";
import { getTokenFromCookie } from "./cookie";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const authenticateUser = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void,
) => {
  interface CustomNextApiRequest extends NextApiRequest {
    user: any;
  }

  const token = getTokenFromCookie(req);

  try {
    if (!token) {
      throw new Error("Authentication failed: No token found");
    }

    const decodedToken = jwt.verify(token, SECRET_KEY);
    (req as CustomNextApiRequest).user = decodedToken;
    next();
  } catch (error) {
    console.error("Authentication failed:", error);
    res.status(401).json({ success: false, error: "Authentication failed" });
  }
};

export const withAuth = (handler: any) => async (req: any, res: any) => {
  try {
    const user = authenticateUser(req, res, () => {});
    req.user = user;
    return handler(req, res);
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};
