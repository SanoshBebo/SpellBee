"use client";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
  };

  const onClick = () => {
    router.push("/home");
  };

  return (
    <div className="h-full">
      <Button
        inverted={true}
        containerClassName={"mt-7 mr-4 absolute right-0 top-0"}
        textClassName={"p-2"}
      >
        <div className="h-full flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 0 384 512"
          >
            <path
              fill="white"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 
                86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 
                361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 
                406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </div>
      </Button>
      <div className="flex h-full flex-row">
        <div className="font-lilita h-full bg-primary w-[50%]">
          <div className="bg-primary h-full rounded-3xl p-[20px] flex flex-col items-center justify-between relative">
            <div className="flex-1 items-center justify-center flex mb-14 lg:w-[60%] 2xl:[20%]">
              <form
                onSubmit={onSubmit}
                className="px-6 bg-tertiary rounded-3xl "
              >
                <div className="text-center items-center justify-center">
                  <h1 className=" text-white text-4xl p-5">LOGIN</h1>
                </div>
                <div className="flex-row text-center items-center justify-center font-poppins">
                  <input
                    type="text"
                    className="outline-none border-2 h-6 w-full py-5 px-3 mt-2 mb-4 rounded-sm box-border "
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>

                  <input
                    type="text"
                    className="outline-none border-2 h-6 w-full py-5 px-3 mt-4 rounded-sm "
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <div className="px-1 py-4 text-left float-left w-full">
                    <p className="text-white cursor-pointer font-poppins font-light">
                      Forgot Password?
                    </p>
                  </div>
                  <Button
                    text="Login"
                    containerClassName="w-full mt-8"
                    textClassName="font-lilita py-3"
                    inverted={false}
                    onClick={onClick}
                  />

                  <p className="text-white p-5 font-poppins font-light">
                    New here?
                    <a className="font-semibold relative " href="">
                      {" "}
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col p-5 w-[50%]">
          <div className="h-[20%]"></div>
          <div className="font-lilita text-tertiary text-2xl mb-5">
            News & Updates
          </div>
          <div className="bg-tertiary w-full h-1/4 mb-2 rounded-xl"></div>
          <div className="bg-tertiary w-full h-1/4 mb-2 rounded-xl"></div>
          <div className="bg-tertiary w-full h-1/4 mb-2 rounded-xl"></div>
          <div className="bg-tertiary w-full h-1/4 mb-2 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
