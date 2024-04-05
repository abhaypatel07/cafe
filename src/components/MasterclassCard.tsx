import { MasterclassCourseDetails } from "@/types/Course";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const MasterclassCard: React.FC<MasterclassCourseDetails> = (
  masterclass,
) => {
  return (
    <Card className="relative w-full h-64 bg-white rounded-lg shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_0px_24px_0px_rgba(16,24,40,0.08)] hover:shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2/3 z-0">
        <Image
          src={masterclass?.imageUrl}
          alt="masterclass"
          fill={true}
          priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 p-4 bg-white">
        <p className="text-lg text-black font-bold">
          {masterclass.title ?? "Untitled Masterclass"}
        </p>
        <p className="text-sm font-normal text-gray-400">
          {masterclass.description}
        </p>
      </div>
    </Card>
  );
};
