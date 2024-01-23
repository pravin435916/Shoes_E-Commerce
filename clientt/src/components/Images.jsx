import React from 'react';
import whiteshoes from '../assets/pexels-web-donut-19090.jpg';
import shoes1 from '../assets/pexels-mstudio-1240892.jpg';
import shoes2 from '../assets/pexels-peter-patel-637076.jpg';
import shoes3 from '../assets/pexels-shane-aldendorff-786003.jpg';
import blackFriday from '../assets/blackfridaysale.jpg';
import './custom.css';

const Image = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className="image-wrapper h-48 sm:h-64 w-52 sm:w-64" >
            <img src={whiteshoes} className='h-full w-full' id='shoeimg1' alt='White Shoes' />
          </div>
          <div className="image-wrapper2 h-48 sm:h-64">
            <img src={shoes1} className='h-full w-full' id='shoeimg2' alt='Shoes 1' />
          </div>
          <div className='image-wrapper3 h-48 sm:h-64'>
            <img src={shoes2} className='h-full w-full' id='shoeimg3' alt='Shoes 2' />
          </div>
          <div className="image-wrapper h-48 sm:h-64" id='image-wrapper4'>
            <img src={shoes3} className='h-full w-full' id='shoeimg4' alt='Shoes 3' />
          </div>
        </div>
        <div className='image-wrapper5 mt-4 sm:mt-0'>
          <img src={blackFriday} className='blackfriday w-full' alt='Black Friday Sale' />
        </div>
      </div>
    </>
  );
}

export default Image;
