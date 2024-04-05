import { HttpMethod } from "@/types/HttpMethod";
import customFetch from "@/utils/fetchUtils";

export const getUserDetails = async (userId: string, baseUrl: string = "") => {
  try {
    const response = await customFetch(`${baseUrl}/api/users/${userId}`, {
      method: HttpMethod.GET,
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const getCountries = async () => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`, {
      method: HttpMethod.GET,
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const saveUserDetails = async (
  userId: string,
  baseUrl: string = "",
  userData: any,
) => {
  try {
    const response = await fetch(`${baseUrl}/api/users/add/${userId}`, {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
export const saveNewPassword = async (
  userId: string,
  baseUrl: string = "",
  password: any,
) => {
  try {
    const response = await fetch(`${baseUrl}/api/changepassword/${userId}`, {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(password),
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
