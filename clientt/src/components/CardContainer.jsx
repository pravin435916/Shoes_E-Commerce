import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaCard = ({ name, description, photoUrl }) => {
  return (
    <div className="w-72  overflow-hidden bg-white rounded-lg shadow-2xl">
      <div className="w-40 h-40 mx-auto mt-4 overflow-hidden rounded-full border-4 border-white">
        <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>

      <div className="flex justify-center mt-4">
        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mx-2 text-lg" />
        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 mx-2 text-lg" />
        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 mx-2 text-lg" />
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-800 mx-2 text-lg" />
      </div>
      <p className="text-gray-700 font-bold text-center mt-4 p-4">{description}</p>
    </div>
  );
};

const CardContainer = () => {
  const profiles = [
    {
      name: 'Pravin Nandankar',
      description: 'Web Developer',
      photoUrl: 'https://placekitten.com/200/200',
    },
    {
      name: 'Aayush Tirmanwar',
      description: 'Web Developer',
      photoUrl: 'https://placekitten.com/201/201',
    },
    {
      name: 'Jessica',
      description: 'Designer',
      photoUrl: 'https://placekitten.com/202/202',
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {profiles.map((profile, index) => (
        <SocialMediaCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default CardContainer;
