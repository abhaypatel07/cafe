import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Lesson } from "@/types/Lesson";

export const RecordCard = ({ lesson }: { lesson: Lesson }) => {
  return (
    <Card className="p-0 mr-8 mb-8 rounded-xl shadow-custom2 overflow-hidden">
      <CardHeader className="p-0 w-full">
        <div className="w-full">
          <Image
            alt="lesson thumbnail"
            src="/images/masterclass-img1.svg"
            width="100%"
            height="auto"
            style={{
              objectFit: "cover",
            }}
            className="w-full h-auto opacity-100"
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible my-2">
        <div>
          <div className="text-xl font-bold">
            Lesson {lesson?.lesson_number}
          </div>
          <div className="text-xs font-normal text-gray-500">
            {new Date(lesson?.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
