import Image from "next/image";
import { MasterclassCard } from "./MasterclassCard";
import { MasterclassCourseDetails } from "@/types/Course";

const ExploreMasterclasses: React.FC<{
  masterclasses: MasterclassCourseDetails[];
}> = ({ masterclasses }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-black1 text-2xl font-bold leading-normal">
          Explore Our Masterclasses
        </p>
        <div role="button" className="flex items-center cursor-pointer">
          See All
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow right"
            width={24}
            height={24}
            className="inline ml-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {masterclasses.slice(0, 3).map((masterclass) => (
          <MasterclassCard key={masterclass.id} {...masterclass} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMasterclasses;
