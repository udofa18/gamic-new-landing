import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <div className="m-auto items-center p-20 flex flex-col gap-8 bg-white text-black">
      <div className="flex px-2 gap-2 border rounded-full border-[#FC6600] m-auto text-[#FC6600] bg-[#FC6600]/5 w-auto text-[14px] items-center">
        <Image src="/icons/users2.png" width={18} height={14} alt="user-icon" />
        <p>Communities</p>
      </div>
      <span className="w-[485px] text-center">
        <h1 className="font-[Avenir-Heavy] text-[40px] text-center pb-5">
          One App for Everything Community and Crypto
        </h1>
        <p className="text-[20px] text-[#666666]">
          Create or join communities—Gamic unites SocialFi, DeFi, GameFi, and AI
          for a seamless experience tailored to gamers, creators, and digital
          explorers.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </span>

      <div className="flex gap-4 p-10">
        <div className="bg-[#FBE2B7] w-[521px] rounded-2xl p-10 overflow-clip ">
          <p className="text-[24px] text-[#181818] w-[347px] font-[Avenir-Medium]">
            Discover communities or create your own.
          </p>
          <div className="py-10  w-[478px] relative">
            <ul className="flex gap-2 text-center text-[12px] overflow-hidden w-[878px] ">
              <li className="bg-[#181818] text-white rounded-lg p-2 w-[96px]">
                All spaces
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Music
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Gaming
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Videos
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Work
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Studies
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Work
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Work
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Work
              </li>
              <li className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 w-[96px] text-black">
                Work
              </li>
            </ul>
          </div>
          <Image src="/ui/community.webp" width={441} height={250} alt="UI1" />
        </div>

        <div className="w-full lg:w-[763px] bg-[#DDD7F1] rounded-2xl pt-10 flex items-center justify-center overflow-hidden">
          <div className="mb-[-40px]">
            <Image
              src="/ui/community2.webp"
              width={543}
              height={659}
              alt="UI1"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-4 ">
        <div className="w-full lg:w-[736px] bg-[#EEF1D7] rounded-2xl pt-10 flex items-center justify-center overflow-hidden p-10">
          <div className="mb-[-40px] flex gap-4">
            <Image src="/ui/airdrop.webp" width={450} height={605} alt="UI1" />
            <div className="flex flex-col justify-between ">
              <p className="text-2xl font-[Avenir-Medium]">
                Claim or airdrop token seamlessly to your community
              </p>
              <Image
                src="/ui/airdrop1.2.webp"
                width={388}
                height={388}
                alt="UI1"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[521px] bg-[#FBDFD2] rounded-2xl  flex flex-col items-center  justify-center overflow-hidden">
          <div className="mt-[-10px]">
            <Image src="/ui/airdrop2.webp" width={356} height={538} alt="UI1" />
          </div>
          <p className="text-2xl font-[Avenir-Medium] text-center py-6">
            Share and receive digital assets seamlessly within your communities.
          </p>
        </div>
      </div>
<div className=" lg:w-[1280px] w-full ">
      <div className=" rounded-[20px]   w-full  text-white overflow-hidden " style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center",  }}>
        
        <div className="bg-[#FC6600]/[50%] px-20 pt-20 flex flex-col gap-5 ">
          <div className="w-[485px] text-center flex flex-col m-auto ">
          <h1 className="font-[Avenir-Medium] text-[28px] text-center pb-5">
          Build Your Own Decentralized Community
                    </h1>
          <p className="text-[20px] ">
          From public hubs to private sanctuaries, 
          create spaces that match your vision.
          </p>

          <Button className="border-none shadow-lg px-4 my-5 w-[264px] m-auto">
          Learn about community management
          </Button>
        </div>
        <div className="">
        <Image
                src="/ui/space.webp"
                width={1178}
                height={609}
                alt="UI1"
              />
        </div>
      </div>
      </div>
          </div>
    </div>
  );
};

export default Section3;
