import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { HttpMethod } from "@/types/HttpMethod";
import { QuestionType, Quiz } from "@/types/Quiz";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { withAuth } from "@/lib/authMiddleware";
import {
  POSTS,
  POSTS_META_DATA,
  USER_META_DATA,
} from "@/lib/wordpress-db-tables";
import { query } from "@/lib/wordpress-db";

async function getCourseById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
) {
  let result;
  try {
    const sql = `
                  SELECT p.*, pm.*
                  FROM ${POSTS} p
                  LEFT JOIN ${POSTS_META_DATA} pm ON p.ID = pm.post_id
                  WHERE p.ID = ${id};
                  `;

    result = await query(sql);
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case HttpMethod.GET:
      await getCourseById(req, res, id as string);
      break;
    default:
      res.setHeader("Allow", [HttpMethod.GET]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withAuth(handler);
