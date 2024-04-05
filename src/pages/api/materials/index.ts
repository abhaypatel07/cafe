import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { HttpMethod } from "@/types/HttpMethod";
import { withAuth } from "@/lib/authMiddleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HttpMethod.GET) {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  const { courseId } = req.query;
  const filter = courseId ? `WHERE course_id = $1` : "";
  const values = courseId ? [courseId] : [];

  try {
    const { rows } = await pool.query(
      `SELECT * FROM materials ${filter}`,
      values,
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
};

export default withAuth(handler);
