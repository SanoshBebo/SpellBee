"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import homeScreenBeeLeft from "../../assets/HomeScreenBeeLeft.svg";
import homeScreenBeeRight from "../../assets/HomeScreenBeeRight.svg";
import pic from "../../assets/profile.jpg";
import { useRouter } from "next/navigation";

export default function home() {
  const router = useRouter();
  const goToScreen = (screen) => {
    if (screen == "PLAY") {
      router.push("/modeselection");
    } else if (screen == "VOCABULARY") {
      router.push("/vocabulary");
    } else if (screen == "LEADERBOARD ") {
      router.push("/leaderboard");
    }
  };
  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>
      <div className=" h-full float-left flex items-center ml-16 md:max-lg:ml-10">
        <Image
          className="md:max-lg:h-[200px] md:max-lg:w-[200px] lg:max-xl:h-[250px] lg:max-xl:w-[250px]"
          src={homeScreenBeeLeft}
          height="300"
          width="300"
        ></Image>
      </div>
      <div className=" h-full float-right flex items-center mr-16  md:max-lg:mr-10">
        <Image
          className="md:max-lg:h-[200px] md:max-lg:w-[200px] lg:max-xl:h-[250px] lg:max-xl:w-[250px]"
          src={homeScreenBeeRight}
          height="300"
          width="300"
        ></Image>
      </div>
      <div className="bg-primary w-[25%] h-full mx-auto md:max-lg:w-[40%]">
        <div className="flex justify-between flex-col items-center w-full md:max-lg:pt-16 pt-16">
          <div className=" bg-white p-4 rounded-full mt-14">
            <Image
              src={pic}
              width={150}
              height={150}
              className="rounded-full md:max-lg:h-[100px] md:max-lg:w-[100px]"
            ></Image>
          </div>
          <div className="px-14 py-5 bg-white rounded-full -translate-y-10 font-lilita text-tertiary uppercase text-2xl md:max-lg:text-md  md:max-lg:px-7 md:max-lg:py-2">
            LEVEL 25
          </div>
          <div className="flex text-center items-center text-white justify-center -mt-5 w-full">
            <div className="bg-tertiary border-4 px-3 py-2 border-white rounded-xl mr-1 font-lilita text-2xl w-full md:max-lg:text-md md:max-lg:px-1 md:max-lg:py-1">
              SCORE 850
            </div>
            <div className="bg-tertiary border-4 px-3 py-2 border-white rounded-xl ml-1 font-lilita  text-2xl w-full md:max-lg:text-md md:max-lg:px-1 md:max-lg:py-1">
              STAGE 02
            </div>
          </div>
        </div>
        <div className="flex-col w-full mt-16 ">
          <div>
            <Button
              inverted={true}
              text="PLAY"
              containerClassName="w-full mb-5"
              textClassName="py-5 font-lilita text-4xl "
              onClick={() => goToScreen("PLAY")}
            ></Button>
          </div>
          <div>
            <Button
              inverted={true}
              text="VOCABULARY"
              containerClassName="w-full mb-5"
              textClassName="py-5 font-lilita text-4xl"
              onClick={() => goToScreen("VOCABULARY")}
            ></Button>
          </div>
          <div>
            <Button
              inverted={true}
              text="LEADERBOARDS"
              containerClassName="w-full mb-5"
              textClassName="py-5 font-lilita text-4xl"
              onClick={() => goToScreen("LEADERBOARDS")}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
