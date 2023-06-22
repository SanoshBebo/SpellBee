"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import pic from "../../assets/profile.jpg";
import rocketBee from "../../assets/RocketBee.png";

export default function Home() {
  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>

      <div className="bg-primary w-[25%] h-1/2 mx-auto">
        <div className="flex justify-between flex-col items-center w-full ">
          <div className=" bg-white p-4 rounded-full mt-14">
            <Image
              src={pic}
              width={150}
              height={150}
              className="rounded-full"
            ></Image>
          </div>

          <div className="px-14 py-5 bg-white rounded-full -translate-y-10 font-lilita text-tertiary uppercase text-2xl">
            LEVEL 25
          </div>
          <div className="flex text-center items-center text-white justify-center -mt-5 w-full">
            <div className="bg-tertiary border-4 px-3 py-2 border-white rounded-xl mr-1 font-lilita text-2xl w-full">
              SCORE 850
            </div>
            <div className="bg-tertiary border-4 px-3 py-2 border-white rounded-xl ml-1 font-lilita  text-2xl w-full">
              STAGE 02
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 items-center justify-center h-2/5">
        <Button
          text="STAGE 01"
          inverted={true}
          containerClassName=""
          textClassName="py-28 px-24 font-lilita"
        ></Button>
        <Button
          text="STAGE 02"
          containerClassName="bg-[#4D4D4D] "
          textClassName="bg-[#C0C0C0] py-28 px-24  font-lilita"
        />
      </div>
    </div>
  );
}
