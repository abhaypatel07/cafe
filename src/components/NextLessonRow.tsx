import React from "react";
import Image from "next/image";
import { CourseDetails } from "@/types/Course";
import { UserIcon } from "@heroicons/react/24/outline";
import TimerToLesson from "./TimerToLesson";

const NextLessonRow = (props: CourseDetails) => {
  return (
    <div className="flex items-center mb-4 space-x-4">
      {props.instructor?.name ? (
        <Image
          src={props.instructor?.avatar || "/icons/user.svg"}
          alt="Instructor"
          width={53}
          height={53}
          className="rounded-full"
        />
      ) : (
        <UserIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
      )}
      <div>
        <div className="text-base font-bold leading-normal">{`W/ ${props?.instructor?.name || "TBD"}`}</div>
      </div>
      <div className="flex-1 text-right ">
        <span className="mr-2 text-gray2">Next lesson: </span>
        <div className="bg-primary px-4 rounded-md inline-block">
          <TimerToLesson
            targetDate={
              props?.nextLesson ? new Date(props.nextLesson) : new Date()
            }
          ></TimerToLesson>
        </div>
      </div>
    </div>
  );
};

export default NextLessonRow;
