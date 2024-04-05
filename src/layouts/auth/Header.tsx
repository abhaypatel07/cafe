/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRouterManager } from "@/services/RouterManager";

const Header = () => {
  const routerManager = useRouterManager();
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Link href={routerManager.HOME_PAGE_PATH} className="cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={260} height={150} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
