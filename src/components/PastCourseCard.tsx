import { useRouterManager } from "@/services/RouterManager";
import { CourseColorMap, CourseDetails } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";

const PastCourseCard = ({ course }: { course: CourseDetails }) => {
    const { color, instructor, schedule, endDate, title, id } = course;

    const courseColor = CourseColorMap[color]
    const dateString = new Date(parseInt(endDate || '') * 1000).toLocaleDateString("en-GB");
    const { PAST_COURSES_PATH } = useRouterManager();

    return (
      <Link 
        href={{
          pathname: `${PAST_COURSES_PATH}/${id}`
        }} 
        className="rounded-[8px] border"
        style={{ borderColor: courseColor }}
      >
        <div className="w-full h-3 rounded-t-[8px]" style={{ backgroundColor: courseColor }} />

        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image src="/icons/calendar-icon.svg" alt="Calendar Icon" width={24} height={24} />

            <h3 className="text-xl font-bold">{title}</h3>
          </div>

          <div className="flex gap-2 items-center">
            <Image quality={100} src={instructor.avatar || ''} alt="Calendar Icon" width={32} height={32} />

            <p className="text-base font-normal">W/ {instructor.name}</p>
          </div>

          <p className="text-base font-normal">{schedule}</p>
          
          <p className="text-sm font-normal">Finished at {dateString}</p>
        </div>
      </Link>
    );
}

export default PastCourseCard;