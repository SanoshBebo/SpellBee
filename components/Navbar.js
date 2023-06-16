"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowDown from "@/assets/Arrow_down.svg";
import Logo from "@/assets/Logo.svg";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className="sticky my-4 font-medium flex justify-between items-center min-h-[4.5rem] px-6 lg:px-4 xl:px-24 ">
      <a href="https://www.spellbeeuniverse.com/">
        <Image src={Logo} width="180" className="p-3" alt="Logo" />
      </a>
      <button
        className="lg:hidden"
        onClick={() => setToggleNavbar(!toggleNavbar)}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_710_155)">
            <rect width="48" height="48" />
          </g>
          <path
            d="M10.5 33V30.75H37.5V33H10.5ZM10.5 25.125V22.875H37.5V25.125H10.5ZM10.5 17.25V15H37.5V17.25H10.5Z"
            fill="#303030"
          />
          <defs>
            <filter
              id="filter0_b_710_155"
              x="-96"
              y="-96"
              width="240"
              height="240"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="48" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_710_155"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_710_155"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
      <div
        className={`${
          toggleNavbar
            ? "absolute w-full top-20 left-0 flex flex-col rounded-3xl my-2 items-center font-semibold shadow-2xl border border-b-black"
            : "hidden "
        } py-4 lg:flex lg:items-center  lg:px-8 lg:rounded-full bg-primary `}
      >
        <a
          href="https://spellbeeuniverse.com/"
          className={`hover:text-secondary ease-in-out duration-100 hover:border-1 hover:border-white hover:rounded-full hover:bg-white hover:bg-opacity-90  text-secondary ${
            toggleNavbar ? "py-5" : "py-2 px-4"
          }`}
        >
          Home
        </a>
        <a
          href="https://spellbeeuniverse.com/about-us"
          className={`hover:text-secondary hover:border-1 hover:border-white hover:rounded-full hover:bg-white hover:bg-opacity-90 border-transparent text-secondary ${
            toggleNavbar ? "py-4" : "py-2 px-4"
          }`}
        >
          About us
        </a>
        <a
          href="https://spellbeeuniverse.com/game-format"
          className={`hover:text-secondary hover:border-1 hover:border-white hover:rounded-full hover:bg-white hover:bg-opacity-90 border-transparent text-secondary ${
            toggleNavbar ? "py-4" : "py-2 px-4"
          }`}
        >
          Game Format
        </a>
        <a
          href="https://spellbeeuniverse.com/contact-us"
          className={`hover:text-secondary hover:border-1 hover:border-white hover:rounded-full hover:bg-white hover:bg-opacity-90 border-transparent text-secondary ${
            toggleNavbar ? "py-4" : "py-2 px-4"
          }`}
        >
          Contact
        </a>
        <a
          href="https://spellbeeuniverse.com/faq"
          className={`hover:text-secondary hover:border-1 hover:border-white hover:rounded-full hover:bg-white hover:bg-opacity-90 border-transparent text-secondary ${
            toggleNavbar ? "py-4" : "py-2 px-4"
          }`}
        >
          FAQ
        </a>

        <a
          href="/"
          className={`${
            toggleNavbar ? "flex" : "hidden"
          } items-center justify-center border-2 border-secondary text-primary bg-secondary py-2 px-5 rounded-full hover:bg-space hover:text-secondary duration-700`}
        >
          <div className="mr-4">
            <Image
              src={ArrowDown}
              width="38"
              height="38"
              className="bg-primary rounded-full"
              alt="Arrow"
            />
          </div>
          <div>Register Here</div>
        </a>
      </div>

      <a
        href="/"
        className="hidden lg:flex items-center justify-center border-2 border-secondary text-primary bg-secondary py-2 px-5 rounded-full hover:bg-space hover:text-secondary duration-700"
      >
        <div className="mr-4">
          <Image
            src={ArrowDown}
            width="38"
            height="38"
            className="bg-primary rounded-full"
            alt="Arrow"
          />
        </div>
        <div>Register Here</div>
      </a>
    </nav>
  );
}
