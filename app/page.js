"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="font-lilita h-full mt-10">
      <div className="bg-primary h-[78%] rounded-3xl p-[20px] flex items-center justify-center relative">
        <div className="bg-tertiary h-14 w-14 absolute right-0 top-0 m-5 rounded-md">
          <div className=""></div>
        </div>
        <div className="bg-tertiary h-[60%] w-[30%] rounded-3xl">
          <form>
            <div className="text-center items-center justify-center">
              <h1 className=" text-white text-4xl p-5">LOGIN</h1>
            </div>
            <div className="flex-row text-center items-center justify-center">
              <input
                type="text"
                id="usernameInput"
                className="outline-none border-2 h-6 w-[85%] py-5 mt-2 mb-4 rounded-sm box-border"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              ></input>

              <input
                type="text"
                id="passwordInput"
                className="outline-none border-2 h-6 w-[85%] py-5 mt-4 rounded-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="text-left px-9 py-4">
                <p className="text-white cursor-pointer font-poppins font-light">
                  Forgot Password?
                </p>
              </div>
              <button className="bg-[#FFC403] px-[20%] py-3 mt-8 border-b-8 border-[#C27202] text-2xl rounded-md text-white ">
                Login
              </button>
              <p className="text-white p-5 font-poppins font-light">
                New here?
                <a className="font-semibold" href="">
                  {" "}
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
