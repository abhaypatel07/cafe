import React from "react";
import Link from "next/link";
import ConfirmMessage from "./ConfirmMessage";
import { useState } from "react";
const LostPassword = () => {
  const [isConfirm, setConfirm] = useState(false);
  return (
    <>
      {!isConfirm && (
        <div className="border border-yellow rounded-lg shadow-[2px_8px_16px_-4px__rgba(0,0,0,0.3)]">
          <div className="p-4 sm:p-6 ">
            <h4 className="text-2xl sm:text-4xl font-bold text-center mt-0 mb-0">
              Lost your password?
            </h4>
            <div className="max-w-[400px] mx-auto">
              <h6 className="text-sm sm:text-base font-normal text-center mt-2">
                Please enter your username or email address. You will receive a
                link to create a new password via email.
              </h6>
            </div>
          </div>
          <div className="p-4 sm:p-6 pt-0">
            <div className="max-w-[326px] mx-auto">
              <form>
                <div className="mb-6">
                  <label htmlFor="" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="inline-block rounded-2xl py-2.5 px-5 font-medium text-sm bg-black text-white min-w-36 hover:bg-[#FFE300] hover:text-black ease-linear duration-100"
                    onClick={() => {
                      setConfirm(true);
                    }}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isConfirm && <ConfirmMessage />}
    </>
  );
};

export default LostPassword;
