"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import leftBee from "@/assets/vocabularyLeft.svg";
import rightBee from "@/assets/vocabularyRight.svg";
import volume from "@/assets/volume-high.svg";
import React from "react";
import { useState, useEffect } from "react";

export default function casual() {
  const broken = ["S", "_", "N", "_", "_", "H"];
  const [answer, setAnswer] = useState(broken);
  const solution = "SANOSH";

  const firstOcc = [...answer].indexOf("_");

  const checkAnswer = (final) => {
    if (final.join("").toUpperCase() === solution) {
      console.log("wow correct");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const reverseArr = [...broken].reverse();
      var result = [...answer].reverse();
      if (e.key === "Backspace") {
        for (let i = 0; i < reverseArr.length; i++) {
          if (result[i] !== reverseArr[i]) {
            result[i] = "_";
            break;
          }
        }
        setAnswer(result.reverse());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [answer]);

  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>
      <div className=" h-full float-left flex items-center ml-5 pt-50 ">
        <Image
          className="md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]"
          src={leftBee}
          alt="bee"
          height="280"
          width="280"
        />
      </div>
      <div className=" h-full float-right flex items-center mr-5 pt-50">
        <Image
          className="md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] "
          src={rightBee}
          alt="beee"
          height="280"
          width="280"
        />
      </div>
      <div className=" w-3/5 h-full mx-auto flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center py-2 mt-4 bg-white rounded-3xl font-lilita text-[#923717]">
          <div>Stage 1</div>
          <div className="text-2xl">LEVEL 2</div>
        </div>
        <div className="flex flex-row justify-between py-3">
          <div className="bg-white py-3 px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            HINT 1
          </div>
          <div className="bg-white py-3  px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            30s
          </div>
          <div className="bg-white py-3  px-20 rounded-3xl font-lilita text-[#923717] text-xl">
            HINT 2
          </div>
        </div>
        <div className="bg-white py-16 flex items-center justify-center flex-col rounded-2xl gap-10">
          <div className="bg-[#FFF7DE] rounded-full p-5">
            <div className="bg-[#FFEDB9] rounded-full p-5">
              <div className="bg-[#F7B807] rounded-full p-7 hover:cursor-pointer">
                <Image src={volume} height={70} width={70} alt="volume" />
              </div>
            </div>
          </div>

          <div className="flex flex-row uppercase py-6">
            {answer.map((item, index) => {
              if (item == "_" && firstOcc == index) {
                return (
                  <input
                    className="bg-[#B7471E] rounded-sm w-8 h-10 mx-[2px] text-white pl-3 placeholder-white font-semibold"
                    placeholder="_"
                    key={index}
                    autoFocus
                    onChange={(text) => {
                      let copy = [...answer];
                      console.log(copy);
                      copy[index] = text.target.value;
                      setAnswer(copy);
                    }}
                  />
                );
              } else {
                return (
                  <div
                    className="bg-[#B7471E] rounded-sm  w-8 h-10 mx-[2px] text-white flex items-center justify-center font-semibold"
                    key={index}
                  >
                    {item}
                  </div>
                );
              }
            })}
          </div>
          <div>
            <Button
              text="NEXT"
              textClassName="font-lilita py-3 px-28"
              containerClassName="mt-5"
              onClick={() => checkAnswer(answer)}
            ></Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <div className="font-lilita text-white text-3xl "> GAME RULES:</div>
          <div className="ml-5 text-[#9D3D1A] font-poppins font-medium">
            <ul className="list-disc">
              <li>Click on the volume icon to listen to the answer.</li>
              <li>
                Spell the correct answer by typing in the missing letters.
              </li>
              <li>Spell the correct answer before the timer runs out.</li>
              <li>Use hints if you get stuck. (Using hints deducts points)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
