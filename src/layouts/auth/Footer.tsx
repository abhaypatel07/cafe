import { useRouterManager } from "@/services/RouterManager";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const routerManager = useRouterManager();
  return (
    <footer className="flex items-center justify-between bg-black p-4 shadow-up z-50">
      <div className="text-gray1">
        Copyright © {new Date().getFullYear()} Citizen Café Tel Aviv
      </div>

      <div className="flex items-center space-x-2">
        <Link
          href={{
            pathname: routerManager.PRIVACY_POLICY_PAGE_PATH,
          }}
          className={`text-gray1 mr-4`}
        >
          Privacy Policy
        </Link>
        <Link
          href={{
            pathname: routerManager.TERM_CONDITIONS_PAGE_PATH,
          }}
          className={`text-gray1 `}
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
