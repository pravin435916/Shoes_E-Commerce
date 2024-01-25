import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardContainer from './CardContainer';
import NikeData from './mergeData';
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
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
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
    <div className="container mx-auto mt-8">
      {/* Owner Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Meet the Team</h2>
        
<div className='flex justify-center gap-4  items-center sm:flex-row flex-col'>
        <div className="bg-white w-52 h-80 rounded-lg border border-gray-300 ml-4 mr-8">
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
    <p className='text-center pt-1 text-lg'>Pravin Nandankar</p>
    <p className='text-center text-xs'>Web Developer</p>
    <br></br>
    <p className='text-sm text-start m-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>


<div className="bg-white w-52 h-80 rounded-lg border border-gray-300 ml-4 mr-8 ">
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
    <p className='text-center pt-1 text-lg'>Aayush Tirmanwar </p>
    <p className='text-center text-xs'>Web Developer</p>
    <br></br>
    <p className='text-sm text-start m-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>


<div className="bg-white w-52 h-80 rounded-lg border border-gray-300 ml-4 mr-8">
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
    <p className='text-center pt-1 text-lg'>Jessica Sanjwani </p>
    <p className='text-center text-xs'>UI/UX Designer</p>
    <br></br>
    <p className='text-sm text-start m-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  </div>
</div>
</div>

      </section>

      {/* Deals Section */}
      <section className="mb-8">
      <h2 className="text-5xl font-bold mb-4 p-5">Special Deals</h2>

      <Slider {...settings}>
        {NikeData.map((deal, index) => (
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.007327114617!2d79.05448351438428!3d21.145800992288446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9b57a7a23e3%3A0xc733d378dd68e0d5!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1643345569295!5m2!1sen!2sin"
            width="80%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md w-screen sm:w-[80%]"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Blog;
