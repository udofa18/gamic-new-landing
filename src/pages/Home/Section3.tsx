import React from "react";
import Image from "next/image";
import { Button } from "antd";

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

      <div className="flex gap-4">
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
          <Image src="/ui/community.png" width={441} height={250} alt="UI1" />
        </div>

        <div className="w-full lg:w-[763px] bg-[#DDD7F1] rounded-2xl pt-10 flex items-center justify-center ">
          <Image src="/ui/community2.png" width={543} height={659} alt="UI1" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
