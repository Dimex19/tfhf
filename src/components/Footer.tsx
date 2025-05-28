import React from 'react'

const Footer: React.FC = () => {
  return (
    <section className='poppins bg-[#D3006C] text-white py-10 pl-[55px] pr-[120px]'>
        <div className="flex justify-between">
            <div className="max-w-[492px]">
                <div className="flex items-center gap-2 mb-4">
                    <img src="/images/logo.png" alt="" className="" />
                    <p className="text-[20px] font-semibold">The Future Hope Child Aid Foundation</p>
                </div>
                <p className="mb-6 text-[14px]">The Future Hope Child Aid Foundation is dedicated to empowering and protecting vulnerable children in Nigeria through education, healthcare, and advocacy. Together, we can build a brighter future for every child.</p>
                <div className="flex gap-3">
                    <img src="/icons/phone-white.png" alt="" className="" />
                    <img src="/icons/mail-white.png" alt="" className="" />
                    <img src="/icons/twitter-white.png" alt="" className="" />
                    <img src="/icons/instagram-white.png" alt="" className="" />
                </div>
            </div>
            <div className="flex gap-30">
                <div className="block">
                    <p className="text-[20px] font-semibold mb-3">Quick Links</p>
                    <a href="#"><p className="text-[16px] font-medium mb-2">Home</p></a>
                    <a href="#"><p className="text-[16px] font-medium mb-2">About Us</p></a>
                    <a href="#"><p className="text-[16px] font-medium mb-2">Our Projects</p></a>
                    <a href="#"><p className="text-[16px] font-medium">Contact Us</p></a>
                </div>
                <div className="block">
                    <p className="text-[20px] font-semibold mb-3">Get Involved</p>
                    <a href="#"><p className="text-[16px] font-medium mb-2">Volunteer</p></a>
                    <a href="#"><p className="text-[16px] font-medium mb-2">Donate</p></a>
                    <a href="#"><p className="text-[16px] font-medium mb-2">Partner with Us</p></a>
                </div>
            </div>
        </div>
        <div className="w-[966px] mx-auto mt-20" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
            <p className="text-[20px] text-center py-4 font-semibold">© 2025. The Future Hope Child Aid Foundation. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer