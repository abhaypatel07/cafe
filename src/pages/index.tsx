import React, { useEffect, useState } from "react";
import MyCourse from "../components/MyCourseBox";
import Calendar from "../components/calendar/Calendar";
import {
  CourseColor,
  CourseDetails,
  MasterclassCourseDetails,
} from "@/types/Course";
import UpcomingEventCard from "@/components/UpcomingEvent";
import { CCEvent } from "@/types/Event";
import ExploreMasterclasses from "@/components/ExploreMasterclasses";
import ErrorPage from "@/components/Error";
import {
  getCourseDetails,
  getCoursesByUser,
  getMasterclasses,
} from "@/services/courseService";
import { getUserDetails } from "@/services/usersService";
import { User } from "@/types/User";
import { getBaseUrl } from "@/utils/utils";
import { useAuth } from "@/context/authContext";

// export const getServerSideProps = async (context: any) => {
//   try {
//     const userId = "363";
//     const baseUrl = getBaseUrl(context);

//     const [user, courses, masterclasses] = await Promise.all([
//       getUserDetails(userId, baseUrl),
//       getCoursesByUser(userId, baseUrl),
//       getMasterclasses(baseUrl),
//     ]);
//     // const user={name:"John Doe"};
//     // const courses = [
//     //   {
//     //     id: "1",
//     //     name: "Course 1",
//     //     color: CourseColor.DarkGreen,
//     //     instructor: { name: "Instructor 1" },
//     //   },
//     // ];
//     // const masterclasses = await getMasterclasses(baseUrl);
//     return {
//       props: {
//         user,
//         courses,
//         masterclasses,
//       },
//     };
//   } catch (error: any) {
//     return {
//       props: {
//         error: error.message,
//       },
//     };
//   }
// };

const MyPage = () => {
  const { user, isAuthenticated } = useAuth();
  const [courses, setCourses] = useState<CourseDetails[]>([]);
  const [masterclasses, setMasterclasses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await getCoursesByUser(user?.id ?? "");
        setCourses(courses as any);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };
    const fetchMasterClasses = async () => {
      try {
        const masterclasses = await getMasterclasses();
        setMasterclasses(masterclasses as any);
      } catch (error) {
        console.error("Failed to fetch masterclasses", error);
      }
    };
    if (isAuthenticated && user) {
      fetchCourses();
      fetchMasterClasses();
    }
  }, [user, isAuthenticated]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const name = user?.name;
  const myCourse: any = courses.filter(course => course.isActive)?.[0] || courses?.[0];
  if(myCourse){
    localStorage.setItem('course', JSON.stringify(myCourse));
  }

  const upcomingEvent: CCEvent = {
    name: "Global Community Meeting",
    eventDate: new Date("2023-02-23T11:00:00"),
  };

  const notPurchasedMasterClasses = masterclasses?.filter(
    (masterclass: MasterclassCourseDetails) =>
      !courses.some((course: CourseDetails) => course.id === masterclass.id),
  );
  return (
    <div className="container mx-auto pt-6 pb-8 px-4">
      <div id="popup-root"></div>
      <h1 className="text-black md:4xl text-5xl font-bold leading-none pb-6">
        {getGreeting()}, {name}
      </h1>

      <div className="grid md:grid-cols-2 gap-x-6">
        <div className="">
          <div className="text-black1 text-2xl font-bold leading-normal mb-2">
            My Course
          </div>
          <MyCourse {...myCourse} />
          <div className="mt-6">
            <UpcomingEventCard {...upcomingEvent} />
          </div>
        </div>
        <div className="md:mb-0 px-3 py-4 shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_0px_24px_0px_rgba(16,24,40,0.08)]">
          <Calendar />
        </div>
      </div>
      <div className="w-full pt-10">
        <ExploreMasterclasses masterclasses={notPurchasedMasterClasses} />
      </div>
    </div>
  );
};

export default MyPage;
