import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  logo: string;
  text: string;
  link: string;
  setShow: (params: boolean) => void;
}

const MenuItems: React.FC<MenuItemProps> = ({ logo, text, setShow, link }) => {
  return (
    <>
      <Link href={link}>
        <div
          onClick={() => {
            setShow(false);
          }}
          className="w-full md:w-96 md:min-h-16 md:mb-6 mb-3 shadow-md rounded-lg border-t-[1px] border-2 border-gray-300"
        >
          <div className="flex items-center py-4 px-4 gap-4">
            <Image src={logo} alt="Logo" width={32} height={32} />
            <span className="font-PloniML-v2AAA font-medium md:text-[24] leading-35.27 text-left">
              {text}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MenuItems;
