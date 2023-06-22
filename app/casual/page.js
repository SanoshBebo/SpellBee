"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import leftBee from "../../assets/vocabularyLeft.svg";
import rightBee from "../../assets/vocabularyRight.svg";
import volume from "../../assets/volume-high.svg";
import React from "react";
import { useState } from "react";

export default function vocabulary() {
  const [word, setWord] = useState(["S", "A", "N", "O", "S", "H"]);

  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>
      <div className=" h-full float-left flex items-center ml-5 pt-50 ">
        <Image
          className="md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]"
          src={leftBee}
          height="280"
          width="280"
        ></Image>
      </div>
      <div className=" h-full float-right flex items-center mr-5 pt-50">
        <Image
          className="md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] "
          src={rightBee}
          height="280"
          width="280"
        ></Image>
      </div>
      <div className=" w-3/5 h-full mx-auto flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center py-1 mt-4 bg-white rounded-3xl font-lilita text-[#923717]">
          <div>Stage 1</div>
          <div className="text-2xl">LEVEL 2</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-white py-2 px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            HINT 1
          </div>
          <div className="bg-white py-2  px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            30s
          </div>
          <div className="bg-white py-2  px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            HINT 2
          </div>
        </div>
        <div className="bg-white py-10 flex items-center justify-center flex-col rounded-2xl">
          <div className="bg-[#FFF7DE] rounded-full p-5">
            <div className="bg-[#FFEDB9] rounded-full p-5">
              <div className="bg-[#F7B807] rounded-full p-7 hover:cursor-pointer">
                <Image src={volume} height={50} width={50}></Image>
              </div>
            </div>
          </div>

          <div>
            {/* {
              word.map(())
            } */}
          </div>
          <div>
            <Button
              text="NEXT"
              textClassName="font-lilita py-3 px-28"
              containerClassName="mt-5"
            ></Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-lilita text-white text-3xl "> GAME RULES:</div>
          <div className="">
            Click on the volume icon to listen to the word. <br />
            Spell the correct word by typing in the missing letters. <br />
            Spell the correct word before the timer runs out. <br />
            Use hints if you get stuck. (Using hints deducts points)
          </div>
        </div>
      </div>
    </div>
  );
}
