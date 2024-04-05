import { User } from "./User";

export enum CourseColor {
  DarkGreen = "Dark Green",
  Orange = "Orange",
  Red = "Red",
  Blue = "Blue",
  Yellow = "Yellow",
  Lime = "Lime",
}

export interface DbCourseData {
  course_id: number;
  meta_key: string;
  meta_value: string;
}

export interface DbCourseDocument {
  course_id: number;
  [metaKey: string]: any;
}

export interface CourseDetails {
  id: string;
  color: CourseColor;
  level: string;
  schedule: string;
  totalLessons?: number;
  instructor: User;
  nextLesson?: string;
  completedLessons?: number;
  startDate?: string;
  endDate?: string;
  title?: string;
  classNote?: string;
  flashcards?: string[];
  isActive?: boolean;
}

export interface MasterclassCourseDetails {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export const CourseColorMap: { [key in CourseColor]?: string } = {
  [CourseColor.DarkGreen]: "#0F4C10",
  [CourseColor.Orange]: "#FDB022",
  [CourseColor.Red]: "#ff2404",
  [CourseColor.Blue]: "#0000FF",
  [CourseColor.Yellow]: "#FEDF89",
  [CourseColor.Lime]: "#85CA62",
};
