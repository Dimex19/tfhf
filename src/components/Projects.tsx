import React from 'react'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
    const projects = [
        {
            image: '/images/project1.png',
            title: 'Nuturing Our Future Hopes',
            desc: 'Providing care and support for vulnerable children to help them thrive.',
            proj: 'Project 1'
        },
        {
            image: '/images/project2.png',
            title: 'Ultra School Project',
            desc: 'Enhancing education access through improved learning environments.',
            proj: 'Project 2'
        },
        {
            image: '/images/project3.png',
            title: 'Skill4Hope',
            desc: 'Empowering children with vocational skills for a brighter future.',
            proj: 'Project 3'
        },
    ]

  return (
    <div className='px-5 md:px-20 poppins'>
        <div className='mt-15 md:mt-40 text-center'>
            <p className='text-[#CD1B78] text-[18px] md:text-[20px] font-semibold'>OUR PROJECTS</p>
            <p className="text-[26px] md:text-[32px] font-bold roboto-slab">Making a <span className="text-[#DA1077]">Difference</span> One <span className="text-[#1B94CB]">Project</span> at a Time</p>
            <p className="text-[16px] md:text-[20px] font-medium">Empowering children through education, skills, and safe spaces for a brighter future</p>
        </div>
        <div className="flex mt-16 items-center justify-center md:justify-between flex-wrap ">
            {projects.map((project, index)=> (
                
                <ProjectCard key={index} image={project.image} title={project.title} desc={project.desc} proj={project.proj} />))}
        </div>
    </div>
  )
}

export default Projects