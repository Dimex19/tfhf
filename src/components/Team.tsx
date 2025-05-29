import React from 'react';
import ProfileCard from './ProfileCard';

const teamData = [
  {
    name: 'Mustapha Odunsi',
    position: 'Founder/ Chairman',
    image: '/images/mustapha.png',
    style: 'h-[348px]',
  },
  {
    name: 'Kaothar Sulaimon',
    position: 'Non-Executive Director',
    image: '/images/kaothar.png',
    style: '',
  },
  {
    name: 'Taoheed Adeshina',
    position: 'Non-Executive Director',
    image: '/images/taoheed.png',
    style: '',
  },
  {
    name: 'Mariam Akinsola',
    position: 'Non-Executive Director',
    image: '/images/mariam.png',
    style: '',
  },
  {
    name: 'Idris Adebayo',
    position: 'Non-Executive Director',
    image: '/images/Idris.png',
    style: '',
  },
  {
    name: 'Felicia Okocha',
    position: 'Executive Director',
    image: '/images/Felicia.png',
    style: 'mt-12',
  },
  {
    name: 'Fatimah Oladigbolu',
    position: 'Lead, Media & Public Relations',
    image: '/images/fatimah.png',
    style: '',
  },
  {
    name: 'Fasasi Rofiat',
    position: 'Lead, Welfare & Administration',
    image: '/images/placeholder.jpg',
    style: '',
  },
  {
    name: 'Maryam Adeleye',
    position: 'Lead, Programs $ Project',
    image: '/images/placeholder.jpg',
    style: '',
  },
  {
    name: 'Faoziah Lawal',
    position: 'Lead, Partnership & Collaboration',
    image: '/images/placeholder.jpg',
    style: '',
  },
];

const Team: React.FC = () => {
  return (
    <section className="px-4 py-5 md:py-10 bg-[#FDFBFB] poppins">
      <div className="mt-5 md:mt-40 text-center">
        <p className="text-[#CD1B78] text-[20px] font-semibold">OUR TEAM</p>
        <p className="text-[32px] font-bold roboto-slab">
          Meet the <span className="text-[#DA1077]">Hearts</span> Behind Our{' '}
          <span className="text-[#1B94CB]">Mission</span>
        </p>
        <p className="text-[20px] font-medium">
          A dedicated team committed to protecting and empowering children in Nigeria
        </p>
      </div>

      {/* Responsive grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          gap-4 
          mt-10
          justify-center
          lg:[grid-template-columns:324px_224px_224px_224px_224px]
          lg:[grid-template-rows:306px_306px]
        "
      >
        {teamData.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
            style={member.style}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
