import React from 'react'
import Button from './ButtonProps'

type projectCardProps = {
    image: string,
    proj: string,
    title: string,
    desc: string,
}

const ProjectCard: React.FC<projectCardProps> = ({image, title, desc, proj}) => {
  return (
    <div className='shadow-md rounded-[10px] mb-5'>
        <img src={image} alt="" />
        <div className="p-[18px]">
            <p className='text-[#F8007F] text-[20px] font-medium'>{proj}</p>
            <p className="text-[26px] font-medium">{title}</p>
            <p className="text-[16px] font-medium md:w-[349px]">{desc}</p>
            <Button text='See the Impact' style='mr-auto ml-auto border-2 border-[#DA1077] text-[#DA1077] py-2 rounded-[8px] mt-5 w-[240px] text-center'/>
        </div>
    </div>
  )
}

export default ProjectCard