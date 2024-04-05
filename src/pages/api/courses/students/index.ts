import type { NextApiRequest, NextApiResponse } from "next";
import { Student } from "@/types/Student";
import { USER_META_DATA } from "@/lib/wordpress-db-tables";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  const { courseId } = req.query;
  const sql = `
                  SELECT *
                  FROM ${USER_META_DATA}
                  WHERE meta_key = '_sfwd-course_progress'
                  AND meta_value LIKE '%${courseId}%'
                  `;
  try {
    const rows: Student[] = [
      {
        id: "1",
        name: "Omer Shalom",
        avatar: "/images/aviad.svg",
      },
      {
        id: "2",
        name: "Aviad Duv",
        avatar: "/images/aviad.svg",
      },
      {
        id: "3",
        name: "Omer Shalom",
        avatar: "/images/aviad.svg",
      },
      {
        id: "4",
        name: "Aviad Duv",
        avatar: "/images/aviad.svg",
      },
      {
        id: "5",
        name: "Omer Shalom",
        avatar: "/images/aviad.svg",
      },
      {
        id: "6",
        name: "Aviad Duv",
        avatar: "/images/aviad.svg",
      },
      {
        id: "7",
        name: "Omer Shalom",
        avatar: "/images/aviad.svg",
      },
      {
        id: "8",
        name: "Aviad Duv",
        avatar: "/images/aviad.svg",
      },
      {
        id: "9",
        name: "Omer Shalom",
        avatar: "/images/aviad.svg",
      },
      {
        id: "10",
        name: "Aviad Duv",
        avatar: "",
      },
      {
        id: "11",
        name: "Omer Shalom",
      },
      {
        id: "12",
        name: "Aviad Duv",
        avatar: "/images/aviad.svg",
      },
    ];
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
