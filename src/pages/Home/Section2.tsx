"use client";
import React from "react";
import bg from "/public/bg/sec2.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {};

const Section2 = (props: Props) => {

  const [offset, setOffset] = useState(0);
  const speed = 2; // Adjust scroll speed
  const partnerWidth = 100; // Width of a single partner (adjust as needed)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev >= partnerWidth * partners.length ? 0 : prev + 1));
    }, speed);

    return () => clearInterval(interval);
  }, []);
  
  const partners = [
    "./partners/polygon.png",
    "./partners/angel.png",
    "./partners/arch.png",
    "./partners/base.png",
    "./partners/bits.png",
    "./partners/blast.png",
    "./partners/bull.png",
    "./partners/community.png",
    "./partners/coral.png",
  ];

  const partners2 = [
    "./partners/core.png",
    "./partners/gamepride.png",
    "./partners/games.png",
    "./partners/gate.png",
    "./partners/huddle.png",
    "./partners/immutable.png",
    "./partners/kgen.png",
    "./partners/linea.png",
    "./partners/manta.png",
    "./partners/onramp.png",
    "./partners/ordilink.png",
    "./partners/scalex.png",
    "./partners/super.png",
    "./partners/wicrypt.png",
  ];


  
  return (
    <><div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative l overflow-hidden py-5 bg-white px-2  w-screen  "
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-95" />

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid grid-cols-7 h-full">
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
          <div className="border-l border-white opacity-5" />
        </div>
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
              }} />
          ))}
        </div>
      </div>

      {/* Animated Content */}
      <motion.div
        className="relative z-5 text-white m-auto items-center py-20 flex flex-col gap-8 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} // Animation replays when in view
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex p-1 gap-2 border rounded-full border-[#B0FC00] m-auto text-[#B0FC00] bg-[#B0FC00]/5 w-[183px] text-[14px] items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Image
            src="/icons/users.png"
            width={18}
            height={14}
            alt="user-icon" />
          <p>Partners & Ecosystem</p>
        </motion.div>

        <motion.h1
          className="font-[Avenir-Heavy] text-[40px] text-2xl text-center lg:w-[700px] pb-20  w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Powered by 16+ chains, supported by our ecosystem partners.
        </motion.h1>

        <div className="flex flex-col gap-8 items-center overflow-hidden w-screen ">
        <motion.ul
        className="flex gap-10 animate-slide items-center "
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...partners, ...partners,...partners,...partners,...partners].map((partner, index) => (
        <li key={index} style={{ flex: "0 0 auto" }}>
        <img src={partner} alt={`partner-${index}`} style={{ width: "auto", height: "auto" }} />
      </li>
        ))}
      </motion.ul>

          <motion.ul
            className="flex gap-10 animate-slide  "
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 100,
              ease: "linear",
              repeat: Infinity,
            }}>
           {[...partners2, ...partners2,...partners2,...partners2,...partners2].map((partner, index) => (
        <li key={index} style={{ flex: "0 0 auto" }}>
        <img src={partner} alt={`partner-${index}`} style={{ width: "auto", height: "auto" }} />
      </li>
        ))}
          </motion.ul>
        </div>
      </motion.div>
      <div className="relative overflow-hidden">

  
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-scroll {
      display: flex;
      animation: scroll 30s linear infinite;
      width: max-content; /* Ensure items do not wrap */
    }
  `}</style>
</div>


    
      </div>

      </>
  );
};

export default Section2;
