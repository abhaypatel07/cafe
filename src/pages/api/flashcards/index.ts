import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpMethod } from '@/types/HttpMethod';
import { withAuth } from '@/lib/authMiddleware';
import { POSTS, POSTS_META_DATA } from '@/lib/wordpress-db-tables';
import { query } from '@/lib/wordpress-db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== HttpMethod.POST) {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  const ids = req.body.ids;
  const idsArray = Array.isArray(ids) ? ids : [ids];

  const formattedIds = idsArray.map((id) => `${id}`).join(', ');
  if (formattedIds) {
    try {
      const sql = `
                SELECT p.ID as post_id, pm.meta_key, pm.meta_value
                FROM ${POSTS} p
                LEFT JOIN ${POSTS_META_DATA} pm ON p.ID = pm.post_id
                WHERE p.ID IN (${formattedIds})
                AND p.post_type = 'flashcards';
                `;

      const result = await query(sql);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err });
    }
  } else {
    res.status(200).json('');
  }
};

export default withAuth(handler);
