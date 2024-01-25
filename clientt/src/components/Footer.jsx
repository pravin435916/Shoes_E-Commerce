import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 flex justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-2 items-center sm:ml-14">
        {/* About Us Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor felis et odio posuere, ac vestibulum ligula blandit.</p>
        </div>
        {/* Newsletter Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded bg-gray-700 text-white mb-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
          </form>
        </div>
        {/* Instagram Feed Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Instagram Feed</h3>
          {/* Your Instagram feed component or embed code here */}
        </div>
        {/* Follow Us Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
