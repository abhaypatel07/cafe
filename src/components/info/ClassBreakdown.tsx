import { useEffect, useState, useRef } from "react";
import { getLessonsByCourseId } from "@/services/lessonsService";
import { Lesson } from "@/types/Lesson";
import Image from "next/image";
import LessonEntry from "./LessonEntry";
import "add-to-calendar-button";

const ClassBreakdown = ({ courseId }: { courseId: string }) => {
  const [classLessons, setClassLessons] = useState<Lesson[]>([]);
  const calendarButtonRef = useRef(null); // Using ref to access the custom element

  useEffect(() => {
    const fetchLessons = async () => {
      if (!courseId) return;

      try {
        const lessons = await getLessonsByCourseId(courseId);
        setClassLessons(lessons);
        // No need to set converted lessons here, we will convert them just before rendering the button
      } catch (error) {
        console.error("Failed to fetch lessons", error);
      }
    };

    fetchLessons();
  }, [courseId]); // Removed convertedLessons from dependencies to avoid infinite loop

  // Convert lessons when needed without storing them in state
  const convertedLessons = classLessons.map((lesson) => {
    const startDate = new Date(lesson.date);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add one hour

    const formatDate = (date: Date) =>
      date.toISOString().split("T")[0].replace(/-/g, "");
    const formatTime = (date: Date) =>
      `${date.getHours().toString().padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;

    return {
      name: lesson.title,
      description: lesson.title,
      startDate: formatDate(startDate),
      startTime: formatTime(startDate),
      endDate: formatDate(endDate),
      endTime: formatTime(endDate),
    };
  });

  // Setting the dates property on the add-to-calendar-button when it's mounted/updated
  useEffect(() => {
    if (calendarButtonRef.current) {
      (calendarButtonRef.current as HTMLElement).setAttribute(
        "dates",
        JSON.stringify(convertedLessons),
      );
    }
  }, [convertedLessons]); // This effect runs when convertedLessons changes

  return (
    <div className="shadow-custom2 p-3 ">
      <div className="flex justify-between items-center p-3 mr-3">
        <div className="flex gap-3 items-center">
          <Image
            src="icons/material.svg"
            alt="student list"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold leading-normal">
            Class Breakdown
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {classLessons.map((lesson) => (
          <div
            className="flex items-center gap-3 p-6 pl-3 w-60"
            key={lesson.lesson_number}
          >
            <LessonEntry
              classNumber={lesson.lesson_number}
              lessonDate={lesson.date}
            />
          </div>
        ))}
      </div>

      {/* <add-to-calendar-button
        timeZone="Asia/Jerusalem"
        location="World Wide Web"
        options="'Apple','Google','iCal','Outlook.com','Yahoo'"
        lightMode="bodyScheme"
      ></add-to-calendar-button> */}
    </div>
  );
};

export default ClassBreakdown;
