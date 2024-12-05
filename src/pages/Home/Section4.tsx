import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section4 = (props: Props) => {
  return (
    <div className="m-auto items-center lg:p-20 p-5 flex flex-col gap-8 bg-[#F6F8FA] text-black w-full">
      <div className="flex px-2 gap-2 border rounded-full border-[#1671D94D] m-auto text-[#1671D9] bg-[#1671D90D] w-auto text-[14px] items-center">
        <Image src="/icons/wallet.png" width={18} height={14} alt="user-icon" />
        <p>Web3 Wallet</p>
      </div>
      <span className="lg:w-[485px] w-full text-center">
        <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px]  text-center pb-5">
        Multiple chains are 
        the way of the future.
        </h1>
        <p className="lg:text-[20px] text-[18px] text-[#666666]">
        Securely manage, trade, and explore your 
        assets across multiple blockchain networks.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </span>

      <div className="flex lg:flex-row flex-col gap-4 lg:p-10 p-2 w-full overflow-hidden">
        <div className="bg-[#EEF1D7] lg:w-[736px] w-full rounded-2xl p-10 overflow-clip pb-0 ">
          
          <img src="/ui/wallet.webp"  alt="UI1" className="m-auto  lg:w-[585px] lg:h-[640] h-full w-full"/>
        </div>

        <div className="w-full lg:w-[521px] bg-[#FBE2B7] rounded-2xl flex flex-col items-center justify-center p-5">
          <p className="font-[Avenir-Medium] lg:text-2xl text-xl lg:w-[347px] w-full">Your Wallet, Your ControlManage your assets securely with self-custodial wallets</p>
          <div className="p-10">
            <img
              src="/ui/fomo.webp"
              width={297}
              height={340}
              alt="UI1"
              className="lg:w-[297px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4 lg:flex-row flex-col lg:h-[552px] h-full items-center w-full">
        <div className="bg-[#FBDFD2] lg:w-[521px] w-full rounded-2xl p-10  pb-0 flex flex-col items-center">
          <p className="text-[24px] text-[#181818] text-center  font-[Avenir-Medium] py-4">
          Life happens. Your guardians 
          are here to be your safety net.</p>
          
          <Image src="/ui/wallet2.webp" width={403} height={250} alt="UI1" />
        </div>

        <div className="w-full lg:w-[736px] bg-[#DDD7F1]  lg:h-[552px] h-full  rounded-2xl p-4  lg:px-10 px-4 pb-0 flex lg:flex-row flex-col items-center justify-center ">
          <div className="">
            <img
              src="/ui/swap.webp" 
              alt="UI1"
              className="lg:w-[650px] w-full h-[500px] "
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
              className="lg:w-[270px]  w-full"
            />
            </div>
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default Section4;
