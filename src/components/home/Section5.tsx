"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { motion } from "framer-motion";

type Props = {};

const Section5 = (props: Props) => {

  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
  };
  return (
    <div className="m-auto items-center lg:p-20 py-5 flex flex-col gap-8 bg-[#F6F8FA] text-black  h-full">
      <motion.div className="flex px-2 gap-2 border rounded-full border-[#1671D94D] m-auto text-[#1671D9] bg-[#1671D90D] w-auto text-[14px] items-center"
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}>
        <Image src="/icons/wallet.png" width={18} height={14} alt="user-icon" />
        <p>Direct Messaging</p>
      </motion.div>
      <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >        <h1 className="font-[Avenir-Heavy]  lg:text-[40px] text-[30px]  text-center pb-5">
        Stay Connected Privately
        </h1>
        <p className="lg:text-[20px] text-[18px] text-[#666666]">
        Communicate securely with friends and groups, backed by the power of Web3.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </motion.div>

      <div className="flex-col flex gap-4 lg:p-10 p-4 pt-0 lg:flex-row">
        <div className="bg-[#DDD7F1] lg:w-[521px] w-full lg:h-[543px] h-full rounded-2xl p-10 pt-0 overflow-clip ">
        <motion.div
            initial="hiddenDown"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
                      <img src="/ui/mess.svg" width={441} height={250} alt="UI1" className="" />

          <p className="text-[24px] text-[#181818] text-center py-4 font-[Avenir-Medium]">
          Enjoy end-to-end encrypted private chats.          </p>
          </motion.div>

        </div>

        <div className="w-full lg:w-[763px] lg:h-[543px] h-full bg-[#FBDFD2] rounded-2xl lg:p-10 p-4 pb-0 flex items-center justify-center overflow-hidden">
          <div className="mb-0">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/ui/mess2.svg"
             
              alt="UI1"
              className="lg:w-[543px] w-full"
            />
                      </motion.div>

          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 lg:h-[552px] h-full p-2">
        <div className="w-full lg:w-[736px] lg:h-[552px] h-full bg-[#FBE2B7] rounded-2xl  flex lg:flex-row flex-col  items-center justify-center overflow-hidden lg:p-10 p-4">
        <motion.div
            initial="hiddenUp"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
          <div className="mb-[-40px] flex lg:flex-row flex-col gap-4">
            <Image src="/ui/mess3.svg" width={450} height={605} alt="UI1" />
            <div className="flex flex-col gap-10 items-center py-6">
              <p className="text-2xl font-[Avenir-Medium]">
              Send digital assets directly within your chats.              </p>
              <img
                src="/ui/woman.svg"
                width={303}
                height={329}
                alt="UI1"
                className="lg:w-[303px]  w-[150px]"
              />
            </div>
          </div>
          </motion.div>

        </div>

        <div className="w-full lg:w-[521px] lg:h-[552px] h-full lg:p-10 lg:pb-0 p-4  bg-[#EEF1D7] rounded-2xl  flex flex-col items-center  justify-center overflow-hidden">
        <motion.div
       initial="hiddenDown"
       whileInView="visible"
       variants={containerVariants}
       transition={{ duration: 0.3 }}
       viewport={{ once: false, amount: 0.3 }}  >
          <p className="text-2xl font-[Avenir-Medium] text-center py-6">
          Create and manage groups for collaborative discussions.          </p> 
          <div className="">
            <Image src="/ui/mess4.svg" width={356} height={538} alt="UI1" className="m-auto" />
          </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default Section5;
