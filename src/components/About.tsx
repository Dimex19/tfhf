import React from 'react'
import Button from './ButtonProps'

const About: React.FC = () => {
  return (
    <section className='flex flex-wrap justify-between items-center gap-10 px-5 md:px-20 py-12 md:py-24 poppins pb-0'>
        <div className="grid grid-cols-2 grid-rows-3 gap-2.5 max-w-2xl h-96 md:h-124 mb-5 md:mb-0 rounded-xl overflow-hidden bg-white shadow-lg order-2 md:order-1">
            <div className="col-span-1 row-span-3 overflow-hidden group">
                <img src="/images/about-img1.png" 
                    alt="Large photo" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <div className="row-span-2 overflow-hidden group">
                <img src="/images/about-img2.png" 
                    alt="Small photo 1" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <div className="overflow-hidden group">
                <img src="/images/about-img3.png" 
                    alt="Small photo 2" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
        </div>
        <div className="w-[501px] text-center md:text-left md:mb-5 h-full order-1 md:order-2">
            <p className='text-[#CD1B78] text-[18px] md:text-[20px] font-semibold'>WHO ARE WE</p>
            <p className="text-[26px] md:text-[32px] font-bold roboto-slab">Championing a <span className="text-[#DA1077]">Brighter</span> Future for Every <span className="text-[#1B94CB]">Child</span></p>
            <p className="text-[16px] md:text-[20px] font-medium">The Future Hope Child Aid Foundation is dedicated to protecting and empowering vulnerable children in Nigeria through advocacy, education, and community support. We strive to create a safe environment for every child.</p>
            <Button text='Learn More' style='mx-auto md:mx-0 bg-[#DA1077] text-white py-2 rounded-[8px] mt-5 w-[240px] text-center'/>
        </div>
    </section>
  )
}

export default About