import React from 'react'
import Button from './ButtonProps'

const Hero: React.FC = () => {
  return (
    <div className="bg-[rgb(255,242,249)] mt-20 flex roboto-slab min-h-[90vh] relative z-0">
      <div className='flex-1 max-w-[830px] px-5 md:px-20 py-12 md:py-24'>
        <h1 className='md:text-[64px] text-[42px] leading-tight mb-6'>
          Building a future <br/> where every{' '}
          <span className="text-[#DA1077]">Nigerian</span>{' '}
          <span className="text-[#1B94CB]">child</span> thrives
        </h1>
        <p className="md:text-[24px] text-[18px] mb-14 leading-relaxed">
          Championing the rights of children by improving access to education, healthcare, and protection for those in need.
        </p>
        <div className="flex flex-wrap gap-5">
          <Button 
            text='Donate Now' 
            style='bg-[#DA1077] text-white py-4 px-6 rounded-[8px] text-[14px] md:text-[16px]'
          />
          <Button 
            text='Partner With Us' 
            style='border-2 border-[#DA1077] text-[#DA1077] py-4 px-6 text-[14px] md:text-[16px] rounded-[8px]'
          />
        </div>
      </div>
      
      <div className="relative flex-1 max-w-[40%] hidden md:block">
        <div className="relative h-full">
          <img 
            src="/images/hero-rec1.png" 
            alt="" 
            className='absolute z-10 top-26 h-[340px] w-[530px] object-cover'
          />
          <img 
            src="/images/hero-rec2.png" 
            alt="" 
            className='absolute top-40 h-[390px] w-[530px] object-cover'
          />
          <img 
            src="/images/hero-child.png" 
            alt="" 
            className='absolute z-20 h-[540px] object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero