import React from "react";
import Link from "next/link";
import PasswordReset from "@/components/auth/PasswordReset";

const ResetPassword = () => {
  return (
    <div className="min-h-[calc(100vh-130px)] p-8 sm:p-12 flex items-center justify-center max-w-full mx-auto">
      <div className="max-w-[510px] w-[100%]">
        <PasswordReset />
      </div>
    </div>
  );
};

export default ResetPassword;
