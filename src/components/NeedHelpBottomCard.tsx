import React from "react";
import Image from "next/image";
import { contactService } from "@/services/contactService";
import Link from "next/link";

interface NeedHelpBottomCardProps {
  heading: string;
  logo: string;
  text: string;
  bottomText?: string;
  bottomLinkText?: string;
}

const NeedHelpBottomCard: React.FC<NeedHelpBottomCardProps> = ({
  heading,
  logo,
  text,
  bottomText,
  bottomLinkText,
}) => {
  return (
    <div className="flex flex-col w-52 sm:w-full md:w-80 h-full md:h-60 px-4 py-4 gap-12 border rounded-lg justify-between bg-white overflow-auto">
      <div className="flex flex-col gap-4">
        <Image src={logo} height={32} width={32} alt={heading} />
        <p className="font-PloniML-v2AAA text-24 font-bold leading-35.27 text-left">
          {heading}
        </p>
        <p className="font-PloniML-v2AAA text-base font-normal leading-29.4 text-left text-wrap">
          {text?.startsWith("US") ? (
            <>
              US {contactService().US_PHONE_NUMBER} <br /> IL{" "}
              {contactService().ISRAEL_PHONE_NUMBER}
            </>
          ) : (
            text
          )}
        </p>
      </div>
      {bottomText && bottomLinkText && (
        <div className="font-PloniML-v2AAA text-base font-bold leading-7 text-left">
          <Link href={bottomLinkText}>{bottomText}</Link>
        </div>
      )}
    </div>
  );
};

export default NeedHelpBottomCard;
