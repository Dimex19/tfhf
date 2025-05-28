import React from 'react'
import Button from './ButtonProps'

const Hero: React.FC = () => {
  return (
    <div className="bg-[rgb(255,242,249)] flex roboto-slab h-[90vh]">
      <div className='w-[830px] px-20 py-24'>
          <h1 className='text-[64px]'>Building a future <br/> where every <span className="text-[#DA1077]">Nigerian</span> <span className="text-[#1B94CB]">child</span> thrives</h1>
          <p className="text-[24px]">Championing the rights of children by improving access to education, healthcare, and protection for those in need. </p>

          <div className="flex">
            <Button text='Donate Now' style='bg-[#DA1077] text-white py-4 rounded-[8px] mt-14 mr-5'/>
            <Button text='Partner With Us' style='border-2 border-[#DA1077] text-[#DA1077] py-4 rounded-[8px] mt-14'/>
          </div>
      </div>
      <div className="relative w-[40%] hidden md:block">
        <img src="/images/hero-rec1.png" alt="" className='absolute z-10 top-26 h-[340px] w-[530px]'/>
        <img src="/images/hero-rec2.png" alt="" className='absolute top-40 h-[390px] w-[530px]'/>
        <img src="/images/hero-child.png" alt="" className='absolute z-20 h-[540px]'/>
      </div>
    </div>
  )
}

export default Hero