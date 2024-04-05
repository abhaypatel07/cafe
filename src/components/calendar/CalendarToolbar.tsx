import React, { useState } from "react";
import moment from "moment-timezone";
import Image from "next/image";
import { View } from "react-big-calendar";
import { CustomToolbarProps, TimezoneOption } from "@/types/Calendar";
import CustomSelector from "./CustomSelector";

const generateTimezoneOptions = (): TimezoneOption[] => {
  const uniqueTimezones = new Set<TimezoneOption>();
  const now = moment();

  moment.tz.names().forEach((tz) => {
    const offset = now.clone().tz(tz).utcOffset();
    const isNegative = offset < 0;
    const absoluteOffset = Math.abs(offset);
    const hours = Math.floor(absoluteOffset / 60);
    const minutes = absoluteOffset % 60;
    const offsetFormatted = `${isNegative ? "-" : "+"}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const label = `(GMT${offsetFormatted}) ${tz}`;
    uniqueTimezones.add({ label, value: tz });
  });
  return Array.from(uniqueTimezones);
};

const CalendarToolbar: React.FC<CustomToolbarProps> = ({
  label,
  onNavigate,
  onView,
  views,
  onTimezoneChange,
  selectedTimezone,
  view,
}) => {
  const viewOptions = Array.isArray(views) ? views : Object.keys(views);
  const [timezone, setTimezone] = useState(selectedTimezone);

  const handleTimezoneChange = (value: string) => {
    setTimezone(value);
    onTimezoneChange(value);
  };

  const handleView = (value: View) => {
    onView(value);
  };
  const imageSize = 32;
  const timezoneOptions = generateTimezoneOptions();

  return (
    <div className="flex justify-between items-center py-2 bg-white w-full">
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/calendar-arrow.svg"
          alt="Previous"
          className="cursor-pointer h-[17px] w-6"
          onClick={() => onNavigate("PREV")}
          tabIndex={0}
          width={imageSize}
          height={imageSize}
          role="button"
          aria-label="Previous"
        />
        <span className="text-xl font-bold">{label}</span>
        <Image
          src="/icons/calendar-arrow.svg"
          alt="Next"
          className="cursor-pointer h-[17px] w-6 transform rotate-180"
          onClick={() => onNavigate("NEXT")}
          tabIndex={0}
          width={imageSize}
          height={imageSize}
          role="button"
          aria-label="Next"
        />
      </div>

      <div className="flex-grow"></div>
      <div className="max-w-[200px] w-full ml-4 relative">
        <CustomSelector
          options={timezoneOptions}
          onChange={handleTimezoneChange}
          value={timezone}
        />
      </div>
      <div className="max-w-[140px] w-full ml-4 relative">
        <CustomSelector
          options={viewOptions}
          onChange={handleView}
          value={view}
        />
      </div>
    </div>
  );
};

export default CalendarToolbar;
