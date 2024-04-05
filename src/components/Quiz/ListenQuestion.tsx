import { Question } from "@/types/Quiz";
import Image from "next/image";
import React from "react";
import AudioPlayer from "../AudioPlayer";

interface ListenQuestionProps {
  question: Question;
  answer: string;
  setAnswer: (answer: string) => void;
  isDone: boolean;
}

const ListenQuestion: React.FC<ListenQuestionProps> = ({
  question,
  setAnswer,
  answer,
  isDone,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl leading-9 text-center">
        📝 Type what you hear
      </h2>

      <AudioPlayer src={question?.question_record} />

      <textarea
        disabled={!isDone}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        value={answer}
        placeholder="Type the English translation here"
        className="w-80 h-24 p-2 border border-gray-400 mx-auto resize-none"
      ></textarea>
    </div>
  );
};

export default ListenQuestion;
