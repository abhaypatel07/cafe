import { HttpMethod } from "@/types/HttpMethod";

export const loginUser = async (
  userName: string,
  password: string,
): Promise<any> => {
  try {
    const requestBody = JSON.stringify({ userName, password });
    const response = await fetch(`/api/auth/login`, {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching course details: ", error);
    throw error;
  }
};
