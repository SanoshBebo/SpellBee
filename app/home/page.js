import Button from "@/components/Button";
import BackCloseButtons from "@/components/BackCloseButtons";
import Image from "next/image";
import homeScreenBeeLeft from "../../assets/HomeScreenBeeLeft.svg";
import homeScreenBeeRight from "../../assets/HomeScreenBeeRight.svg";
import pic from "../../assets/profile.jpg";
export default function home() {
  return (
    <div className="bg-primary h-full ">
      <BackCloseButtons></BackCloseButtons>
      <div className=" h-full float-left flex items-center ml-16 pt-56">
        <Image src={homeScreenBeeLeft} height="350" width="350"></Image>
      </div>
      <div className=" h-full float-right flex items-center mr-16 pt-56">
        <Image src={homeScreenBeeRight} height="350" width="350"></Image>
      </div>
      <div className="bg-primary w-[25%] h-full mx-auto">
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
        <div className="flex-col w-full mt-16">
          <div>
            <Button
              inverted={true}
              text="PLAY"
              containerClassName="w-full mb-4"
              textClassName="py-5 font-lilita text-4xl"
            ></Button>
          </div>
          <div>
            <Button
              inverted={true}
              text="VOCABULARY"
              containerClassName="w-full mb-4"
              textClassName="py-5 font-lilita text-4xl"
            ></Button>
          </div>
          <div>
            <Button
              inverted={true}
              text="LEADERBOARDS"
              containerClassName="w-full mb-4"
              textClassName="py-5 font-lilita text-4xl"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
