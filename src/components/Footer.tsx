"use client";
import React from "react";
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import  { useState } from 'react';
import Modal from '../components/home/Modal';
import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
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
      }}
      className="text-center w-screen pt-[67px] overflow-hidden lg:px-[80px] px-[10px]"
    >
      <div className="lg:w-[937.54px] m-auto flex flex-col gap-8 w-full ">
        <h1 className=" lg:text-[64px] font-[Avenir-Heavy] text-[40px]">
          Become a GNGSTAR. Join the Revolution Today.{" "}
        </h1>
        <p className="text-[20px] text-[#9A9A9A]">
          Step into the future with us. Be part of the movement that’s
          redefining decentralization. Together, we’re creating something
          extraordinary.
        </p>
        <span className="flex flex-col m-auto gap-6 lg:flex-row w-full justify-center ">
          <motion.div
            initial="hiddenLeft"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
<button className="bg-white inner-shadow2 hover:bg-white/50 text-black p-4 border-none  w-full rounded-md items-center flex gap-4 text-center justify-center">
  <img src="/icons/desk.svg" alt="Launch Gamic web" className="lg:w-[32px] w-full]" /> Launch Gamic
  web
</button>
          </motion.div>
          <motion.div
            initial="hiddenRight"
            whileInView="visible"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
<button className="bg-[#FB6320] shadow-inner inner-shadow text-white p-4 border-none hover:bg-[#FB6320]/50 w-full rounded-md items-center flex gap-4 text-center justify-center" onClick={handleOpenModal}
>
  <img src="/icons/mob.svg" alt="Download Gamic Mobile" className="lg:w-[32px] w-full]"  /> Download
  Gamic Mobile
</button>
          </motion.div>
        </span>
      
      </div>

      <div className="py-20 text-[14px] lg:gap-20 gap-10  flex justify-between lg:flex-row flex-col">
        <div className="">
          <img src="/Brand/logo2.svg"  alt="UI1 " className="w-[116px]" />
        </div>

        <div>
          <div className="px-4 text-left py-20 lg:py-0 ">
            <div className="grid justify-between lg:gap-20 lg:grid-cols-6 grid-cols-2 gap-8">
              <div>
                <h3 className=" font-semibold mb-2">Features</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Communities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Create Space
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Messangers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Wallet
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold mb-2">Gamic</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                  <Link href="https://docs.gamic.gg/welcome-to-gamic/roadmap/roadmap" target="_blank"  className="text-gray-400 hover:text-white">
                      Roadmap
                    </Link>
                  </li>
                  <li>
                  <Link href="https://docs.gamic.gg/welcome-to-gamic/team/core-team" target="_blank" className="text-gray-400 hover:text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Brand
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold mb-2">Help</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Spaces
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Messaging
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      More
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold mb-2">Collaborate</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Discuss
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Upvote
                    </a>
                  </li>
                  <li>
                  <Link href="https://medium.com/@gamicHQ" target="_blank"  className="text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold mb-2">Developers</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <Link href="https://docs.gamic.gg/welcome-to-gamic/" target="_blank" className="text-gray-400 hover:text-white">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Insights
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Specs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className=" font-semibold mb-2">GNG</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Token
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Release Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                  <Link href="https://docs.gamic.gg/welcome-to-gamic/economics/tokenomics-usdgng/governance" target="_blank" className="text-gray-400 hover:text-white">
                      Governance
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Exchange
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left flex flex-wrap text-[14px] gap-4 text-[#9A9A9A] justify-between py-10">
        <div className="flex flex-wrap gap-4">
          <p> © Gamic HQ 2024</p>
          <ul className="flex gap-4">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Security</li>
          </ul>{" "}
        </div>

        <div>
          <ul className="flex text-white gap-8">
            <li>
            <Link href="https://twitter.com/mygamichq" target="_blank">

              <BsTwitterX />
              </Link>
            </li>
            <li>
            <Link href="https://youtube.com/@gamicHQ" target="_blank">

            <FaYoutube />
            </Link>
            </li>
            <li>
            <Link href="https://github.com/Artist3-NFT" target="_blank">

            <FaGithub />
            </Link>
            </li>
            <li>
            <Link href="https://instagram.com/gamichq?igshid=YmMyMTA2M2Y=" target="_blank">
            <FaSquareInstagram />
            </Link>
            </li>
            <li>
            <Link href="https://t.me/gamicapp" target="_blank">
            <FaTelegram />
            </Link>
            </li>
            <li>
              
              <Link href="https://www.linkedin.com/company/@gamicHQ" target="_blank">
            <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
};

export default Footer;
