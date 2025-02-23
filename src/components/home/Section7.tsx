"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";

type Props = {};

const Section7 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
  };
  return (
    <div className="lg:p-20 py-20 bg-white text-black text-center ">
        <p className="lg:text-[48px] text-[24px] font-[Avenir-Heavy] ">Backed by Global Leaders 
        Built for You.</p>
    <div
      className="m-auto items-center lg:p-20 py-20 flex flex-col gap-8 bg-[#F6F8FA] text-black  h-full"
      id="messangers"
    >
      <motion.div
        className="flex px-2 gap-2 border rounded-full border-[#9B2A8A4D] m-auto text-[#9B2A8A] bg-[#9B2A8A0D] w-auto text-[14px] items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/icons/earn.svg" width={18} height={14} alt="user-icon" />
        <p>Our Numbers</p>
      </motion.div>
      <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {" "}
        <h1 className="font-[Avenir-Heavy]  lg:text-[40px] text-[30px]  text-center pb-5">
          We’re a distributed team
        </h1>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center  m-auto gap-4 align-middle">
      <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span className="border-t p-4 flex gap-8 text-2xl">
          <p>Unique humans</p>

          <CountUp start={1000} end={11106611} duration={5} separator="," />
        </span>
        </motion.div>
        <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span>
          <img src="/ui/Map.svg" alt="UI1" className="m-auto" />
        </span>
        </motion.div>
        <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span>
          <img src="/ui/othercount.svg" alt="UI1" className="m-auto" />
        </span>
        </motion.div>

      </div>
    </div>
    </div>
  );
};

export default Section7;
