import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardContainer from './CardContainer';
import NikeData from './mergeData';
import Instagram from '../assets/icons8-instagram-96.png';
import LinkedIn from '../assets/icons8-linkedin-96.png';
import Gmail from '../assets/icons8-gmail-96.png';
import mergeData, { getNikeData } from './mergeData';
import Navbar from './Navbar';


const Blog = () => {
 
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8">
      {/* Owner Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Meet the Team</h2>
        
<div className='flex justify-center gap-4  items-center sm:flex-row flex-col '>
        <div className="bg-white w-72 h-86 rounded-lg border border-gray-300 ml-4 mr-8 shadow-md p-5">
  <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
    <img src='https://media.licdn.com/dms/image/D4D03AQEluYSStsFUUA/profile-displayphoto-shrink_200_200/0/1695389851075?e=2147483647&v=beta&t=piU3XjpxN8_EBggtolx0HDHipb8bHi0AN4H4S1P0Fq4' className='rounded-full mx-auto'></img>
    <p className='text-center pt-1 text-lg'>Pravin Nandankar</p>
    <p className='text-center text-xs'>Web Developer</p>
  <div className='flex justify-center gap-1 pt-2'>
      <span className='social-media'><img src={Instagram}></img></span>
      <span className='social-media'><img src={LinkedIn}></img></span>
      <span className='social-media'><img src={Gmail}></img></span>
  </div>
   
    <p className='text-sm text-start m-2 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>



        <div className="bg-white w-72 h-86 rounded-lg border border-gray-300 ml-4 mr-8 shadow-md p-5">
  <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
    <img src='https://media.licdn.com/dms/image/D4D03AQF25d4jSaugGQ/profile-displayphoto-shrink_200_200/0/1695833081290?e=2147483647&v=beta&t=GJYsdhz-Oqts25mgKQ9X8CnTVsOnyTwB17cYgEJwkPo' className='rounded-full mx-auto'></img>
    <p className='text-center pt-1 text-lg'>Aayush Tirmanwar</p>
    <p className='text-center text-xs'>Web Developer</p>
  <div className='flex justify-center gap-1 pt-2'>
      <span className='social-media'><img src={Instagram}></img></span>
      <span className='social-media'><img src={LinkedIn}></img></span>
      <span className='social-media'><img src={Gmail}></img></span>
  </div>
   
    <p className='text-sm text-start m-2 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>



        <div className="bg-white w-72 h-86 rounded-lg border border-gray-300 ml-4 mr-8 shadow-md p-5">
  <div className="flex p-2 gap-1">
    <div className="">
      <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
      <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
  </div>
  <div className="card__content">
    <img src='https://picsum.photos/70/70' className='rounded-full mx-auto'></img>
    <p className='text-center pt-1 text-lg'>Jessica Sanjwani</p>
    <p className='text-center text-xs'>UI/UX Design</p>
  <div className='flex justify-center gap-1 pt-2'>
      <span className='social-media'><img src={Instagram}></img></span>
      <span className='social-media'><img src={LinkedIn}></img></span>
      <span className='social-media'><img src={Gmail}></img></span>
  </div>
   
    <p className='text-sm text-start m-2 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>
</div>
      </section>

      {/* Deals Section */}
      <section className="mb-8">
      <h2 className="text-5xl font-bold mb-4 p-5 text-center">Special Deals</h2>

      <Slider {...settings}>
        {mergeData.map((deal, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md px-5">
            <img
              src={deal.img}
              alt={`Deal ${index + 1}`}
              className="w-full h-52 sm:h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
              <p className="text-gray-700">{deal.price}</p>
              <a href={deal.link} className="text-blue-500 hover:underline mt-2 inline-block">
                View Details
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>

      {/* Map Section */}
      <section className="mb-8">
        <h2 className="text-center text-5xl font-bold mb-4">Our Location</h2>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-md">
          <iframe 
            title="store"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3909908611995!2d79.05904737503573!3d21.176621380510102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1707481910496!5m2!1sen!2sin"
            width="80%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md w-screen sm:w-[80%]"
            ></iframe>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog;
