import React from 'react'
import bg from "/public/bg/sec2.png";

type Props = {}

const Section2 = (props: Props) => {
  return (
    <div
    style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Ensure the background covers the entire div
    }}
    className="relative h-[1037px] px-[80px] overflow-hidden py-10"
>
    {/* Overlay div */}
    <div className="absolute inset-0 bg-black opacity-50" /> {/* Adjust opacity for desired darkness */}

    {/* Content goes here */}
    <div className="relative z-10 text-white">
        <h1>Your Content Here</h1>
        <p>Some description or other content.</p>
    </div>
</div>
  )
}

export default Section2