import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { Lesson } from "@/types/Lesson";
import { query } from "@/lib/wordpress-db";
import { withAuth } from "@/lib/authMiddleware";
import { POSTS, POSTS_META_DATA } from "@/lib/wordpress-db-tables";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
  const { courseId } = req.query;
  try {
    // const sql = `
    //         SELECT p.*, pm.*
    //         FROM ${POSTS} p
    //         LEFT JOIN ${POSTS_META_DATA} pm ON p.ID = pm.post_id
    //         WHERE p.ID = ${courseId};
    //         `;

    // const result = await query(sql);
    // console.log(result);
    // res.status(200).json(result);
    const rows: Lesson[] = [
      {
        thumbnail_url: "/path/to/thumbnail1.jpg",
        date: new Date(2023, 0, 15).toDateString(),
        lesson_number: 1,
        title: "Introduction to Course",
        quiz_id: "1",
      },
      {
        thumbnail_url: "/path/to/thumbnail2.jpg",
        date: new Date(2023, 0, 22).toDateString(),
        lesson_number: 2,
        title: "Understanding Basics",
        quiz_id: "2",
      },
      {
        thumbnail_url: "/path/to/thumbnail3.jpg",
        date: new Date(2023, 0, 29).toDateString(), // Jan 29, 2023
        lesson_number: 3,
        title: "Deep Dive into Topic 1",
        quiz_id: "3",
      },
      {
        thumbnail_url: "/path/to/thumbnail4.jpg",
        date: new Date(2023, 1, 5).toDateString(), // Feb 5, 2023
        lesson_number: 4,
        title: "Exploring Topic 2",
        quiz_id: "4",
      },
      {
        thumbnail_url: "/path/to/thumbnail5.jpg",
        date: new Date(2023, 1, 15).toDateString(),
        lesson_number: 5,
        title: "Conclusion and Next Steps",
        quiz_id: "5",
      },
      {
        thumbnail_url: "/path/to/thumbnail4.jpg",
        date: new Date(2024, 1, 5).toDateString(), // Feb 5, 2023
        lesson_number: 6,
        title: "Exploring Topic 2",
        quiz_id: "6",
      },
      {
        thumbnail_url: "/path/to/thumbnail5.jpg",
        date: new Date(2024, 1, 15).toDateString(),
        lesson_number: 7,
        title: "Conclusion and Next Steps",
        quiz_id: "7",
      },
      {
        thumbnail_url: "/path/to/thumbnail4.jpg",
        date: new Date(2025, 1, 5).toDateString(), // Feb 5, 2023
        lesson_number: 8,
        title: "Exploring Topic 2",
        quiz_id: "8",
      },
      {
        thumbnail_url: "/path/to/thumbnail5.jpg",
        date: new Date(2025, 1, 15).toDateString(),
        lesson_number: 9,
        title: "Conclusion and Next Steps",
        quiz_id: "9",
      },
      {
        thumbnail_url: "/path/to/thumbnail5.jpg",
        date: new Date(2026, 1, 15).toDateString(),
        lesson_number: 10,
        title: "Conclusion and Next Steps",
        quiz_id: "10",
      },
      {
        thumbnail_url: "/path/to/thumbnail4.jpg",
        date: new Date(2026, 1, 5).toDateString(),
        lesson_number: 11,
        title: "Exploring Topic 2",
        quiz_id: "11",
      },
      {
        thumbnail_url: "/path/to/thumbnail5.jpg",
        date: new Date(2027, 1, 15).toDateString(),
        lesson_number: 12,
        title: "Conclusion and Next Steps",
        quiz_id: "12",
      },
    ];
    res.status(200).json(rows);
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ message: "Server error" });
    //   const result = await query(sql);
    //   console.log(result);
    //   return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user from the database");
  }
  // try {
  //   const rows: Lesson[] = [
  //     {
  //       thumbnail_url: "/path/to/thumbnail1.jpg",
  //       date: new Date(2023, 0, 15).toDateString(),
  //       lesson_number: 1,
  //       title: "Introduction to Course",
  //     },
  //     {
  //       thumbnail_url: "/path/to/thumbnail2.jpg",
  //       date: new Date(2023, 0, 22).toDateString(),
  //       lesson_number: 2,
  //       title: "Understanding Basics",
  //     },
  //     {
  //       thumbnail_url: "/path/to/thumbnail3.jpg",
  //       date: new Date(2023, 0, 29).toDateString(), // Jan 29, 2023
  //       lesson_number: 3,
  //       title: "Deep Dive into Topic 1",
  //     },
  //     {
  //       thumbnail_url: "/path/to/thumbnail4.jpg",
  //       date: new Date(2023, 1, 5).toDateString(), // Feb 5, 2023
  //       lesson_number: 4,
  //       title: "Exploring Topic 2",
  //     },
  //     {
  //       thumbnail_url: "/path/to/thumbnail5.jpg",
  //       date: new Date(2023, 1, 15).toDateString(),
  //       lesson_number: 5,
  //       title: "Conclusion and Next Steps",
  //     },
  //   ];
  //   res.status(200).json(rows);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: "Server error" });
  // }
};

export default withAuth(handler);
