"use client";
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-center w-full lg:w-screen  overflow-hidden lg:px-[80px] px-2 relative"
    >
      <div className="lg:w-[744px] w-full m-auto flex flex-col gap-8 lg:px-20  px-5 pt-[262px]">
        <motion.div
          initial="hiddenUp"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="lg:text-[64px] text-[40px] font-[Avenir-Heavy] lg:leading-[72px] leading-10">
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
        <p className="text-[24px] text-[#9A9A9A]">
          {" "}
          The Future of Decentralized Social Networking
        </p>
        </motion.div>

        <span className="flex flex-col m-auto gap-6 lg:flex-row ">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Button className="bg-white inner-shadow2 text-black p-6 border-none ">
              <img src="/icons/desk.png" alt="Launch Gamic web" /> Launch Gamic
              web
            </Button>
          </motion.div>
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Button className="bg-[#FB6320] shadow-inner inner-shadow text-white p-6 border-none hover:bg-[#FB6320] w-full">
              <img src="/icons/mob.png" alt="Download Gamic Mobile" /> Download
              Gamic Mobile
            </Button>
          </motion.div>
        </span>
      </div>

      <motion.div
        className="flex items-center justify-center mt-10 flex-wrap"
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
          className="w-[100%] lg:w-[1108px] h-full "
        />
      </motion.div>

      <div>
        <span className="absolute lg:top-[210px] top-[50px] left-[84px]">
          <img src="/ui/aux1.png" className="w-[275px] " />
        </span>

        <span className="absolute lg:top-[535px] top-[350px] lg:left-[84px] left-[40px]">
          <img src="/ui/aux2.png" className="w-[72px]" />
        </span>
        <span className="absolute lg:top-[110px] top-[200px]  left-[100px] lg:left-[538px]">
          <img src="/ui/aux3.png" className="w-[66px]" />
        </span>
        <span className="absolute top-[169.61px] right-[400px]">
          <img src="/ui/aux4.png" className="w-[88px]" />
        </span>
        <span className="absolute top-[650.61px] left-[538.71px]  ">
          <img src="/ui/aux6.png" className="w-[80px]" />
        </span>
        <span className="absolute top-[650px] left-[940.71px]">
          <img src="/ui/aux7.png" className="w-[141px]" />
        </span>
        <span className="absolute top-[379px] right-[84px] lg:block hidden">
          <img src="/ui/aux8.png" className="w-[280px]" />
        </span>
        <span className="absolute top-[360px] right-[85px] lg:block hidden">
          <img src="/ui/aux9.png" className="w-[72px]" />
        </span>
        <span className="absolute top-[520px] right-[350px] lg:block hidden">
          <img src="/ui/aux10.png" className="w-[72px]" />
        </span>
      </div>
    </div>
  );
};

export default Section1;
