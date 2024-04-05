import React, { useState } from "react";
import Link from "next/link";
import LostPassword from "@/components/auth/LostPassword";
import ConfirmMessage from "@/components/auth/ConfirmMessage";

const ForgotPassword = () => {
  return (
    <div className="min-h-[calc(100vh-130px)] p-8 sm:p-12 flex items-center justify-center max-w-full mx-auto">
      <div className="max-w-[510px] w-[100%]">
        <LostPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
