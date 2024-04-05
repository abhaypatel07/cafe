import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { HttpMethod } from "@/types/HttpMethod";
import { withAuth } from "@/lib/authMiddleware";

async function getMaterialById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
) {
  try {
    const { rows } = await pool.query("SELECT * FROM materials WHERE id = $1", [
      id,
    ]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: "Material not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
}

async function deleteMaterialById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
) {
  try {
    const { rowCount } = await pool.query(
      "DELETE FROM materials WHERE id = $1",
      [id],
    );
    if (rowCount !== null && rowCount > 0) {
      res.status(200).json({ message: "Material deleted successfully" });
    } else {
      res.status(404).json({ message: "Material not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case HttpMethod.GET:
      await getMaterialById(req, res, id as string);
      break;
    case HttpMethod.DELETE:
      await deleteMaterialById(req, res, id as string);
      break;
    default:
      res.setHeader("Allow", [HttpMethod.GET, HttpMethod.DELETE]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default withAuth(handler);
