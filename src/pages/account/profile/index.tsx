import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getBaseUrl } from "@/utils/utils";
import {
  getUserDetails,
  saveUserDetails,
  getCountries,
} from "@/services/usersService";
import ChangePasswordPopup from "../../../components/ChangePasswordPopup ";
import { useAuth } from "@/context/authContext";
import { useRouterManager } from "@/services/RouterManager";
import { UserProfile } from "@/types/User";
import dynamic from "next/dynamic";

const modal_data = {
  placeholder_icon: "/images/placeholder.svg",
  editImage: "/images/editImage.svg"
};

export const getServerSideProps = async (context: any) => {
  try {
    const baseUrl = getBaseUrl(context);
    const [countries] = await Promise.all([
      getCountries(),
    ]);

    return {
      props: {
        countries,
        baseUrl
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const Profile = ({
  countries,
  baseUrl,
  error,
}: {
  countries: any;
  baseUrl: string;
  error: any;
}) => {

  const [userData, setUserData] = useState<UserProfile>();
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState<boolean>(false);
  const image: any = useRef<HTMLInputElement>();
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    let userData = getUserDetails(user?.id ? user?.id : '', baseUrl);
    userData.then((user) => {
      setUserData(user)
    });
  }, [user])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const router = useRouter();
  const routerManager = useRouterManager();

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  //handlefilechange
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const fileReader = new FileReader();
      const file = files[0];

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === "string"
        ) {
          setSelectedImages(e.target.result);
        }
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handleImage = () => {
    image.current.click();
  };

  const handleChangePassword = () => {
    setShowChangePasswordPopup(true);
  };

  const handleCancelChangePassword = () => {
    setShowChangePasswordPopup(false);
  };

  const handleSubmitChangePassword = () => {
    setShowChangePasswordPopup(false);
  };

  const saveDetails = async () => {
    const userId = user?.id ? user?.id : '';
    let userDetails = await saveUserDetails(userId, baseUrl, {
      data: {
        id: userId,
        userData: userData
      },
    });
  };

  return (
    <div className="w-full h-full">
      {showChangePasswordPopup && (
        <ChangePasswordPopup
          onCancel={handleCancelChangePassword}
          onSubmit={handleSubmitChangePassword}
          baseUrl={baseUrl}
        />
      )}
      <div className={`${screenSize.width < 712 ? "ml-5" : "mt-2 ml-[10%]"}  flex flex-row`}>
        <button
          className={`${screenSize.width < 712 ? "" : "hidden"} text-gray-900 focus:outline-none md:hidden`}
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
        <div className="text-3xl sm:text-5xl mt-4 mb-4 ml-8 font-extrabold flex gap-4 ">
          <h4>My Account</h4>
        </div>
      </div>

      <div className={`${screenSize.width < 712 ? "flex-col w-full items-center justify-center" : "flex-row w-[80%]"} flex justify-center  gap-4 rounded-lg mt-1 p-7 `}>

        <div className={`${screenSize.width < 712 ? `w-[90%] absolute top-[10%] ${isMobileMenuOpen ? "" : "hidden"}` : "w-1/4"}  rounded-lg md:ml-14 list flex items-start gap-2 bg-[#F2F4F7] p-5 transition-all`}>
          <div className="flex flex-col gap-2 w-full h-full">
            <Link
              href={routerManager.USER_PROFILE_PAGE_PATH}
              className={`${router.asPath === "/account/profile"
                ? "text-black bg-[#fff] font-extrabold"
                : "text-slate-700 font-bold"
                } p-3 text-xl font-semibold rounded-md`}
            >
              My Account
            </Link>
            <Link
              href={routerManager.USER_CERTIFICATE_PAGE_PATH}
              className={`${router.asPath === "/account/certificate"
                ? "text-black bg-[#fff] font-extrabold"
                : "text-slate-700 font-bold"
                } p-3 text-xl font-semibold rounded-md`}
            >
              My Certificates
            </Link>
            <Link
              href={routerManager.USER_NOTIFICATION_PAGE_PATH}
              className={`${router.asPath === "/account/notification"
                ? "text-black bg-[#fff] font-extrabold"
                : "text-slate-700 font-bold"
                } p-3 text-xl font-semibold rounded-md`}
            >
              Notification setting
            </Link>
            <Link href={'routerManager.LOGOUT_PATH'} className="text-slate-700 p-3 text-xl font-semibold rounded-md">
              Logout
            </Link>
          </div>
        </div>

        <div className={`${screenSize.width < 712 ? "w-full" : "'w-3/4"}  mb-4 `}>
          {screenSize.width > 712 && <div className="text-2xl sm:text-4xl mb-4 ml-2 font-bold flex gap-4">
            <h4>My Account</h4>
          </div>}

          <div className="relative mx-2 flex justify-center md:justify-start mb-4 w-full">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={image}
              onChange={handleFileChange}
            />
            <div className="relative">
              {selectedImages && (
                <Image
                  src={
                    selectedImages.length > 0
                      ? selectedImages
                      : userData?.avatar
                        ? userData?.avatar
                        : modal_data?.placeholder_icon
                  }
                  alt="placeholder_icon"
                  className={`w-[144px] h-auto ${selectedImages.length > 0 ? "rounded-full border-yellow border-2" : ""}`}
                  width={144}
                  height={144}
                  onClick={handleImage}
                />
              )}
              <Image src={modal_data?.editImage} width={35} height={35} alt="Edit" className={`${selectedImages?.length > 0 ? "" : "hidden"} absolute bottom-1 right-0`} onClick={handleImage} />
            </div>

          </div>

          <div className="mx-2 w-full ">
            <div className="flex w-full gap-10">
              <div className="mb-4 sm:mb-6 w-1/2">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *First Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.firstName ? userData?.firstName : ''}
                  required
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      firstName: e.target.value
                    })
                  }}
                />
              </div>
              <div className="mb-4 sm:mb-6 w-1/2">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Last Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.lastName ? userData?.lastName : ''}
                  required
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      lastName: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div className="flex w-full gap-10">
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  {userData?.firstName ? userData.firstName : ''}{' '}
                  {userData?.lastName ? userData.lastName : ''}
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                />
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Birthday
                </label>
                <input
                  type="date"
                  placeholder=""
                  value={userData?.birthDay}
                  required
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      birthDay: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div className="flex w-full gap-10">
              <div className=" w-1/2 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  value={userData?.email}
                  required
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      email: e.target.value
                    })
                  }}
                />
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  disabled
                  placeholder="*********"
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block rounded-2xl py-2.5 px-5 font-medium text-sm bg-white text-black min-w-3 hover:bg-[#FFE300] hover:text-white border border-current ease-linear duration-100"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </div>
          </div>

          <div className="mx-2">
            <h4 className="mt-5 mb-5 text-2xl sm:text-4xl font-bold">
              More about you
            </h4>
            <div className="flex w-full gap-10">
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Current country
                </label>
                <select
                  required
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      country: e.target.value
                    })
                  }}
                  value={userData?.country}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                >
                  <option>Select Country</option>
                  {countries &&
                    countries.map((countryItem: any) => (
                      <option
                        value={countryItem?.name?.common}
                        key={countryItem?.name?.common}
                      >
                        {countryItem?.name?.common}
                      </option>
                    ))}
                </select>
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  Current City
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.city}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      city: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div className="flex w-full gap-10">
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Nationality
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.nationality}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      nationality: e.target.value
                    })
                  }}
                />
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  *Gender
                </label>
                <select
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      gender: e.target.value
                    })
                  }}
                  value={userData?.gender ? userData.gender : "he/him"}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                >
                  <option value="">Select Gender</option>
                  <option
                    value="he/him"
                  >
                    Male
                  </option>
                  <option
                    value="she/her"
                  >
                    Female
                  </option>
                  <option
                    value="other"
                  >
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-10">
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  Company
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.company}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      company: e.target.value
                    })
                  }}
                />
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  Profession
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={userData?.profession}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      profession: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div className="flex w-full gap-10">
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  I am passonate about
                </label>
                <textarea
                  rows={5}
                  placeholder="Type Your Answer"
                  value={userData?.passionateAbout}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      passionateAbout: e.target.value
                    })
                  }}
                />
              </div>
              <div className=" w-1/2 mb-4 sm:mb-6">
                <label htmlFor="" className="text-sm font-medium text-black">
                  The Reason I study Hebrew is
                </label>
                <textarea
                  rows={5}
                  placeholder="Type Your Answer"
                  value={userData?.studyReason}
                  className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      studyReason: e.target.value
                    })
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={() => {
                saveDetails();
              }}
              className="inline-block rounded-2xl py-2.5 px-5 font-medium text-sm bg-black text-white min-w-3 hover:bg-[#FFE300] hover:text-black ease-linear duration-100"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Profile), { ssr: false })