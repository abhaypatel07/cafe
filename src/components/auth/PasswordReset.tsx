import React from "react";
import Link from "next/link";

const PasswordReset = () => {
  return (
    <div className="border border-yellow rounded-lg shadow-[2px_8px_16px_-4px__rgba(0,0,0,0.3)]">
      <div className="p-4 sm:p-6">
        <h4 className="text-2xl sm:text-4xl font-bold text-center mt-0 mb-0">
          Reset your password
        </h4>
        <div className="max-w-[400px] mx-auto">
          <h6 className="text-sm sm:text-base font-normal text-center mt-1 sm:mt-2">
            Choose a new and secure password to protect your account
          </h6>
        </div>
      </div>
      <div className="p-4 sm:p-6 pt-0">
        <div className="max-w-[326px] mx-auto">
          <div className="mb-4 sm:mb-6">
            <label htmlFor="" className="text-sm font-medium text-black">
              New Password
            </label>
            <input
              type="email"
              placeholder=""
              className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="" className="text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="email"
              placeholder=""
              className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded-2xl py-2.5 px-5 font-medium text-sm bg-black text-white min-w-3 hover:bg-[#FFE300] hover:text-black ease-linear duration-100"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
