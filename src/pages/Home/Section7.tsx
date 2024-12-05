import React from 'react'
import Image from "next/image";

const Section7 = () => {
  return (
    <div className='lg:p-20 p-0 bg-white text-black text-center w-full'>
        <p className='lg:text-[48px] text-[30px] font-[Avenir-Heavy] '>Investors</p>

        <div className=" gap-4 lg:p-20 p-5 flex items-center justify-center">
            <Image src="/ui/investors.webp" width={800} height={117} alt="UI1" />
          </div>
    </div>
  )
}

export default Section7