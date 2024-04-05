import type { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "@/types/HttpMethod";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { withAuth } from "@/lib/authMiddleware";
import { query } from "@/lib/wordpress-db";
import { USERS, USER_META_DATA } from "@/lib/wordpress-db-tables";

async function getUserById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
) {
  try {
    let result: any;
    const sql = `
        SELECT u.display_name, um.meta_value AS image_url
        FROM ${USERS} u
        LEFT JOIN ${USER_META_DATA} um ON u.ID = um.user_id AND um.meta_key = 'deuimage'
        WHERE u.ID = ${id};
        `;
    try {
      result = await query(sql);
    } catch (error) {
      throw new Error("Failed to fetch user from the database");
    }
    res.status(200).json({
      id: id,
      name: result?.[0]?.display_name ? result?.[0].display_name : '',
      avatar: result?.[0]?.image_url ? result?.[0]?.image_url : '',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case HttpMethod.GET:
      await getUserById(req, res, id as string);
      break;
    default:
      res.setHeader("Allow", [HttpMethod.GET]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default withAuth(handler);
