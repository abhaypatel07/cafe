import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { HttpMethod } from "@/types/HttpMethod";
import { QuestionType, Quiz } from "@/types/Quiz";
import { withAuth } from "@/lib/authMiddleware";

async function getQuizById(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string,
) {
  try {
    const quiz: Quiz = {
      id: id,
      questions: [
        {
          id: "1",
          type: QuestionType.textToVoice,
          question_text: "🎤 He was stressed but I calmed him down.",
          text_answer: "הוא היה לחוץ אבל הרגעתי אותו",
        },
        {
          id: "2",
          type: QuestionType.voiceToText,
          text_answer: "הטיסה לא יוצאת בזמן כי יש עיכוב",
          question_record:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
      ],
    };
    res.status(200).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case HttpMethod.GET:
      await getQuizById(req, res, id as string);
      break;
    default:
      res.setHeader("Allow", [HttpMethod.GET]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default withAuth(handler);
