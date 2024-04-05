import type { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/authMiddleware";
import {
  POSTS,
  POSTS_META_DATA,
  USER_META_DATA,
} from "@/lib/wordpress-db-tables";
import { query } from "@/lib/wordpress-db";
import { use } from "react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { userId } = req.query;
    const { courseId } = req.query;
    if (courseId) {
      const result = await getCourseByCourseId(courseId);
      res.status(200).json(result);
    } else if (userId) {
      const result = await getCoursesByUserId('1899'); /// TODO: CHANGE BACK LATER
      res.status(200).json({ result });
    } else {
      return res.status(400).json({ message: "Invalid request parameters." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
};

export default withAuth(handler);
async function getCoursesByUserId(userId: string | string[] | undefined) {
  const sql = `
                  SELECT pm.post_id AS course_id, pm.meta_key, pm.meta_value
                  FROM ${POSTS_META_DATA} pm
                  WHERE pm.post_id IN (
                      SELECT DISTINCT
                        SUBSTRING(um.meta_key, 18, LENGTH(um.meta_key) - 29) AS course_id
                      FROM ${USER_META_DATA} um
                      WHERE um.user_id = ${userId}
                      AND um.meta_key LIKE 'learndash_course_%_enrolled_at'
                  )
                  ORDER BY pm.post_id, pm.meta_key;
                  `;
  const res = await query(sql);
  return res;
}

async function getCourseByCourseId(courseId: string | string[]) {
  const sql = `
                SELECT 
                	p.ID as course_id,
                  pm.meta_key, 
                  pm.meta_value
                FROM ${POSTS_META_DATA} pm
                JOIN ${POSTS} p ON pm.post_id = p.ID
                WHERE p.ID = ${courseId}
                AND p.post_type = 'sfwd-courses'

                UNION ALL

                SELECT
                	p.ID as course_id,
                  'link' AS meta_key,  -- Custom key for URL
                  p.guid COLLATE utf8mb4_unicode_ci AS meta_value  -- Ensure collation matches
                FROM ${POSTS} p
                WHERE p.ID = ${courseId}
                AND p.post_type = 'sfwd-courses'

                ORDER BY meta_key;
                  `;
  return await query(sql);
}
