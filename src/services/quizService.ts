import { HttpMethod } from "@/types/HttpMethod";
import { Quiz } from "@/types/Quiz";
import customFetch from "@/utils/fetchUtils";

export const getQuizByQuizId = async (quizId: string): Promise<Quiz> => {
  try {
    const response = await customFetch(`/api/quizes/${quizId}`, {
      method: HttpMethod.GET,
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching getQuizByQuizId:", error);
    throw error;
  }
};
