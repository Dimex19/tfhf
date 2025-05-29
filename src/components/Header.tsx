import React, { useState } from 'react'
import Button from './ButtonProps'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    
  return (
    <section className='md:px-20 z-70 w-full py-5 bg-[#FFF2F9] poppins font-medium fixed top-0'>
        <div className="hidden justify-between items-center md:flex">
            <img src="/images/logo.png" alt="" className='w-[70px]' />
            <div className="flex gap-8 text-[20px] font-medium">
                <a href="#"><p>Home</p></a>
                <a href="#"><p>About Us</p></a>
                <a href="#"><p>Our Projects</p></a>
                <a href="#"><p>Contact Us</p></a>
            </div>
            <Button text='Donate Now' style='rounded-[8px] h-[50px] text-[16px] bg-[#DA1077] text-white font-medium'/>
        </div>

        {/* mobile header */}
        <div className="flex items-center justify-between md:hidden px-5">
            <img src="/images/logo.png" alt="" className='w-[70px]' />
            <div className="flex gap-5 items-center">
                <Button text='Donate Now' style='rounded-[8px] h-[40px] text-[14px] bg-[#DA1077] text-white font-medium'/>
                <p className="text-3xl" onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu/></p>
            </div>
        </div>
        
        {showMenu && 
            <div className="">
                <div className="fixed absolute z-60 top-0 right-0 p-5 bg-white w-[60vw] h-[100%] flex-col justify-end items-end" >
                            <p className="flex justify-end text-3xl" onClick={()=> setShowMenu(!showMenu)}>
                                <IoMdClose />
                            </p>
                            <a href="#"><p className='py-2'>Home</p></a>
                            <a href="#"><p className='py-2'>About Us</p></a>
                            <a href="#"><p className='py-2'>Our Projects</p></a>
                            <a href="#"><p className='py-2'>Contact Us</p></a>
                    </div>
                <div className="fixed inset-0 bg-opacity-50 z-50" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onClick={()=>setShowMenu(!showMenu)}>
                </div>
            </div>
        }
    </section>
  )
}

export default Header