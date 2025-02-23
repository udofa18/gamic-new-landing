"use client";
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

type Props = {};

const Section1 = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting from the right
    hiddenLeft: { opacity: 0, x: -100 }, // Starting from the left
    visible: { opacity: 1, x: 0, y: 0 }, // Animating to the current position
    hiddenUp: { opacity: 0, y: -100 }, // Starting from above
    hiddenDown: { opacity: 0, y: 100 }, // Starting from below
    hiddenRight: { opacity: 0, x: 100 }, // Starting from the right
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-center h-screen overflow-hidden lg:px-[80px] px-2 relative flex flex-col justify-between"
    >
      <div className="lg:w-[744px] w-full m-auto flex flex-col gap-8 lg:px-20 p-2  lg:pt-[102px] pt-[0px] z-10">
        <motion.div
          initial="hiddenUp"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="lg:text-[64px] text-[51px] font-[Avenir-Heavy] lg:leading-[72px] leading-[50px] px-4">
            Chat, build communities and transact.
          </h1>
        </motion.div>
        <motion.div
          initial="hiddenDown"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="lg:text-[24px] text-[16px] text-[#9A9A9A]">
            {" "}
            The Future of Decentralized Social Networking
          </p>
        </motion.div>

        <span className="flex flex-col m-auto gap-6 lg:flex-row w-full justify-center ">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          > 
            <Link href='https://web.gamic.app'>
            <button className="bg-white inner-shadow2 hover:bg-white/50 text-black p-4 border-none  w-full rounded-md items-center flex gap-4 text-center justify-center">
              <img
                src="/icons/desk.svg"
                alt="Launch Gamic web"
                className="lg:w-[32px] w-full]"
              />{" "}
              Launch Gamic web
            </button>
            </Link>
          </motion.div>
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              className="bg-[#FB6320] shadow-inner inner-shadow text-white p-4 border-none hover:bg-[#FB6320]/50 w-full rounded-md items-center flex gap-4 text-center justify-center"
              onClick={handleOpenModal}
            >
              <img
                src="/icons/mob.svg"
                alt="Download Gamic Mobile"
                className="lg:w-[32px] w-full]"
              />{" "}
              Download Gamic Mobile
            </button>
          </motion.div>
        </span>
      </div>

      <motion.div
        className="flex items-center justify-center  flex-wrap mb-0 "
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1,
        }}
        viewport={{ once: false, amount: 0.5 }} // Animation replays when in view
      >
        <Image
          src="/ui/sec1.png"
          width={1108}
          height={812}
          alt="UI1"
          className="w-[100%] lg:w-[1108px] h-full lg:block hidden"
        />
        <img
          src="/ui/sec1Mob.png"
          alt="UI1"
          className="w-[100%] lg:w-[1108px] h-full block lg:hidden "
        />
      </motion.div>

      <div className="hidden lg:block">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
          viewport={{ once: false, amount: 0.5 }} // Animation replays when in view
        >
          <span className="absolute lg:top-[210px] top-[20px] left-[84px]">
            <Image src="/ui/aux1.png" width={241} height={44} alt="aux1" />
          </span>

          <span className="absolute lg:top-[535px] top-[450px] lg:left-[84px] left-[30px]">
            <Image src="/ui/aux2.png" width={72} height={72} alt="aux2" />
          </span>
          <span className="absolute lg:top-[110px] top-[170px]  left-[30px] lg:left-[538px]">
            <Image src="/ui/aux3.png" width={58} height={58} alt="aux3" />
          </span>
          <span className="absolute lg:top-[169.61px] bottom-[200px] lg:right-[400px] right-[100px]">
            <Image src="/ui/aux4.png" width={72} height={72} alt="aux4" />
          </span>
          <span className="absolute bottom-[200.61px] left-[500.71px]  ">
            <Image src="/ui/aux6.png" width={63} height={63} alt="aux6" />
          </span>
          <span className="absolute bottom-[200px] right-[450.71px]">
            <Image src="/ui/aux7.png" width={117} height={50} alt="aux7" />
          </span>
          <span className="absolute top-[250px] right-[84px] lg:block hidden">
            <Image src="/ui/aux8.png" width={253} height={280} alt="aux8" />
          </span>
          <span className="absolute lg:top-[360px] bottom-[150px]  lg:right-[85px] right-[200px] ">
            <Image src="/ui/aux9.png" width={56} height={56} alt="aux9" />
          </span>
          <span className="absolute lg:top-[520px] lg:right-[350px] top-[490px] right-[20px] ">
            <Image src="/ui/aux10.png" width={48} height={48} alt="aux10" />
          </span>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Section1;
