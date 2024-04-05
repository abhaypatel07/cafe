import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouterManager } from "@/services/RouterManager";
import { loginUser } from "@/services/authService";
import { useAuth } from "@/context/authContext";

const LoginComponet = () => {
  const routerManager = useRouterManager();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loginError, setLoginError] = useState(""); // State to track login error

  const signIn = async (event: any) => {
    event.preventDefault();
    if (!termsAccepted || username === "" || password === "") {
      return;
    }
    try {
      const response = await loginUser(username, password);
      if (response.error) {
        setLoginError("Login failed. Please check your username and password.");
        console.error("Sign in error", response.error);
      } else {
        await login(response.jwt_token, response.userId);
        routerManager.goTo(routerManager.HOME_PAGE_PATH);
      }
    } catch (error) {
      console.error("Sign in error", error);
      setLoginError("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="max-w-full mx-auto min-h-full bg-gray-100">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 bg-white ">
          <div className="min-h-[calc(100vh-130px)] p-8 lg:p-12 flex items-center justify-cente">
            <div className="max-w-80 w-full  mx-auto">
              <div className="form-header pb-4 sm:pb-6">
                <h1 className="text-center font-bold text-4xl sm:text-5xl">
                  Welcome Back!
                </h1>
              </div>
              <form onSubmit={signIn}>
                <div className="mb-6">
                  <label htmlFor="" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                    placeholder=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border border-gray-300 rounded block px-3 py-2 w-full text-black"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <div className="form-check">
                    <label htmlFor="agree" className="flex">
                      <input
                        type="checkbox"
                        id="agree"
                        className="absolute -z-10 opacity-0 peer"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                      />
                      <span className="peer-checked:bg-[#FFE300] peer-checked:before:opacity-100 w-4 h-4 min-w-4 rounded border border-black mr-1 flex items-center justify-center before:content[''] before:block before:-mt-0.5 before:w-2 before:h-1 before:border-l before:border-b before:border-black before:opacity-0 before:-rotate-45"></span>
                      <span className="text-sm">
                        By sign in you agree to our{" "}
                        <a
                          href={routerManager.TERM_CONDITIONS_PAGE_PATH}
                          className="font-bold"
                        >
                          Terms & Conditions
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
                {loginError && (
                  <div className="mb-4 text-center text-red">{loginError}</div>
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={
                      !termsAccepted || username === "" || password === ""
                    }
                    className={`inline-block rounded-2xl py-2.5 px-5 font-medium text-sm min-w-36 ${
                      !termsAccepted || username === "" || password === ""
                        ? "bg-gray-300 text-gray-500"
                        : "bg-black text-white hover:bg-[#FFE300] hover:text-black"
                    } ease-linear duration-100`}
                  >
                    Sign In
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <Link
                    href={routerManager.FORGOT_PASSWORD_PATH}
                    className="text-sm text-black hover:text-[#FFE300] ease-linear"
                  >
                    Lost your Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-7 hidden lg:block">
          <div className=" min-h-[calc(100vh-130px)] p-12 flex items-center justify-center relative z-[1] h-full">
            <div className="w-full h-full absolute -z-10 overflow-hidden">
              <Image
                src="../../images/login/note.svg"
                alt="Note"
                width={48}
                height={48}
                className="absolute lg:top-[25px] lg:left-[40px] xl:top-[38px] xl:left-[85px] 2xl:top-[58px] 2xl:left-[115px]"
              />
              <Image
                src="../../images/login/smile.svg"
                alt="Smile"
                width={48}
                height={48}
                className="absolute lg:top-[50px] lg:right-[65px] xl:top-[85px] xl:right-[75px] 2xl:top-[126px] 2xl:right-[92px]"
              />
              <Image
                src="../../images/login/pot.svg"
                alt="Pot"
                width={48}
                height={48}
                className="absolute lg:bottom-[-25px] lg:left-[25px] xl:bottom-[-25px] xl:left-[45px] 2xl:bottom-[-25px]  2xl:left-[57px]"
              />
              <Image
                src="../../images/login/blub.svg"
                alt="Blub"
                width={48}
                height={48}
                className="absolute lg:right-[95px] lg:bottom-[20px] xl:right-[115px] xl:bottom-[30px] 2xl:right-[127px] 2xl:bottom-[40px]"
              />
            </div>
            <div className=" max-w-[465px] w-full">
              <div className="mb-6">
                <h2 className="mt-0 text-2xl font-bold mb-2 text-black">
                  Not a student yet?{" "}
                </h2>
                <p className="text-base text-black font-normal">
                  It’s never too late!
                  <br />
                  The Citizen cafe Academy is where our students can join
                  classes, practice groups and many other community events.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mt-0 text-2xl font-bold mb-2 text-black">
                  Want to join us?{" "}
                </h2>
                <p className="text-base text-black font-normal text-black">
                  Book a free intro session with one of our teachears, get a
                  free taste of our method and find the best class for you.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="https://www.citizencafetlv.com"
                  className="inline-block rounded-2xl py-2.5 px-5 font-medium text-sm border border-black bg-white min-w-36 hover:bg-black hover:text-white ease-linear duration-100"
                >
                  Give it a go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponet;
