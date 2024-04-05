import React from "react";

const ConfirmMessage = () => {
  return (
    <div className="border border-yellow rounded-lg shadow-[2px_8px_16px_-4px__rgba(0,0,0,0.3)]">
      <div className="p-4 sm:p-6">
        <h4 className="text-2xl sm:text-4xl font-bold text-center mt-0 mb-0 text-black">
          Reset your password
        </h4>
        <div className="max-w-[400px] mx-auto">
          <h6 className="text-sm sm:text-base font-normal text-center mt-2 text-black">
            We’ve sent you an email with link to reset your password. It should
            arrive in the next few minutes.
          </h6>
          <h6 className="text-sm sm:text-base font-normal text-center mt-2 text-black">
            Don’t forget to check your spam folder if you can’t find the email.
          </h6>
        </div>
      </div>
      <div className="p-4 sm:p-6 pt-0">
        <div className="max-w-[326px] mx-auto">
          <div className="text-center">
            <button className="text-sm text-semibold text-black bg-transparent border-0 hover:text-[#FFE300] ease-linear">
              Resend Verification Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;
