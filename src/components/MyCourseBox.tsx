import React from "react";
import Image from "next/image";
import { CourseColorMap, CourseDetails } from "@/types/Course";
import NextLessonRow from "./NextLessonRow";
import ProgressBar from "./ProgressBar";
import { useRouterManager } from "@/services/RouterManager";

const CourseCard: React.FC<CourseDetails> = (props: CourseDetails) => {
  const progress =
    ((props.completedLessons ?? 0) / (props.totalLessons ?? 1)) * 100;
  const routerManager = useRouterManager();

  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden border`}
      style={{
        borderColor: CourseColorMap[props.level as keyof typeof CourseColorMap],
      }}
    >
      <div
        className={`flex items-center p-1.5 gap-2`}
        style={{
          backgroundColor:
            CourseColorMap[props.level as keyof typeof CourseColorMap],
        }}
      ></div>
      <div className="flex items-center px-4 gap-x-2 py-4">
        <div>
          <Image
            src="/icons/calendar-icon.svg"
            alt="Class-Level"
            width={24}
            height={24}
            className="rounded-full "
          />
        </div>
        <div className="text-xl font-bold leading-normal">{props.level}</div>
      </div>
      <div className="px-4 pb-[22px] pt-0">
        <NextLessonRow {...props} />
        <div className="flex justify-between items-center">
          <div className="text-base font-normal leading-normal text-gray-700 whitespace-nowrap mr-20">
            {props?.schedule}
          </div>
          <ProgressBar
            completed={props?.completedLessons ?? 0}
            total={props?.totalLessons ?? 0}
          />
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex gap-4 w-full">
            <div
              className="flex-grow flex items-center justify-center border border-black rounded-2xl py-[7px] px-2 bg-white text-black cursor-pointer hover:bg-gray-100"
              role="button"
              onClick={() =>
                routerManager.goToMyCourseTab(
                  routerManager.MY_COURSE_RECORDING_TAB,
                )
              }
            >
              <Image
                src="/icons/recording.svg"
                alt="recording"
                width={24}
                height={24}
                className="inline mr-2"
              />
              <span className="hidden sm:inline text-sm">Recordings</span>
            </div>

            <div
              className="flex-grow flex items-center justify-center border border-black py-1 rounded-2xl px-2 bg-white text-black cursor-pointer hover:bg-gray-100"
              role="button"
              onClick={() =>
                routerManager.goToMyCourseTab(
                  routerManager.MY_COURSE_FLASHCARDS_TAB,
                )
              }
            >
              <Image
                src="/icons/flashcards.svg"
                alt="flashcards"
                width={24}
                height={24}
                className="inline mr-2"
              />
              <span className="hidden sm:inline text-sm">Flashcards</span>
            </div>
            <div
              className="flex-grow flex items-center justify-center border border-black rounded-2xl py-1 px-2 bg-white text-black cursor-pointer hover:bg-gray-100"
              role="button"
              onClick={() =>
                routerManager.goToMyCourseTab(
                  routerManager.MY_COURSE_PRACTICE_TAB,
                )
              }
            >
              <Image
                src="/icons/practice.svg"
                alt="Practice"
                width={24}
                height={24}
                className="inline mr-2"
              />
              <div className="hidden sm:inline text-sm ">Practice to go</div>
            </div>
            <div
              className="flex-grow flex items-center justify-center border border-black rounded-2xl px-2 bg-black text-white cursor-pointer"
              role="button"
              onClick={() => routerManager.goTo(routerManager.MY_COURSE_PATH)}
            >
              <span className="hidden sm:inline text-sm">Go to class</span>
              <Image
                src="/icons/arrow-right-black.svg"
                alt="arrow-right-black"
                width={24}
                height={24}
                className="inline ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
