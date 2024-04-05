import NeedHelp from "@/components/NeedHelp";
import NeedHelpMenu from "@/components/NeedHelpMenu.tsx";
import { User } from "@/types/User";
import { Divider } from "@nextui-org/react";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const instructor: User = {
  id: "1",
  avatar: "/images/need_help.svg",
  icon: "/images/need-help-polygon.svg",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  //TODO: get user from context
  const user: User = { name: "John Doe", id: "1", avatar: "/images/aviad.svg" };
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Divider />
      <main className="flex flex-grow mb-[100px]">{children}</main>
      <div className="z-20 fixed bottom-20 mb-[10px] right-14 ">
        <NeedHelpMenu
          show={showHelpMenu}
          setShow={setShowHelpMenu}
          onClickOutside={() => {
            setShowHelpMenu(false);
          }}
          user={user}
        />
        <NeedHelp setShow={setShowHelpMenu} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
