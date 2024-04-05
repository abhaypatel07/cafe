import React, { useEffect, useState } from "react";
import { CalendarEventPopupProps } from "@/types/Calendar";
import Image from "next/image";

interface ModalData {
  close_modal_icon: string;
  clock_icon: string;
  name: string;
  first_paragraph: string;
  second_paragraph: string;
  time: string;
  button_name: string;
  profile_image: string;
  citizen_circle_footer_image: string;
  level_icon: string;
  dark_green_icon: string;
  lime_icon: string;
}

const modal_data: ModalData = {
  close_modal_icon: "/images/close_modal.svg",
  clock_icon: "/images/clock.svg",
  name: "W/ Aviad Duvdevany",
  first_paragraph: `Our community is rich with talent and knowledge, and Citizen Circle provides an excellent platform to share and amplify it. This is a unique opportunity to contribute to the collective learning experience and connect with fellow community members that you usually don’t get to meet! 
  This time, we invite you to join us for a NIA Movement Class - a half-hour movement experience in the comfort of your home, led by Citizen Café student Michele Kaye! All you need is a small space and the willingness to move to the music and enjoy yourself. This somatic movement experience reduces stress and is often referred to as Movement Medicine. All movement abilities are welcome, as everyone moves according to their own capabilities. Even seated movement works!`,
  second_paragraph: `Location: On Zoom!
  Joining the class is free of charge, but pre-registration is required.A Zoom link will be emailed to the participants on the day of the event.The class is exclusive to Citizen Café community members.`,
  time: "03-04:00 PM",
  button_name: "Reserve a Spot",
  profile_image: "/images/aviad.svg",
  level_icon: "/images/level_icon.svg",
  dark_green_icon: "/images/dark_green_icon.svg",
  lime_icon: "/images/lime_icon.svg",
  citizen_circle_footer_image: "/images/calendar_event_popup_image.jpg",
};

const CalendarEventPopup: React.FC<CalendarEventPopupProps> = ({
  event,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"} flex justify-center items-center`}
      style={{ transition: "opacity 200ms", zIndex: 999 }}
      onClick={handleClose}
    >
      <div
        className={`bg-white py-6 px-8 rounded-lg shadow-lg w-full max-h-[677px] h-[calc(100vh-20px)] overflow-auto max-w-[643px] transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 50ms", zIndex: 999 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <h2 className="text-2xl text-[#344054] font-bold">{event.title}</h2>
          <button onClick={handleClose} className="text-lg">
            <Image
              src={modal_data?.close_modal_icon}
              width={16}
              height={16}
              alt=""
            />
          </button>
        </div>

        <div className="flex gap-2 items-center pt-4">
          <div>
            <Image src={modal_data?.clock_icon} width={24} height={24} alt="" />
          </div>
          <p>{modal_data?.time}</p>
        </div>
        <p className="text-xs text-[#667085] my-4 leading-normal font-normal">
          {modal_data?.first_paragraph}
        </p>
        <p className="text-xs text-[#667085] mb-4 leading-normal font-normal">
          {modal_data?.second_paragraph}
        </p>
        <div className="flex gap-1.5 items-center">
          <div>
            <Image
              src={modal_data?.profile_image}
              width={26}
              height={26}
              alt=""
            />
          </div>
          <p>{modal_data?.name}</p>
        </div>

        <div>
          <div className="flex gap-2 items-center mt-4">
            <div>
              <Image
                src={modal_data?.level_icon}
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src={modal_data?.dark_green_icon}
                width={16}
                height={16}
                alt=""
              />
              <p>Dark Green</p>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src={modal_data?.lime_icon}
                width={16}
                height={16}
                alt=""
              />
              <p>Lime</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-black rounded-2xl py-2.5 px-6 text-white text-sm font-medium">
            {modal_data?.button_name}
          </button>
        </div>
        <div className="mt-4">
          <Image
            src={modal_data?.citizen_circle_footer_image}
            width={579}
            height={202}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarEventPopup;
