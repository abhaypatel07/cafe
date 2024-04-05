import React from "react";

interface SupportCardProps {
  text: string;
  image: string;
  heading: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ image, heading, text }) => {
  return (
    <>
      <div className="sm:w-96 !h-72 rounded overflow-hidden shadow-lg">
        <img className="w-full !h-52" src={image} alt="Support Image" />

        <div className="px-6 py-4 !h-20">
          <div className="font-PloniML-v2AAA text-lg font-bold leading-6 text-left">
            {heading}
          </div>
          <p className="font-PloniML-v2AAA text-base font-normal leading-5 text-left text-gray-600">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportCard;
