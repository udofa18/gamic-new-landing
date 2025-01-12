"use client"
import Image from "next/image";
import Homepage from "@/components/home/Homepage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {



  return (
    
    <div className="lg:px-[80px] items-center justify-items-center min-h-screen  pt-[1px] m-0 overflow-hidden">
     <Homepage/>
    </div>
  );
}
