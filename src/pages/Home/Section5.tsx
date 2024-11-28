import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section5 = (props: Props) => {
  return (
    <div className="m-auto items-center p-20 flex flex-col gap-8 bg-[#F6F8FA] text-black">
      <div className="flex px-2 gap-2 border rounded-full border-[#1671D94D] m-auto text-[#1671D9] bg-[#1671D90D] w-auto text-[14px] items-center">
        <Image src="/icons/wallet.png" width={18} height={14} alt="user-icon" />
        <p>Direct Messaging</p>
      </div>
      <span className="w-[485px] text-center">
        <h1 className="font-[Avenir-Heavy] text-[40px] text-center pb-5">
        Stay Connected Privately
        </h1>
        <p className="text-[20px] text-[#666666]">
        Communicate securely with friends and groups, backed by the power of Web3.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </span>

      <div className="flex-col flex gap-4 p-10 pt-0 lg:flex-row">
        <div className="bg-[#DDD7F1] w-[521px] h-[543px] rounded-2xl p-10 pt-0 overflow-clip ">
                      <Image src="/ui/mess.webp" width={441} height={250} alt="UI1" />

          <p className="text-[24px] text-[#181818] text-center py-4 font-[Avenir-Medium]">
          Enjoy end-to-end encrypted private chats.          </p>
          
        </div>

        <div className="w-full lg:w-[763px] h-[543px] bg-[#FBDFD2] rounded-2xl p-10 pb-0 flex items-center justify-center overflow-hidden">
          <div className="mb-0">
            <Image
              src="/ui/mess2.webp"
              width={543}
              height={659}
              alt="UI1"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-4 h-[552px]">
        <div className="w-full lg:w-[736px] h-[552px] bg-[#FBE2B7] rounded-2xl  flex items-center justify-center overflow-hidden p-10">
          <div className="mb-[-40px] flex gap-4">
            <Image src="/ui/mess3.webp" width={450} height={605} alt="UI1" />
            <div className="flex flex-col gap-10 items-center py-6">
              <p className="text-2xl font-[Avenir-Medium]">
              Send digital assets directly within your chats.              </p>
              <Image
                src="/ui/woman.webp"
                width={303}
                height={329}
                alt="UI1"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[521px] h-[552px] p-10 pb-0 bg-[#EEF1D7] rounded-2xl  flex flex-col items-center  justify-center overflow-hidden">
         
          <p className="text-2xl font-[Avenir-Medium] text-center py-6">
          Create and manage groups for collaborative discussions.          </p> 
          <div className="">
            <Image src="/ui/mess4.webp" width={356} height={538} alt="UI1" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section5;
