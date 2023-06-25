"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import leftBee from "@/assets/vocabularyLeft.svg";
import rightBee from "@/assets/vocabularyRight.svg";
import volume from "@/assets/volume-high.svg";
import React from "react";
import { useState, useEffect } from "react";
export default function vocabulary() {
  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>

      <div className=" w-3/5 h-full mx-auto flex flex-col gap-5">
        <div className="flex justify-center items-center py-4 mt-4 bg-white rounded-3xl font-lilita text-[#923717]">
          <div className="text-2xl">VOCABULARY</div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 mx-40 my-20 font-lilita">
          <Button
            text="CATEGORY 01"
            inverted={true}
            textClassName="px-1 py-28 text-4xl"
          />
          <Button
            text="CATEGORY 02"
            inverted={true}
            textClassName="px-1 py-28  text-4xl"
          />
          <Button
            text="CATEGORY 03"
            inverted={true}
            textClassName="px-1 py-28  text-4xl"
          />
          <Button
            text="CATEGORY 04"
            inverted={true}
            textClassName="px-1 py-28  text-4xl"
          />
        </div>
      </div>
    </div>
  );
}
