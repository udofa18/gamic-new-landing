"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import  { useState } from 'react';
import { Button, Drawer } from 'antd';
// import logo from '/Brand/logo.png'
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-[64px] lg:px-[80px] px-5 fixed flex justify-between items-center w-full bg-[#181818] z-30">


      <div className=" ">
        <Image src="/Brand/logo.png" width={110} height={32} alt="logo"></Image>
      </div>


      <div className="hidden lg:block">
        <ul className="flex gap-10">
          <li>
            <Link href="#">Explore</Link>
          </li>
          <li>
            <Link href="#">Download</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Help</Link>
          </li>
          <li>
            <Link href="#">Faq</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </div>
      <Button type="primary" onClick={showDrawer} className="lg:hidden">
        Open
      </Button>
      <Drawer title="" onClose={onClose} open={open} className="bg-black " style={{backgroundColor: "black", color:"white", }} >
      <ul className="flex gap-10 flex-col">
          <li>
            <Link href="#">Explore</Link>
          </li>
          <li>
            <Link href="#">Download</Link>
          </li>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Help</Link>
          </li>
          <li>
            <Link href="#">Faq</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
