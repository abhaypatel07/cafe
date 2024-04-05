import { HttpMethod } from "@/types/HttpMethod";
import { Lesson } from "@/types/Lesson";
import customFetch from "@/utils/fetchUtils";

export const getLessonsByCourseId = async (
  courseId: string,
): Promise<Lesson[]> => {
  try {
    const response = await customFetch(`/api/lessons?courseId=${courseId}`, {
      method: HttpMethod.GET,
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching getLessonsByCourseId:", error);
    throw error;
  }
};
