import React from 'react'
import Image from "next/image";

const Section7 = () => {
  return (
    <div className='p-20 bg-white text-black text-center'>
        <p className='text-[48px] font-[Avenir-Heavy] '>Investors</p>

        <div className="mb-[-40px]  gap-4 p-20 flex items-center justify-center">
            <Image src="/ui/investors.webp" width={800} height={117} alt="UI1" />
          </div>
    </div>
  )
}

export default Section7