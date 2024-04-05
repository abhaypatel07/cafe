import Image from "next/image";
import ReactDOM from "react-dom";

interface ModalData {
  level_icon: string;
  dark_green_icon: string;
  lime_icon: string;
  vedio_icon: string;
}

const modal_data: ModalData = {
  level_icon: "/images/level_icon.svg",
  dark_green_icon: "/images/dark_green_icon.svg",
  lime_icon: "/images/lime_icon.svg",
  vedio_icon: "/images/vedio_icon.svg",
};

const CalendarEventHover: React.FC<any> = ({
  event,
  position,
  onMouseEnterPopup,
}) => {
  const portalElement = document.getElementById("popup-root");
  if (!portalElement)
    throw new Error("The element #popup-root was not found in the document.");

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 1000,
      }}
      onMouseEnter={onMouseEnterPopup}
      className="bg-white border border-gray-300 shadow-lg p-4 rounded-lg max-w-[200px] w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold">{event.title}</h2>
      </div>
      <div className="mt-2">
        <p className="text-xs text-[#667085]">11-12 AM</p>
        <p className="text-xs text-[#667085] pt-2">Levels:</p>
        <div className="flex gap-2 items-center">
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
            <Image src={modal_data?.lime_icon} width={16} height={16} alt="" />
            <p>Lime</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <button className="bg-black rounded-2xl py-2.5 px-6 text-white text-sm font-medium w-full flex justify-center items-center gap-2">
          <Image src={modal_data?.vedio_icon} width={24} height={24} alt="" />
          <span>Join Now</span>
        </button>
      </div>
    </div>,

    portalElement,
  );
};
export default CalendarEventHover;
