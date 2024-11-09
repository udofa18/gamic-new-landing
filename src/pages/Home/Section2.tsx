import React from "react";
import bg from "/public/bg/sec2.png";
import Image from "next/image";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensure the background covers the entire div
      }}
      className="relative  px-[80px] overflow-hidden py-5 bg-white"
    >
      {/* Overlay div */}
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-95" />

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Lines */}
        <div className="grid grid-cols-7 h-full">
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
        </div>
        {/* Horizontal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-white opacity-5"
              style={{
                height: "1px",
                width: "100%",
                position: "absolute",
                top: `${index * 25}%`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-5 text-white m-auto items-center py-20 flex flex-col gap-8">
        <div className="flex p-1 gap-2 border rounded-full border-[#B0FC00] m-auto text-[#B0FC00] bg-[#B0FC00]/5 w-[183px] text-[14px] items-center">
            <Image src="/icons/users.png" width={18} height={14} alt="user-icon"/>
            <p>Partners & Ecosystem</p>
        </div>
        <h1 className="font-[Avenir-Heavy] text-[40px] text-center w-[700px] pb-20">Powered by 16+ chains, supported 
        by our ecosystem partners.</h1>

        <Image src="/ui/partners.png" width={1128} height={250} alt="partners"/>

      </div>
    </div>
  );
};

export default Section2;
