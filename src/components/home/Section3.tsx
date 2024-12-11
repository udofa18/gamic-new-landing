"use client";
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { motion } from "framer-motion";
import bg from "/public/bg/dark-bg.webp";

type Props = {};

const Section3 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 },
    hiddenDown: { opacity: 0, y: 100 },
  };

  return (
    <div className="m-auto items-center lg:p-20 p-2 flex flex-col gap-8 bg-white text-black overflow-hidden">
      {/* Badge */}
      <motion.div
        className="flex px-2 gap-2 border rounded-full border-[#FC6600] m-auto text-[#FC6600] bg-[#FC6600]/5 w-auto text-[14px] items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/icons/users2.png" width={18} height={14} alt="user-icon" />
        <p>Communities</p>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="lg:w-[485px] text-center w-full "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px] text-center pb-5">
          One App for Everything Community and Crypto
        </h1>
        <p className="lg:text-[20px] text-[18px] text-[#666666]">
          Create or join communities—Gamic unites SocialFi, DeFi, GameFi, and AI
          for a seamless experience tailored to gamers, creators, and digital
          explorers.
        </p>
        <Button className="border-none shadow-lg px-4 my-5">Learn more</Button>
      </motion.div>

      {/* Animated Flex Sections */}
      <div className="flex lg:flex-row flex-col gap-4 lg:p-10 p-2 w-full overflow-hidden items-center justify-center lg:h-[544px] ">
        <motion.div
          className="bg-[#FBE2B7] lg:w-[521px] w-full rounded-2xl lg:p-10 p-4 overflow-clip"
          initial="hiddenLeft"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[24px] text-[#181818] lg:w-[347px] w-full  font-[Avenir-Medium]">
            Discover communities or create your own.
          </p>
          <div className="py-10 lg:w-[478px] w-fit relative">
            <ul className="flex  gap-2 text-center text-[12px] overflow-hidden lg:w-[1000px] w-fit ">
              <li className="bg-[#181818] text-white rounded-lg p-2 w-[96px]">
                All spaces
              </li>
              {[
                { name: "Music", img: "/icons/music.svg" },
                { name: "Gaming", img: "/icons/game.svg" },
                { name: "Videos", img: "/icons/tv.svg" },
                { name: "Work", img: "/icons/case.svg" },
                { name: "Studies", img: "/icons/books.svg" },
              ].map((category, index) => (
                <li
                  key={index}
                  className="bg-[#F7D394] border border-[#F7C164] rounded-lg p-2 lg:w-[96px] w-fit text-black flex items-center"
                >
                  <img
                    src={category.img} // Use the specific image for each category
                    alt={category.name} // Use the category name for the alt attribute
                    className="w-6 h-6 mr-2" // Adjust size and margin as needed
                  />
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <img src="/ui/comm1.svg" alt="UI1" className="w-full lg:w-[441px]" />
        </motion.div>

        <motion.div
          className="w-full lg:w-[763px] p-10 bg-[#DDD7F1] rounded-2xl pt-10 flex items-center justify-center overflow-hidden  lg:h-[544px] pb-0"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className=" overflow-hidden">
            <motion.div
              initial="hiddenDown"
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src="/ui/community2.svg"
                alt="UI2"
                className="lg:w-[543px] w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Additional Flex Sections */}
      <div className="flex gap-4 w-full lg:flex-row flex-col justify-center w-ful overflow-hidden  lg:h-[544px] h-full ">
        <motion.div
          className="w-full lg:w-[736px] bg-[#EEF1D7] rounded-2xl pt-10 flex items-center justify-center overflow-hidden lg:p-10 p-2"
          initial="hiddenLeft"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mb-[-40px] flex lg:flex-row flex-col gap-4">
            <motion.div
              initial="hiddenLeft"
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/ui/airdrop.svg"
                width={450}
                height={605}
                alt="UI3"
                className="w-full lg:w-[450px]"
              />
            </motion.div>

            <div className="flex flex-col justify-between ">
              <p className="text-2xl font-[Avenir-Medium]">
                Effortlessly claim or airdrop tokens to your network.{" "}
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="m-auto"
              >
                <img
                  src="/ui/airdrop1.svg"
                  alt="UI4"
                  className=" lg:w-[338px] w-[200px] "
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[521px] bg-[#FBDFD2] rounded-2xl flex flex-col items-center justify-center overflow-hidden"
          initial="hiddenLeft"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mt-[-10px]">
            <motion.div
              initial="hiddenDown"
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src="/ui/airdrop2.svg"
                width={356}
                height={538}
                alt="UI5"
                className="lg:w-[356px] w-full m-auto"
              />
            </motion.div>
          </div>
          <p className="lg:text-2xl text-xl font-[Avenir-Medium] text-center py-6">
            Share and receive digital assets seamlessly within your communities.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="lg:w-[1280px] w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div
          className="rounded-[20px] w-full text-white overflow-hidden"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-[#FC6600]/[50%] lg:px-20 pt-20 flex flex-col gap-5 px-5  overflow-hidden">
            <div className="lg:w-[485px] w-full text-center flex flex-col m-auto">
              <h1 className="font-[Avenir-Medium] text-[28px] text-center pb-5">
                Build Your Own Decentralized Community
              </h1>
              <p className="text-[20px]">
                From public hubs to private sanctuaries, create spaces that
                match your vision.
              </p>
              <Button className="border-none shadow-lg px-4 my-5 lg:w-[264px] w-full m-auto">
                Learn about community management
              </Button>
            </div>
            <motion.div
              initial="hiddenLeft"
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
            <Image
              src="/ui/man.svg"
              width={1178}
              height={609}
              alt="UI6"
              className="w-full lg:w-[1178px] hidden lg:block m-auto"
            />
                  </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;
