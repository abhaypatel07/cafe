import { User } from "@/types/User";
import Image from "next/image";

interface NeedHelpProps {
  setShow: (params: any) => void;
}

const NeedHelp: React.FC<NeedHelpProps> = ({ setShow }) => {
  return (
    <>
      <button
        id="need-help-button"
        data-popover-target="NeedHelpMenu"
        data-popover-trigger="click"
        type="button"
        className="bg-[#FFE300] p-2 rounded-full relative"
        onClick={() => {
          setShow(true);
        }}
      >
        <div className="flex gap-2 items-center">
          <Image
            src="/images/need-help-face.svg"
            alt="instructor"
            width={37}
            height={37}
            className="inline"
          />
          <p className="text-[#1D2939] font-medium"> Need Help?</p>
        </div>
        {/* <div className="absolute -right-0.5 -bottom-1">
          <Image
            src='/images/need-help-face.svg'
            alt="icon"
            width={23}
            height={23}
            className="inline"
          />
        </div> */}
      </button>
    </>
  );
};

export default NeedHelp;
