import React from 'react'
import bg from "/public/bg/dark-bg.webp";
import { Button } from "antd";
import Image from "next/image";
const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center",  }} className="text-center w-screen pt-[67px] overflow-hidden px-[80px]">
    <div className="w-[937.54px] m-auto flex flex-col gap-8">
      <h1 className=" text-[64px] font-[Avenir-Heavy]">
      JOIN THE GNGSTAR REVOLUTION TODAY      </h1>
      <p className="text-[24px]">Take advantage of the amazing 
      decentralized social communication tool.</p>
      
      <span className="flex m-auto gap-6">
          <Button className="bg-white  inner-shadow2 text-black p-6 border-none "><img src="/icons/desk.png"/> Launch Gamic web</Button>
          <Button className="bg-[#FB6320] shadow-inner  inner-shadow text-white p-6 border-none hover:bg-[#FB6320]" ><img src="/icons/mob.png"/> Download Gamic Mobile </Button>

      </span>
    </div>

    <div className='py-40 flex justify-between'>
    <div className="">
            <Image
              src="/brand/logo2.webp"
              width={116}
              height={32}
              alt="UI1"
            />

          </div>


          <div>
          <div className="px-4 text-left">
            <div className="flex justify-between gap-28">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Communities</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Create Space</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Messangers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Wallet</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Gamic</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Roadmap</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Brand</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>


                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Help</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Spaces</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Wallet</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Messaging</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">More</a></li>



                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Discuss</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Upvote</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Developers</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Docs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Insights</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Specs</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">GNG</h3>
                    <ul className='gap-2 flex flex-col'>
                        <li><a href="#" className="text-gray-400 hover:text-white">Token</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Release Schedule</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Whitepaper</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Governance</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Exchange</a></li>



                    </ul>
                </div>
            </div>
        </div>
          </div>
    </div>
   
  </div>  )
}

export default Footer