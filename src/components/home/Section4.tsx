"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";
import { motion } from "framer-motion";

type Props = {};

const Section4 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
  };

  return (
    <div className="m-auto items-center lg:p-20 py-4 flex flex-col gap-8 bg-[#F6F8FA] text-black p-2 ">
      <motion.div
        className="flex px-2 gap-2 border rounded-full border-[#1671D94D] m-auto text-[#1671D9] bg-[#1671D90D] w-auto text-[14px] items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/icons/wallet.png" width={18} height={14} alt="user-icon" />
        <p>Web3 Wallet</p>
      </motion.div>
      <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px]  text-center pb-5">
          Multiple chains are the way of the future.
        </h1>
        <p className="lg:text-[20px] text-[18px] text-[#666666]">
          Securely manage, trade, and explore your assets across multiple
          blockchain networks.
        </p>

        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </motion.div>

      <div className="flex lg:flex-row flex-col gap-4 lg:p-10 p-2 w-full  items-center justify-center   ">
        <div className="bg-[#EEF1D7] lg:w-[736px] w-full rounded-2xl p-10 overflow-clip pb-0  lg:h-[544px] ">
          <motion.div
            initial="hiddenDown"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/ui/wallet.svg"
              alt="UI1"
              className="m-auto  lg:w-[585px] lg:h-[640] h-full w-full"
            />
          </motion.div>
        </div>

        <div className="w-full lg:w-[521px] bg-[#FBE2B7] rounded-2xl flex flex-col items-center justify-center p-5  lg:h-[544px] ">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="font-[Avenir-Medium] lg:text-2xl text-xl lg:w-[347px] w-full  p-5">
              Your Wallet, Your ControlManage your assets securely with
              self-custodial wallets
            </p>
            <div className="p-5">
              <img
                src="/ui/fomo.svg"
                alt="UI1"
                className="lg:w-[297px] w-[200px] m-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-4 p-2 lg:flex-row flex-col lg:h-[552px] h-full justify-center w-full m-auto">
        <div className="bg-[#FBDFD2] lg:w-[521px] w-full rounded-2xl p-10 h-full overflow-hidden  pb-0 flex flex-col items-center  lg:h-[544px] ">
          <motion.div
            initial="hiddenUp"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-[24px] text-[#181818] text-center  font-[Avenir-Medium] py-4">
              Life happens. Your guardians are here to be your safety net.
            </p>

            <Image src="/ui/wallet2.svg" width={403} height={250} alt="UI1" />
          </motion.div>
        </div>

        <div className="w-full lg:w-[736px] bg-[#DDD7F1]   h-full  rounded-2xl p-4  lg:px-10 px-4 pb-0 flex lg:flex-row flex-col items-center justify-center  lg:h-[544px]  ">
          <motion.div
            initial="hiddenUp"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="">
              <img
                src="/ui/swap.svg"
                alt="UI1"
                className="lg:w-[650px] w-full h-[500px] "
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center p-5">
          <motion.div
       initial="hiddenUp"
       whileInView="visible"
       variants={containerVariants}
       transition={{ duration: 0.3 }}
       viewport={{ once: false, amount: 0.3 }}  >
            <p className="text-[24px] text-[#181818] text-left  font-[Avenir-Medium] py-4">
              {" "}
              Effortless swapping with automatic bridging. No more multi-chain
              headaches.
            </p>
            <div className="p-10">
              <img
                src="/ui/chain.svg"
                alt="UI1"
                className="lg:w-[270px]  w-full"
              />
            </div>
            </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
