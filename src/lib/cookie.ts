import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export const COOKIE_NAME = "jwt_token";

export const setTokenCookie = (res: NextApiResponse, token: string) => {
  const serialized = cookie.serialize(COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.setHeader("Set-Cookie", serialized);
};

export const getTokenFromCookie = (req: NextApiRequest) => {
  const cookies = cookie.parse(req.headers.cookie || "");

  return cookies[COOKIE_NAME] || "";
};
