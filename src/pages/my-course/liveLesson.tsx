import TimerToLesson from "@/components/TimerToLesson";
import { CourseDetails } from "@/types/Course";
import dynamic from "next/dynamic";

const ZoomMeetingWithNoSSR = dynamic(() => import("@/components/ZoomMeeting"), {
  ssr: false,
});

const LiveLessonsPage = ({
  courseDetails,
}: {
  courseDetails: CourseDetails;
}) => {
  const targetDate = courseDetails?.nextLesson
    ? new Date(courseDetails.nextLesson)
    : new Date();

  return (
    <div>
      <div className="flex justify-center text-5xl font-normal text-gray2 leading-none pb-4 pt-12">
        Next Lesson
      </div>
      <TimerToLesson
        targetDate={targetDate}
        className="text-6xl font-bold text-black2 leading-none"
      ></TimerToLesson>
      <ZoomMeetingWithNoSSR />
    </div>
  );
};

export default LiveLessonsPage;
