import React from "react";
import moment from "moment";
import { CalendarDate } from "@/types/Calendar";
import { CSSProperties } from "react";

const CustomWeekHeader: React.FC<CalendarDate> = ({ date }) => {
  const today = moment();
  const isToday = today.isSame(date, "day");

  const dateTextClasses = `text-sm font-normal ${isToday ? "text-black" : "text-gray-600"}`;

  const circleStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "24px",
    height: "24px",
    backgroundColor: "#ffe300",
    borderRadius: "50%",
    zIndex: -1,
  };

  return (
    <div className="text-center">
      <div className="text-md font-semibold">
        {moment(date).format("ddd").toUpperCase()}
      </div>
      <div className="relative inline-block">
        {isToday && <span style={circleStyle}></span>}
        <span
          className={dateTextClasses}
          style={{ zIndex: 2 } as CSSProperties}
        >
          {moment(date).format("D")}
        </span>
      </div>
    </div>
  );
};

export default CustomWeekHeader;
