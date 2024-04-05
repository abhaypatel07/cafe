import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Divider } from "@nextui-org/react";
import NeedHelp from "@/components/NeedHelp";
import { User } from "@/types/User";

interface LayoutProps {
  children: React.ReactNode;
}

const instructor: User = {
  id: "1",
  avatar: "/images/need_help.svg",
  icon: "/images/need-help-polygon.svg",
};

const LoginLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Divider />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LoginLayout;
