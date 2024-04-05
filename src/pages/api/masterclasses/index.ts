import { withAuth } from "@/lib/authMiddleware";
import { query } from "@/lib/wordpress-db";
import {
  POSTS,
  POSTS_META_DATA,
  TERM_RELATIONSHIPS,
  TERM_TAXONOMY,
} from "@/lib/wordpress-db-tables";
import { fetchApi } from "@/pages/api/wordpressServiceAPI";
import { HttpMethod } from "@/types/HttpMethod";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const sql = `
        SELECT 
          p.ID AS course_id, 
          'title' AS meta_key, 
          p.post_title AS meta_value
        FROM ${POSTS} p
        INNER JOIN ${TERM_RELATIONSHIPS} tr ON p.ID = tr.object_id
        INNER JOIN ${TERM_TAXONOMY} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
        WHERE tt.term_taxonomy_id = (
            SELECT term_taxonomy_id 
            FROM ${TERM_TAXONOMY} 
            WHERE term_id = 74 
            AND taxonomy = 'ld_course_category'
        )
        AND p.post_type = 'sfwd-courses'
        AND p.post_status = 'publish'

        UNION ALL

        SELECT 
          p.ID AS course_id, 
          'excerpt' AS meta_key,
          p.post_excerpt AS meta_value
        FROM ${POSTS} p
        INNER JOIN ${TERM_RELATIONSHIPS} tr ON p.ID = tr.object_id
        INNER JOIN ${TERM_TAXONOMY} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
        WHERE tt.term_taxonomy_id = (
            SELECT term_taxonomy_id 
            FROM ${TERM_TAXONOMY} 
            WHERE term_id = 74 
            AND taxonomy = 'ld_course_category'
        )
        AND p.post_type = 'sfwd-courses'
        AND p.post_status = 'publish'

        UNION ALL

        SELECT 
          p.ID AS course_id, 
          pm.meta_key, 
          pm.meta_value
        FROM ${POSTS} p
        INNER JOIN ${TERM_RELATIONSHIPS} tr ON p.ID = tr.object_id
        INNER JOIN ${TERM_TAXONOMY} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
        INNER JOIN ${POSTS_META_DATA} pm ON p.ID = pm.post_id
        WHERE tt.term_taxonomy_id = (
            SELECT term_taxonomy_id 
            FROM ${TERM_TAXONOMY} 
            WHERE term_id = 74 
            AND taxonomy = 'ld_course_category'
        )
        AND p.post_type = 'sfwd-courses'
        AND p.post_status = 'publish'

        UNION ALL

        SELECT 
          p.ID AS course_id, 
          'course_cover_image_url' AS meta_key, 
          img.guid AS meta_value
        FROM ${POSTS} p
        INNER JOIN ${TERM_RELATIONSHIPS} tr ON p.ID = tr.object_id
        INNER JOIN ${TERM_TAXONOMY} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
        INNER JOIN ${POSTS_META_DATA} pm_thumb ON p.ID = pm_thumb.post_id 
        LEFT JOIN ${POSTS} img ON img.ID = CAST(pm_thumb.meta_value AS UNSIGNED)
        WHERE tt.term_taxonomy_id = (
            SELECT term_taxonomy_id 
            FROM ${TERM_TAXONOMY} 
            WHERE term_id = 74 
            AND taxonomy = 'ld_course_category'
        )
        AND p.post_type = 'sfwd-courses'
        AND p.post_status = 'publish'
        AND pm_thumb.meta_key = 'sfwd-courses_course-cover-image_thumbnail_id'
        ORDER BY course_id, meta_key;
    `
    
    const result = await query(sql);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default withAuth(handler);
