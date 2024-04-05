import { getUserDetails } from "@/services/usersService";
import {
    CourseColor,
    CourseDetails,
    DbCourseData,
    DbCourseDocument,
    MasterclassCourseDetails,
} from "@/types/Course";
import { HttpMethod } from "@/types/HttpMethod";
import { Student } from "@/types/Student";
import { User } from "@/types/User";
import { checkIfCourseIsPast } from "@/utils/course";
import customFetch from "@/utils/fetchUtils";

export const getMasterclasses = async (
  baseUrl: string = "",
): Promise<MasterclassCourseDetails[]> => {
  try {
    const response = await customFetch(`${baseUrl}/api/masterclasses`, {
      method: HttpMethod.GET,
    });
    const masterclasses = transformMasterclassCoursesDetails(
      await response.json(),
    );
    return masterclasses;
  } catch (error) {
    console.error("Error fetching course details: ", error);
    throw error;
  }
};

export const getCourseDetails = async (
  courseId: string,
  baseUrl: string = "",
): Promise<CourseDetails> => {
  try {
    const response = await customFetch(
      `${baseUrl}/api/courses?courseId=${courseId}`,
      {
        method: HttpMethod.GET,
      },
    );
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const jsonResponse = await response.json();
    const courseDocuments = createCourseDocuments(jsonResponse);
    return transformCourseDetails(courseDocuments[0]);
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

export const getCourseStudents = async (
  courseId: string,
  baseUrl: string = "",
): Promise<Student[]> => {
  try {
    const response = await customFetch(
      `${baseUrl}/api/courses/students?courseId=${courseId}`,
      {
        method: HttpMethod.GET,
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching getCourseStudents:", error);
    throw error;
  }
};

export const getCoursesByUser = async (
  userId: string,
  baseUrl: string = "",
): Promise<CourseDetails[]> => {
  try {
    const response: any = await customFetch(
      `${baseUrl}/api/courses?userId=${userId}`,
      {
        method: HttpMethod.GET,
      },
    );
    const jsonResponse = await response.json();
    return transformCoursesDetails(jsonResponse.result);
  } catch (error) {
    console.error("Error in getCoursesByUser", error);
    throw error;
  }
};

export const getPastCoursesOfUser = async (
  userId: string,
  baseUrl: string,
): Promise<CourseDetails[]> => {
  try {
    const courses = await getCoursesByUser(userId, baseUrl);
    const filteredPastCourses = courses
      .filter((course: CourseDetails) => checkIfCourseIsPast(course.endDate));
    
    // Removing duplicates
    const allInstructors: User[] = Array.from(new Set(filteredPastCourses.map((course: CourseDetails) => course.instructor)));
    const responseInstructors = await Promise.all(allInstructors.map(async (instructor) => getUserDetails(instructor.id || '', baseUrl)));

    return filteredPastCourses.map((course: CourseDetails): CourseDetails => {
      const instructor = responseInstructors.find((instructor: User) => instructor.id === course.instructor.id);
  
      if (!instructor) {
        throw new Error("Instructor not found");
      }

      return {
        ...course,
        instructor,
      };
    });
  } catch (error) {
    console.error("Error fetching getPastCoursesOfUser:", error);

    throw error;
  }
}

export const transformCourseDetails = (courseFromAPI: any): CourseDetails => {
  const courseDetails = {
    id: courseFromAPI?.course_id ?? null,
    color: (courseFromAPI?.level?.trim() as CourseColor) ?? CourseColor.Lime,
    level: courseFromAPI?.level ?? "no level",
    schedule: courseFromAPI?.description ?? "no description",
    totalLessons: courseFromAPI?.realnumlessons ?? 0,
    instructor: {
      id: courseFromAPI?.teachers ?? 0,
    },
    nextLesson: new Date(2025, 1, 1).toISOString(),
    completedLessons: 0,
    startDate: courseFromAPI?.semester_start_date,
    endDate: courseFromAPI?.semester_end_date,
    title: courseFromAPI?.title?.rendered,
    classNote: courseFromAPI?.class_note ?? '',
    flashcards: courseFromAPI?.flashcards?.split(',') ?? [],
  } as CourseDetails;

  courseDetails.isActive = isCurrentTimeBetween(
    courseDetails.startDate,
    courseDetails.endDate
  );
  return courseDetails;
};

function isCurrentTimeBetween(startEpoch?: string, endEpoch?: string): boolean {
  if (!startEpoch || !endEpoch) {
    return false;
  }

  const startDate = new Date(Number(startEpoch)*1000);
  const endDate = new Date(Number(endEpoch)*1000);
  const now = new Date();
  return now >= startDate && now <= endDate;
}

export const transformMasterclassCourseDetails = (
  courseFromAPI: any
): MasterclassCourseDetails => {
  return {
    title: courseFromAPI?.title.trim() ?? '',
    id: courseFromAPI?.course_id,
    link: courseFromAPI?.link ?? '',
    description: courseFromAPI?.excerpt ?? '',
    imageUrl: courseFromAPI?.course_cover_image_url ?? '',
  };
};

export const transformCoursesDetails = (
  coursesFromAPI: any[]
): CourseDetails[] => {
  // console.log(coursesFromAPI);
  const results = createCourseDocuments(coursesFromAPI);

  return results.map(transformCourseDetails);
};

export const transformMasterclassCoursesDetails = (
  coursesFromAPI: any[],
): MasterclassCourseDetails[] => {
  const results = createCourseDocuments(coursesFromAPI);

  const trasformedResults = results.map(transformMasterclassCourseDetails);
  return trasformedResults.sort((a, b) => {
    if (a.imageUrl && !b.imageUrl) {
      return -1;
    }
    if (b.imageUrl && !a.imageUrl) {
      return 1;
    }
    return 0;
  });
};

function createCourseDocuments(data: DbCourseData[]): DbCourseDocument[] {
  const courseDocumentsMap: { [courseId: number]: DbCourseDocument } = {};

  data.forEach(({ course_id, meta_key, meta_value }) => {
    // Initialize the document for this course_id if it doesn't exist

    if (!courseDocumentsMap[course_id]) {
      courseDocumentsMap[course_id] = { course_id };
    }
    // Add or update the meta_key and meta_value for this course_id
    courseDocumentsMap[course_id][meta_key] = meta_value;
  });

  // Convert the map to an array of documents
  const courseDocumentsArray: DbCourseDocument[] =
    Object.values(courseDocumentsMap);

  return courseDocumentsArray;
}
