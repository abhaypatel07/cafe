import React from "react";
import LessonTab from "./LessonTab";
import { Lesson } from "@/types/Lesson";

interface LessonListProps {
  lessons: Lesson[];
  currentLessonIndex: number;
  compeletedLessons: number[];
  setCurrentLesson: (index: number) => void;
}

const LessonList: React.FC<LessonListProps> = ({
  lessons,
  currentLessonIndex,
  compeletedLessons,
  setCurrentLesson,
}) => {
  return (
    <div className="h-full w-56 flex flex-col gap-0 align-top">
      {lessons?.map((lesson, index) => {
        return (
          <LessonTab
            key={index}
            lesson={lesson}
            isCurrent={index === currentLessonIndex}
            setCurrentLesson={setCurrentLesson}
            isCompleted={compeletedLessons?.includes(index)}
          />
        );
      })}
    </div>
  );
};

export default LessonList;
