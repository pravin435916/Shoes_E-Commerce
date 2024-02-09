import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
const ProductsCarousel = ({ pumaData }) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  return (
    <Slider {...settings}>
        {/* <div className='flex items-center justify-center flex-col ml-4 gap-4'>
                <span className='text-5xl font-bold'>Nike Collection</span> 
                <span className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt neque pariatur.</span>
            </div> */}
      {pumaData.map(product => (
         <div className='w-80 h-96 sm:w-76 sm:h-[28rem] flex flex-col justify-center items-start gap-1 p-2 overflow-hidden' key={product.id}>
         <div className='sm:w-full sm:h-72 flex justify-center items-center'>
         <img className='w-40 h-36 sm:w-72 sm:h-72' src={product.img} alt={product.name}/>
         </div>
         <h2 className='w-32 sm:w-72 text-gray-700'>{product.name}</h2>
         <span className='w-24 h-4 sm:w-72 text-xs overflow-hidden'>{product.desc}</span>
         <span>${product.price}</span>
         <div className='flex gap-2'>
             {/* <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer  ' title='Add to Cart' onClick={()=> addToCart(product)} id='butt1'><IoMdCart className='z-10 absolute'/></span>
             <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer '  onClick={()=> wishToCart(product)} id='butt2' ><CiHeart className='z-10 absolute'/></span> */}
             
             {/* <Link to={`/${removeSpaces(product.name)}/${product.id}`}> 
             <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer ' id='butt3'>
             
                 <HiOutlineViewfinderCircle className='z-10 absolute'/>                        
             </span>
             </Link> */}
             
         </div>
     </div>
      ))}
    </Slider>
  );
};

export default ProductsCarousel;
