import React from "react";
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";const Footer = () => {
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

        <span className="flex m-auto gap-6 lg:flex-row flex-col ">
          <Button className="bg-white  inner-shadow2 text-black p-6 border-none ">
            <img src="/icons/desk.png" /> Launch Gamic web
          </Button>
          <Button className="bg-[#FB6320] shadow-inner  inner-shadow text-white p-6 border-none hover:bg-[#FB6320]">
            <img src="/icons/mob.png" /> Download Gamic Mobile{" "}
          </Button>
        </span>
      </div>

      <div className="py-20 lg:text-[20px]  flex justify-between lg:flex-row flex-col">
        <div className="py-4">
          <Image src="/brand/logo2.svg" width={116} height={32} alt="UI1" />
        </div>

        <div>
          <div className="px-4 text-left">
            <div className="flex justify-between lg:gap-20 flex-wrap gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
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
                <h3 className="text-lg font-semibold mb-2">Gamic</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Team
                    </a>
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
                <h3 className="text-lg font-semibold mb-2">Help</h3>
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
                <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
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
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Developers</h3>
                <ul className="gap-2 flex flex-col">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Docs
                    </a>
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
                <h3 className="text-lg font-semibold mb-2">GNG</h3>
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
                    <a href="#" className="text-gray-400 hover:text-white">
                      Governance
                    </a>
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
      <div className="text-left flex flex-wrap text-[20px] gap-4 text-[#9A9A9A] justify-between py-10">
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
              <BsTwitterX />
            </li>
            <li>
            <FaYoutube />
            </li>
            <li>
            <FaGithub />
            </li>
            <li>
            <FaSquareInstagram />
            </li>
            <li>
            <FaTelegram />
            </li>
            <li>
            <FaLinkedin />

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
