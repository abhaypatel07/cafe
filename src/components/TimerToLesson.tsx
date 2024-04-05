import React, { useState, useEffect } from "react";

const TimerToLesson = ({
  targetDate,
  className = "",
}: {
  targetDate: Date;
  className?: string;
}) => {
  const calculateTimeLeft = () => {
    const difference = Number(targetDate) - Number(new Date());

    const timeLeft = {
      hours:
        difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };

    return timeLeft;
  };

  const formatTime = (time: number) => {
    return String(time).padStart(2, "0");
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // });

  return (
    <div className={`flex justify-center items-center space-x-1 ${className}`}>
      {/* <span className="bg-primary p-2 rounded">
        {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} :{" "}
        {formatTime(timeLeft.seconds)}
      </span> */}
    </div>
  );
};

export default TimerToLesson;
