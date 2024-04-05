import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToCamelCase = (obj: any) => {
  const convertedObj: { [key: string]: any } = {};
  for (const key in obj) {
    const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    convertedObj[camelCaseKey] = obj[key];
  }
  return convertedObj;
};
