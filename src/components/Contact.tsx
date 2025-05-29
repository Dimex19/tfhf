import React from 'react'
import Button from './ButtonProps'

const Contact: React.FC = () => {

    const contacts = [
        {
            icon: '/icons/phone.png',
            text: '+2348184122407'
        },
        {
            icon: '/icons/mail.png',
            text: 'info@tfuturehopescaf.com'
        },
        {
            icon: '/icons/twitter.png',
            text: 'tfhf_official'
        },
        {
            icon: '/icons/instagram.png',
            text: 'tfhf_official'
        },
    ]
  return (
    <section className='bg-[#FFF2F9] flex flex-wrap justify-center items-center gap-10 poppins py-17 px-5 md:px-0'>
        <div className="py-20 max-w-[531px]">
            <p className="text-[20px] text-[#CD1B78] font-semibold mb-5 text-center md:text-left">CONTACT US</p>
            <h2 className="roboto-slab text-[32px] mb-5 text-center md:text-left">Join Us in <span className="text-[#CD1B78]">Making</span> a <span className="text-[#1B94CB]">Difference</span></h2>
            <p className="text-[20px] font-medium mb-5 text-center md:text-left">Every child deserves a safe, nurturing environment to grow and thrive. At The Future Hope Child Aid Foundation, we believe in the power of collective action to transform lives.</p>

            {contacts.map((contact, index)=> (
                <div className="flex gap-5 mb-3" key={index}>
                    <img src={contact.icon} alt="" />
                    <p className="text-[20px] font-medium">{contact.text}</p>
            </div>))}
        </div>
        <div className="shadow-lg bg-white py-8 px-4 md:pl-8 md:pr-11 md:max-w-[599px]">
            <h2 className="text-[16px] md:text-[24px] font-medium">Get in Touch and Make an Impact</h2>
            <p className="text-[12px] md:text-[16px] font-medium">Whether you want to partner, volunteer, or support, we’d love to hear from you.</p>
            <form action="" className="mt-2">
                <div className="flex justify-between mb-6">
                    <div className="flex-col">
                        <label htmlFor="">First Name:</label> <br/>
                        <input type="text" className='border rounded-[6px] md:p-1 px-2.5 w-[150px] md:w-[252px]'/>
                    </div>
                    <div className="flex-col">
                        <label htmlFor="">Last Name:</label> <br/>
                        <input type="text" className='border rounded-[6px] md:p-1 px-2.5 w-[150px] md:w-[252px]'/>
                    </div>
                </div>
                <div className="flex justify-between mb-6">
                    <div className="flex-col">
                        <label htmlFor="">E-mail Address:</label> <br/>
                        <input type="text" className='border rounded-[6px] md:p-1 px-2.5 w-[150px] md:w-[252px]'/></div>
                    <div className="flex-col">
                        <label htmlFor="">Phone Number:</label> <br/>
                        <input type="text" className='border rounded-[6px] md:p-1 px-2.5 w-[150px] md:w-[252px]'/>
                    </div>
                </div>
                <label htmlFor="">Type your Message:</label> <br/><input type='textarea' className='border rounded-[6px] p-1 px-2.5 mb-10 w-full h-[147px]'/>
                <Button text='Send Message' style='rounded-[8px] h-[50px] mb-[52px] text-[16px] bg-[#DA1077] text-white font-medium'/> 
            </form>
        </div>
    </section>
  )
}

export default Contact