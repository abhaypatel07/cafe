import ClassBreakdown from "@/components/info/ClassBreakdown";
import StudentList from "@/components/info/StudentList";
import { CourseDetails } from "@/types/Course";

const InfoPage = ({ courseDetails }: { courseDetails: CourseDetails }) => {
  return (
    <div>
      <div className="mb-8">
        <StudentList courseId={courseDetails?.id} />
      </div>
      <ClassBreakdown courseId={courseDetails?.id} />
    </div>
  );
};

export default InfoPage;
