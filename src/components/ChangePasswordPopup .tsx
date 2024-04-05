import { saveNewPassword } from "@/services/usersService";
import React, { useState } from "react";
import { useAuth } from "@/context/authContext";

const ChangePasswordPopup = ({
  onCancel,
  onSubmit,
  baseUrl,
}: {
  onCancel: () => void;
  onSubmit: (
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
  ) => void;
  baseUrl: string;
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async () => {
    setPasswordError("");
    
    const userId = user?.id ? user?.id : '';
    if (!newPassword) {
      setPasswordError("New password cannot be blank");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError("password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }
    let userDetails = await saveNewPassword(userId, baseUrl, {
      data: {
        newPassword,
      },
    });
    onSubmit(currentPassword, newPassword, confirmNewPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-1">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">
          Change Password
        </h2>
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password (leave blank to leave unchanged)
          </label>
          <input
            type="password"
            id="currentPassword"
            className="border border-gray-300 rounded block px-3 py-2 w-full"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className={`border ${
              passwordError || passwordMatchError
                ? "border-[#ff0000]"
                : "border-gray-300"
            } rounded block px-3 py-2 w-full`}
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordError("");
              setPasswordMatchError(false);
            }}
          />
          {passwordError && (
            <p className="text-[#ff0000] text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmNewPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            className={`border ${
              passwordMatchError ? "border-[#ff0000]" : "border-gray-300"
            } rounded block px-3 py-2 w-full`}
            value={confirmNewPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
              setPasswordError("");
              setPasswordMatchError(false);
            }}
          />
          {passwordMatchError && (
            <p className="text-red text-sm mt-1">Passwords do not match</p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            className="inline-block rounded-2xl py-2 px-10 font-medium text-sm border-black border-2 min-w-3 hover:bg-[#FFE300] hover:text-black ease-linear duration-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="inline-block rounded-2xl py-2 px-8 font-medium text-sm bg-black text-white min-w-3 hover:bg-[#FFE300] hover:text-black ease-linear duration-100"
            onClick={handleSubmit}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
