"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import bg from "/public/bg/dark-bg.webp";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Section6 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
  };
  return (
    <div className="m-auto items-center lg:p-20 p-5 flex flex-col gap-8 bg-[#F3F1F7] text-black ">
      <div className="flex lg:flex-row flex-col gap-4 ">
        <div className="w-full lg:w-[736px] flex flex-col gap-2  rounded-2xl pt-10  items-left justify-center overflow-hidden lg:p-10 p-2">
          <motion.div
            className="flex px-2 gap-2 border rounded-full border-[#2A799B]  text-[#2A799B] bg-[#2A799B0D]/5 w-[fit-content] text-[14px] items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/earn.svg"
              width={18}
              height={14}
              alt="user-icon"
            />
            <p>Earn with $GNG</p>
          </motion.div>
          <motion.div
            className="lg:w-[485px] w-full text-left flex flex-col gap-2 "
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px] ">
              A token by and for Gamic{" "}
            </h1>
            <p className="lg:text-[20px] text-[18px] text-[#666666]">
              Participate in tasks and community activities to earn $GNG, our
              native token. Join our growing ecosystem and enjoy the benefits of
              decentralization.
            </p>

            <Link
              href="https://docs.gamic.gg/welcome-to-gamic/overview/value-proposition"
              target="_blank"
            >
              {" "}
              <Button className="border-none shadow-lg px-4 my-5 w-[fit-content]">
                Learn more
              </Button>
            </Link>
          </motion.div>

          <div className="mb-[-40px]  gap-4 bg-[#FBDFD2] p-20 flex items-center justify-center">
            <motion.div
              className="lg:w-[485px] text-center w-full "
              initial="hiddenDown"
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src="/ui/GGG.svg"
                width={389}
                height={322}
                alt="UI1"
                className="m-auto"
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-[521px] bg-[#DDD7F1] rounded-2xl  flex flex-col items-center  justify-center overflow-hidden">
          <motion.div
            className="lg:w-[485px] text-center w-full "
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="">
              <Image
                src="/ui/token.svg"
                width={356}
                height={538}
                alt="UI1"
                className="m-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
