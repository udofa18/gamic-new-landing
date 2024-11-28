import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from '/Brand/logo.png'
const Header = () => {
  return (
    <div className="h-[64px] px-[80px] fixed flex justify-between items-center w-full bg-[#181818] z-30">


      <div className=" ">
        <Image src="/Brand/logo.png" width={110} height={32} alt="logo"></Image>
      </div>


      <div>
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
    </div>
  );
};

export default Header;
