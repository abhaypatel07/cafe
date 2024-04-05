import { Card, Button } from "@nextui-org/react";
import Image from "next/image";
import { CCEvent } from "@/types/Event";
import { formatDate } from "@/utils/utils";

const UpcomingEventCard: React.FC<CCEvent> = (event: CCEvent) => {
  const { name, eventDate } = event;
  return (
    <Card className="flex flex-col md:flex-row items-center bg-white1 rounded-lg shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),_0px_0px_24px_0px_rgba(16,24,40,0.08)] overflow-hidden">
      <div className="md:max-w-[247px] w-full p-4 md:border-r md:border-gray-200">
        <div className="pt-5">
          <Image
            src="/images/calender-purple.svg"
            alt="calender-purple"
            width={69}
            height={56}
          />
        </div>
        <h3 className="text-2xl font-bold mb-2 pt-2">Upcoming Event</h3>
        <p className="text-black font-normal">{name}</p>
        <p className="text-gray2 text-xs mb-2 pt-2 font-normal">
          {formatDate(eventDate)}
        </p>
        <div className="text-sm" role="button">
          See More Details
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
            className="text-black inline ml-2"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <Image
              src="/images/citizen-circle.svg"
              alt="Citizen-circle"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UpcomingEventCard;
