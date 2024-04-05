import { NextApiRequest, NextApiResponse } from "next";
import { KJUR, hextob64 } from "jsrsasign";
import { withAuth } from "@/lib/authMiddleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { meetingNumber = "", role = "0" } = req.query;
  const apiKey = process.env.ZOOM_CLIENT_ID;
  const apiSecret = process.env.ZOOM_CLIENT_SECRET;
  if (!apiKey || !apiSecret || !meetingNumber) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const result = generateSignature(apiKey, apiSecret, meetingNumber, role);
    res.status(200).json({ result, sdkKey: apiKey });
  } catch (error) {
    console.error("Error generating signature:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

function generateSignature(
  key: any,
  secret: any,
  meetingNumber: any,
  role: any,
) {
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: "HS256", typ: "JWT" };

  const oPayload = {
    sdkKey: key,
    appKey: key,
    mn: 87965988293,
    role: 0,
    iat: iat,
    exp: exp,
    tokenExp: exp,
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, secret);
  return sdkJWT;
}
export default withAuth(handler);
