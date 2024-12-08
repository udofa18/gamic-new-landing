"use client";
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="text-center w-full lg:w-screen h-screen overflow-hidden lg:px-[80px] px-2 relative flex flex-col justify-between"
    >
      <div className="lg:w-[744px] w-full m-auto flex flex-col gap-8 lg:px-20  px-5 pt-[102px] z-10">
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
  <Image src="/icons/desk.png" alt="Launch Gamic web" width={32} height={32} /> Launch Gamic
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
  <Image src="/icons/mob.png" alt="Download Gamic Mobile" width={32} height={32} /> Download
  Gamic Mobile
</Button>
          </motion.div>
        </span>
      </div>

      <motion.div
        className="flex items-center justify-center  flex-wrap mb-0"
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
<Image src="/ui/aux1.png" width={275} height={44} alt="aux1" />
        </span>

        <span className="absolute lg:top-[535px] top-[420px] lg:left-[84px] left-[30px]">
<Image src="/ui/aux2.png" width={72} height={72} alt="aux2" />
        </span>
        <span className="absolute lg:top-[110px] top-[170px]  left-[30px] lg:left-[538px]">
<Image src="/ui/aux3.png" width={66} height={66} alt="aux3" />
        </span>
        <span className="absolute top-[169.61px] right-[400px]">
<Image src="/ui/aux4.png" width={88} height={88} alt="aux4" />
        </span>
        <span className="absolute bottom-[200.61px] left-[500.71px]  ">
<Image src="/ui/aux6.png" width={80} height={80} alt="aux6" />
        </span>
        <span className="absolute bottom-[200px] right-[450.71px]">
<Image src="/ui/aux7.png" width={141} height={141} alt="aux7" />
        </span>
        <span className="absolute top-[250px] right-[84px] lg:block hidden">
<Image src="/ui/aux8.png" width={280} height={280} alt="aux8" />
        </span>
        <span className="absolute top-[360px] right-[85px] lg:block hidden">
<Image src="/ui/aux9.png" width={72} height={72} alt="aux9" />
        </span>
        <span className="absolute lg:top-[520px] lg:right-[350px] top-[460px] right-[20px] ">
<Image src="/ui/aux10.png" width={72} height={72} alt="aux10" />
        </span>
      </div>
    </div>
  );
};

export default Section1;
