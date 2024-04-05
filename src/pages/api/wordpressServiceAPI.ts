import { HttpMethod } from "@/types/HttpMethod";

const BASE_URL = process.env.WORDPRESS_BASE_URL;

const logError = (message: string, error: any) => {
  console.error(message, error);
};

const getUsername = (): string => {
  return process.env.WORDPRESS_USERNAME || "";
};

const getPassword = (): string => {
  return process.env.WORDPRESS_PASSWORD || "";
};

export const fetchApi = async (
  endpoint: string,
  httpMethod: HttpMethod,
  requestBody?: any,
) => {
  let response;
  try {
    const url = `${BASE_URL}${endpoint}`;
    const credentials = Buffer.from(
      `${getUsername()}:${getPassword()}`,
    ).toString("base64");

    const headers: Record<string, string> = {
      Authorization: `Basic ${credentials}`,
      Accept: "application/json",
    };

    let fetchOptions: RequestInit = {
      method: httpMethod,
      headers,
    };

    if (httpMethod === HttpMethod.POST && requestBody) {
      headers["Content-Type"] = "application/json";
      fetchOptions.body = JSON.stringify(requestBody);
    }
    response = await fetch(url, fetchOptions);

    if (!response.ok) {
      logError(
        `API request failed with status ${response.status}`,
        await response.text(),
      );
      throw new Error(
        `API request failed with status ${response.status}: ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error: any) {
    logError("Error making API request to " + endpoint, error);
    throw new Error(
      `Error making API request to ${endpoint}: ${error.message}`,
    );
  }
};
