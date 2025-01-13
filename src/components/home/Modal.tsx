import React from 'react';
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center  z-10 " >
        <div className='absolute inset-1 bg-opacity-50  bg-black  z-20'onClick={onClose}>
            
        </div>
            <div className="bg-black p-6 rounded-lg border-t-2 border-t-slate-50 shadow-lg z-50 w-[420px] flex flex-col gap-6 ">
                <div className='items-end flex flex-row-reverse'>

                
            <button onClick={onClose} className=" bg-[#FFFFFF1A] rounded-lg p-3 px-4 align-end"><AiOutlineClose /> </button>
</div>
                <h2 className="text-[24px] font-bold mb-4">Download the app today</h2>
                <div className="flex justify-around">
                 <Link href="https://apps.apple.com/us/app/gamic-spaces-chat-connect/id1673683070 " target='_blank' >  
                 <button className='hvr-shrink' ><Image src="/icons/ios.svg" width={150} height={50} alt="aux3" priority />
                    </button></Link>
                    <Link href=" https://play.google.com/store/apps/details?id=app.gamic.guild.gamic_guild_mobile" target='_blank' >        <button className='hvr-shrink'  ><Image src="/icons/play.svg" width={150} height={50} alt="aux3"  priority  />
                    </button>       </Link>         </div>
            </div>
        </div>
    );
};

export default Modal;






