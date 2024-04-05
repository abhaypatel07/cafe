import { Lesson } from "@/types/Lesson";
import Image from "next/image";
import React from "react";

const LessonTab = ({
  lesson,
  isCurrent,
  setCurrentLesson,
  isCompleted,
}: {
  lesson: Lesson;
  isCurrent: boolean;
  isCompleted: boolean;
  setCurrentLesson: (index: number) => void;
}) => {
  return (
    <div
      onClick={() => {
        setCurrentLesson(lesson?.lesson_number - 1);
      }}
      className="h-14 min-w-56 gap-4 border-b border-gray-300 rounded-t-md flex flex-row hover:cursor-pointer"
    >
      {isCurrent ? (
        <div className="w-2 h-14 flex-shrink-0 bg-yellow"></div>
      ) : (
        <div className="w-2 h-14 flex-shrink-0 opacity-0"></div>
      )}
      <div className="flex flex-row justify-between h-full w-full py-4">
        <p className="text-base font-normal text-left">{lesson?.title}</p>

        {isCompleted && (
          <Image
            src="/icons/completed.svg"
            alt="completed"
            width={24}
            height={24}
            className="ml-auto"
          />
        )}
      </div>
    </div>
  );
};

export default LessonTab;
