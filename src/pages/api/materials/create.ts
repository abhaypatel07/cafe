import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { Material } from "@/types/Material";
import { withAuth } from "@/lib/authMiddleware";
import { HttpMethod } from "@/types/HttpMethod";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HttpMethod.POST) {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const {
    course_id,
    created_by_user_id,
    content,
    links,
    images_url,
  }: Material = req.body;

  try {
    const queryText = `
      INSERT INTO materials
      (course_id, created_at, last_update, created_by_user_id, content, links, images_url)
      VALUES
      ($1, NOW(), NOW(), $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [course_id, created_by_user_id, content, links, images_url];

    const { rows } = await pool.query(queryText, values);

    res.status(201).json(rows[0]);
  } catch (err: any) {
    console.error("Error inserting material:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default withAuth(handler);
