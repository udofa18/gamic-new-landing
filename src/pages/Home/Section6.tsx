import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <div className="m-auto items-center lg:p-20 p-5 flex flex-col gap-8 bg-[#F3F1F7] text-black w-full">
      <div className="lg:flex gap-4 ">
        <div className="w-full lg:w-[736px] flex flex-col gap-2  rounded-2xl pt-10  items-left justify-center overflow-hidden lg:p-10 p-4">
          <div className="flex px-2 gap-2 border rounded-full border-[#2A799B]  text-[#2A799B] bg-[#2A799B0D]/5 w-[fit-content] text-[14px] items-center">
            <Image
              src="/icons/wallet.png"
              width={18}
              height={14}
              alt="user-icon"
            />
            <p>Earn with $GNG</p>
          </div>
          <span className="lg:w-[485px] w-full text-left flex flex-col gap-2 ">
            <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px] ">
              A token by and for Gamic{" "}
            </h1>
            <p className="lg:text-[20px] text-[18px] text-[#666666]">
              Participate in tasks and community activities to earn $GNG, our
              native token. Join our growing ecosystem and enjoy the benefits of
              decentralization.
            </p>

            <Button className="border-none shadow-lg px-4 my-5 w-[fit-content]">
              Learn more
            </Button>
          </span>
          <div className="mb-[-40px]  gap-4 bg-[#FBDFD2] p-20 flex items-center justify-center">
            <img src="/ui/GGG.webp" width={389} height={322} alt="UI1" />
          </div>
        </div>

        <div className="w-full lg:w-[521px] bg-[#DDD7F1] rounded-2xl  flex flex-col items-center  justify-center overflow-hidden">
          <div className="">
            <Image src="/ui/token.webp" width={356} height={538} alt="UI1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
