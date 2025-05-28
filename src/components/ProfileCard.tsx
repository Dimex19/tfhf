import React from 'react';

type ProfileCardProps = {
  name: string;
  position: string;
  image: string;
  style: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, position, image, style }) => {
  return (
    <div className={`relative  rounded-xl overflow-hidden shadow-md flex flex-col items-center ${style}`}>
      <img src={image} alt={name} className="w-full object-cover" />
      <div className="absolute bottom-0 p-4 text-center bg-white">
        <h3 className="text-[16px] font-semibold">{name}</h3>
        <p className="text-[12px] text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
