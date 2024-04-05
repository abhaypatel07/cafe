import PastCourseCard from "@/components/PastCourseCard";
import { USER_ID_KEY } from "@/context/authContext";
import { getPastCoursesOfUser } from "@/services/courseService";
import { CourseDetails } from "@/types/Course";
import { getBaseUrl } from "@/utils/utils";
import Image from "next/image";

export const getServerSideProps = async (context: any) => {
  try {
    const userId = localStorage.getItem(USER_ID_KEY) || ''

    const baseUrl = getBaseUrl(context);
    const pastCourses = await getPastCoursesOfUser(userId, baseUrl);

    return {
      props: {
        pastCourses,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const PastCoursesPage = ({ 
  pastCourses, 
  error 
} : { 
  pastCourses: CourseDetails[], 
  error: any 
}) => {
  return (
    <div className="px-10 xl:px-[100px] pt-6 flex-1 flex flex-col">
      <h1 className="text-5xl font-bold mb-10">Past Courses</h1>

      {pastCourses?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pastCourses?.map((course) => <PastCourseCard course={course} key={course.id} />)}
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center flex-1" 
          style={{ backgroundImage: "url('/images/past_courses_bg.png')" }}
        >
           <Image src="/icons/globe.svg" alt="Calendar Icon" width={211} height={247} />

           <p>No Past courses yet</p>
        </div>
      )}
    </div>
  );
};

export default PastCoursesPage;
