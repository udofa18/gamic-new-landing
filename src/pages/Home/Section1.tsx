import React from "react";
import bg from "/public/bg/dark-bg.png";
import { Button } from "antd";
import Image from "next/image";
type Props = {};

const Section1 = (props: Props) => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center",  }} className="text-center w-screen pt-[67px] overflow-hidden px-[80px]">
      <div className="w-[937.54px] m-auto flex flex-col gap-8">
        <h1 className=" text-[64px] font-[Avenir-Heavy]">
          The Future of Decentralized Social Networking
        </h1>
        <p className="text-[24px]">Discover. Connect. Transact. Thrive.</p>
        
        <span className="flex m-auto gap-6">
            <Button className="bg-white  inner-shadow2 text-black p-6 border-none "><img src="/icons/desk.png"/> Launch Gamic web</Button>
            <Button className="bg-[#FB6320] shadow-inner  inner-shadow text-white p-6 border-none hover:bg-[#FB6320]" ><img src="/icons/mob.png"/> Download Gamic Mobile </Button>

        </span>
      </div>
      <div className="flex items-center  justify-center mt-10">
        <Image src="/ui/sec1.png" width={1108} height={812} alt="UI1"/>
      </div>
    </div>
  );
};

export default Section1;
