import { RecordCard } from "@/components/RecordCard";
import { Lesson } from "@/types/Lesson";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CourseDetails } from "@/types/Course";
import { getLessonsByCourseId } from "@/services/lessonsService";

const RecordingPage = ({ courseDetails }: { courseDetails: CourseDetails }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

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

  return (
    <div>
      <div className="flex items-center space-x-2 mb-2">
        <Image src="/icons/info-icon.svg" alt="info" width={24} height={24} />
        <span className="text-sm font-normal leading-normal not-italic">
          Please notice: Lesson recording is available for 6 weeks after the end
          of the semester
        </span>
      </div>
      <div className="flex flex-wrap">
        {lessons.map((lesson, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3">
            <RecordCard lesson={lesson} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordingPage;
