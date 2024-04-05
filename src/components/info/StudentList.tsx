import { getCourseStudents } from "@/services/courseService";
import { Student } from "@/types/Student";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const StudentList = ({ courseId }: { courseId: string }) => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!courseId) return;

      try {
        const students = await getCourseStudents(courseId);
        setStudents(students);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

    fetchStudents();
  }, [courseId]);

  return (
    <div className="shadow-custom2 p-3 ">
      <div className="flex gap-3 items-center p-3 mr-3">
        <Image
          src="icons/material.svg"
          alt="student list"
          width={32}
          height={32}
        />
        <span className="text-xl font-bold leading-normal">Student List</span>
      </div>
      <div className="flex flex-wrap">
        {students.map((student) => (
          <div
            className="flex  items-center gap-3 p-6 pl-3 w-60"
            key={student.id}
          >
            {student.avatar ? (
              <Image
                src={student.avatar ?? ""}
                alt={student.name as string}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <UserIcon
                className="h-10 w-10 text-gray-400"
                aria-hidden="true"
              />
            )}
            <div className="text-base font-normal leading-normal text-gray-700 whitespace-nowrap">
              {student.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
