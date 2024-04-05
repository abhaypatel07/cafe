import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz/Quiz";
import LessonList from "@/components/LessonList";
import { CourseDetails } from "@/types/Course";
import { getLessonsByCourseId } from "@/services/lessonsService";
import { Lesson } from "@/types/Lesson";

const PracticeToGoPage = ({
  courseDetails,
}: {
  courseDetails: CourseDetails;
}) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!courseDetails?.id) return;

      try {
        const lessons = await getLessonsByCourseId(courseDetails.id);
        setLessons(lessons);
      } catch (error) {
        console.error("Failed to fetch lessons", error);
      }
    };

    fetchLessons();
  }, [courseDetails]);

  const nextLesson = () => {
    completedLessons?.push(currentLessonIndex);
    setCurrentLessonIndex(currentLessonIndex + 1);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-96 gap-6">
      <Quiz
        currentLesson={lessons[currentLessonIndex]}
        nextLesson={nextLesson}
      />
      <LessonList
        lessons={lessons}
        currentLessonIndex={currentLessonIndex}
        compeletedLessons={completedLessons}
        setCurrentLesson={setCurrentLessonIndex}
      />
    </div>
  );
};

export default PracticeToGoPage;
