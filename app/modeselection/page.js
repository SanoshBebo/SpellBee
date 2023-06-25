"use client";
import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import pic from "../../assets/profile.jpg";
import redHexagon from "../../assets/redHexagon.png";
import purpleHexagon from "../../assets/purpHexagon.png";
import casualBee from "../../assets/casualBee.svg";
import competitiveBee from "../../assets/competitiveBee.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToScreen = (screen) => {
    if (screen == "CASUAL") {
      router.push("/casual");
    } else screen == "COMPETITIVE";
  };

  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>

      <div className="bg-primary w-[25%] h-1/2 mx-auto">
        <div className="flex justify-between flex-col items-center w-full pt-16 ">
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
        <button className={"bg-[#5C2713] text-2xl rounded-xl text-white"}>
          <div
            className="bg-secondary relative rounded-xl font-lilita px-10 py-3 -translate-y-3 uppercase text-3xl "
            onClick={() => goToScreen("CASUAL")}
          >
            <Image src={casualBee} width={200} height={200}></Image>
            <Image
              className="absolute top-3 right-3 -z-10"
              src={redHexagon}
              width={100}
              height={100}
            ></Image>
            <Image
              className="absolute top-8 left-10 -z-10"
              src={redHexagon}
              width={80}
              height={80}
            ></Image>
            <Image
              className="absolute bottom-12 left-4 -z-10 rotate-90"
              src={redHexagon}
              width={70}
              height={70}
            ></Image>
            <Image
              className="absolute bottom-10 right-7 -z-10"
              src={redHexagon}
              width={60}
              height={60}
            ></Image>

            <p>Casual</p>
          </div>
        </button>
        <button className={"bg-[#6325BB] rounded-xl text-white"}>
          <div
            className="bg-[#945AE5] rounded-xl font-lilita px-10 py-3 -translate-y-3 uppercase text-3xl"
            onClick={() => goToScreen("COMPETITIVE")}
          >
            <Image src={competitiveBee} width={200} height={200}></Image>
            <Image
              className="absolute top-3 right-3 -z-10 bg-[#945AE5]"
              src={purpleHexagon}
              width={100}
              height={100}
            ></Image>
            <Image
              className="absolute top-8 left-10 -z-10"
              src={purpleHexagon}
              width={80}
              height={80}
            ></Image>
            <Image
              className="absolute bottom-12 left-4 -z-10 rotate-90"
              src={purpleHexagon}
              width={70}
              height={70}
            ></Image>
            <Image
              className="absolute bottom-10 right-7 -z-10"
              src={purpleHexagon}
              width={60}
              height={60}
            ></Image>
            <p>Competitive</p>
          </div>
        </button>
      </div>
    </div>
  );
}
