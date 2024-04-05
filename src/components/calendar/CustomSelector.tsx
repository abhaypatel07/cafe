import Image from "next/image";
import { useEffect, useState } from "react";

const CustomSelector = ({ options, onChange, value }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(value ?? getOption(options));
  }, [options, value]);

  const getOption = (_options: any[]) =>
    typeof _options[0] === "string" ? _options[0] : _options[0]?.label ?? "";

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
    onChange(option);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black font-normal text-sm py-2 px-3 rounded w-full border border-[#D0D5DD] flex justify-between items-center"
      >
        <span className="truncate pr-1 capitalize">{selectedOption}</span>
        <span
          className={`${isOpen === true && "rotate-180"} transition-all duration-300 ease-in-out`}
        >
          <Image src="/images/arrow_down.svg" width={16} height={16} alt="" />
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-10 shadow-md left-0 w-full max-h-[200px] overflow-auto">
          <div className="relative bg-white rounded-b-lg shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] z-40 pb-1">
            <div>
              {options.map((option: any, index: number) => (
                <button
                  key={index} // Use index as the key if options is an array of strings
                  onClick={() =>
                    handleOptionClick(
                      typeof option === "object" ? option.label : option,
                    )
                  }
                  className={`text-sm capitalize w-full text-[#101828] text-start font-normal hover:bg-[#F9FAFB] ${(typeof option === "object" ? option.label : option) === selectedOption ? "bg-[#F9FAFB]" : "bg-white"} py-1 px-2.5 rounded flex justify-between items-center`}
                >
                  <span>
                    {typeof option === "object" ? option.label : option}
                  </span>
                  <span
                    className={`${(typeof option === "object" ? option.label : option) === selectedOption ? "block" : "hidden"}`}
                  >
                    <Image
                      src="/images/checked.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelector;
