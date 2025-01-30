import React from "react";
import Image from "next/image";

const Section7 = () => {
  return (
    <div className="lg:p-20 py-20 bg-white text-black text-center ">
        <p className="lg:text-[48px] text-[24px] font-[Avenir-Heavy] ">Backed by Global Leaders 
        Built for You.</p>

        <div className=" gap-6 lg:p-20 p-5 m-auto align-center flex flex-wrap items-center lg:w-[1002px] w-full justify-center">
          <img src="/investors/binance.svg"/>
          <img src="/investors/LD.svg"/>
          <img src="/investors/Polygon.svg"/>
          <img src="/investors/mulana.svg"/>
          <img src="/investors/dweb3.svg"/>
          <img src="/investors/maple.svg"/>
          <img src="/investors/xend.svg"/>
          <img src="/investors/moment.svg"/>
            {/* <Image src="/ui/investors.svg" width={900} height={117} alt="UI1" /> */}
          </div>
    </div>
  );
};

export default Section7;