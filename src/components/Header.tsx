"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import  { useState } from "react";
import { Button, Drawer } from "antd";
// import logo from '/Brand/logo.png'
import { CiMenuFries } from "react-icons/ci";
import Modal from './home/Modal';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className="h-[64px] lg:px-[80px] px-5 fixed flex justify-between items-center w-full bg-[#181818] z-30">


      <div className=" ">
        <Link href="/" className="cursor-pointer">
        <Image src="/Brand/logo.svg" width={110} height={32} alt="logo"></Image>
        </Link>
      </div>


      <div className="hidden lg:block">
        <ul className="flex gap-10">
          
          <li  onClick={handleOpenModal}>
            <Link href="#">Download</Link>
          </li>
          <li >
            <Link href="/#communities">Features</Link>
          </li>
         
          <li >
            <Link href="/faq">Faq </Link>
          </li>
          <li >
          <Link href="https://medium.com/@gamicHQ" target="_blank">Blog</Link>
                    </li>
        </ul>
      </div>
      <Button type="primary" onClick={showDrawer} className="lg:hidden bg-transparent text-white border-none shadow-none text-lg">
      <CiMenuFries />
      </Button>
      <Drawer title="" onClose={onClose} open={open} className="bg-black " style={{backgroundColor: "#181818", color:"white", }} >
      <ul className="flex gap-10 flex-col">
          
          <li onClick={handleOpenModal}>
            <Link href="#" onClick={onClose}>Download</Link>
          </li>
          <li onClick={onClose}>
            <Link href="/#communities">Features</Link>
          </li>
         
          <li onClick={onClose}>
            <Link href="faq">Faq</Link>
          </li>
          <li onClick={onClose}>
            <Link href="https://medium.com/@gamicHQ" target="_blank">Blog</Link>
          </li>
        </ul>
      </Drawer>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
};

export default Header;
