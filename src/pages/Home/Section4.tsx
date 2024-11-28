import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section4 = (props: Props) => {
  return (
    <div className="m-auto items-center p-20 flex flex-col gap-8 bg-[#F6F8FA] text-black">
      <div className="flex px-2 gap-2 border rounded-full border-[#1671D94D] m-auto text-[#1671D9] bg-[#1671D90D] w-auto text-[14px] items-center">
        <Image src="/icons/wallet.png" width={18} height={14} alt="user-icon" />
        <p>Web3 Wallet</p>
      </div>
      <span className="w-[485px] text-center">
        <h1 className="font-[Avenir-Heavy] text-[40px] text-center pb-5">
        Multiple chains are 
        the way of the future.
        </h1>
        <p className="text-[20px] text-[#666666]">
        Securely manage, trade, and explore your 
        assets across multiple blockchain networks.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </span>

      <div className="flex gap-4 p-10">
        <div className="bg-[#EEF1D7] w-[736px] rounded-2xl p-10 overflow-clip pb-0 ">
          
          <Image src="/ui/wallet.webp" width={585} height={640} alt="UI1" className="m-auto"/>
        </div>

        <div className="w-full lg:w-[521px] bg-[#FBE2B7] rounded-2xl flex flex-col items-center justify-center ">
          <p className="font-[Avenir-Medium] text-2xl w-[347px]">Your Wallet, Your ControlManage your assets securely with self-custodial wallets</p>
          <div className="">
            <Image
              src="/ui/fomo.webp"
              width={297}
              height={340}
              alt="UI1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4 h-[552px] items-center">
        <div className="bg-[#FBDFD2] w-[521px] rounded-2xl p-10  pb-0 flex flex-col items-center">
          <p className="text-[24px] text-[#181818] text-center  font-[Avenir-Medium] py-4">
          Intelligent management and seamless transactions at your fingertips.          </p>
          
          <Image src="/ui/wallet2.webp" width={403} height={250} alt="UI1" />
        </div>

        <div className="w-full lg:w-[736px] bg-[#DDD7F1] h-[552px] rounded-2xl p-4  px-10 pb-0 flex items-center justify-center overflow-hidden">
          <div className="">
            <Image
              src="/ui/swap.webp"
              width={650}
              height={659}
              alt="UI1"
            />

          </div>
          <div className="flex flex-col items-center p-5">
            <p className="text-[24px] text-[#181818] text-left  font-[Avenir-Medium] py-4">          Effortless swapping with automatic bridging. No more multi-chain headaches.
            </p>
            <div className="p-10">

            <Image
              src="/ui/chain.webp"
              width={270}
              height={269}
              alt="UI1"
            />
            </div>
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default Section4;
