import React, { useCallback, useEffect, useRef } from "react";
import MenuItems from "./MenuItems";
import Image from "next/image";
import { User } from "@/types/User";
import { useRouterManager } from "@/services/RouterManager";
import { contactService } from "@/services/contactService";

interface NeedHelpMenuProps {
  show: Boolean;
  setShow: (params: boolean) => void;
  user: User;
  onClickOutside: () => void;
}

const NeedHelpMenu: React.FC<NeedHelpMenuProps> = ({
  show,
  setShow,
  onClickOutside,
  user,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const routerManager = useRouterManager();

  const whatsAppHelpMessage = "Hey, I need help";

  const NeedHelpMenuItems = [
    {
      logo: "/icons/whatsapp.svg",
      text: "Chat with us via WhatsApp",
      link: `https://web.whatsapp.com/send?phone=+97250973697397&text=${whatsAppHelpMessage}&app-absent=0`,
    },
    {
      logo: "/icons/mail.svg",
      text: "Send us an Email",
      link: "mailto:support@citizencafe.com",
    },
    {
      logo: "/icons/help.svg",
      text: "Check out our technical support for class essentials",
      link: routerManager.NEED_HELP_PAGE_PATH,
    },
  ];

  const handleClickOutside = useCallback(
    (event: any) => {
      if (menuRef.current && !menuRef.current?.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    },
    [onClickOutside],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside, handleClickOutside]);

  return (
    <div
      ref={menuRef}
      id="need-help-menu"
      hidden={!show}
      className="sm:w-80 md:w-[467px] fixed right-1 bottom-20 sm:right-14 sm:bottom-20 z-30 p-6 gap-2 shadow-lg border-2 bg-white rounded-lg"
    >
      <div className="!md:py-6 !md:px-[40] !md:w-[387] !md:h-[589]">
        <div className="flex items-center justify-end md:w-96 h-6 ml-4 p-2 rounded">
          <button
            className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => {
              setShow(false);
            }}
          >
            <Image src="/icons/cross.svg" alt="Logo" width={12} height={12} />
          </button>
        </div>
        <div className="ml-4 p-2">
          <p className="font-PloniML-v2AAA md:text-4xl font-bold leading-48 text-left text-gray-600">
            Hi {user?.name} 👋{" "}
          </p>
          <br />
          <p className="font-PloniML-v2AAA md:text-4xl font-bold leading-48 text-left">
            How Can We Help?
          </p>
        </div>

        <div className="py-1 flex flex-col items-center">
          {NeedHelpMenuItems?.map((item, index) => {
            return (
              <MenuItems
                key={index}
                setShow={setShow}
                logo={item?.logo}
                text={item?.text}
                link={item?.link}
              />
            );
          })}
        </div>

        <div>
          <p className="font-PloniML-v2AAA text-base font-medium leading-9 text-left px-5">
            Or you can always give us a Call:
            <br />
            US {contactService().US_PHONE_NUMBER} <br />
            IL {contactService().ISRAEL_PHONE_NUMBER}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpMenu;
