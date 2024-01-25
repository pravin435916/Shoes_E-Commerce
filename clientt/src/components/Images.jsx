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
        <div className='flex flex-col justify-center sm:justify-center sm:flex sm:flex-row object-contain aspect-video gap-4 sm:m-32 m-4 rounded'>
        <div className='sm:grid sm:grid-cols-2 grid grid-row-2 gap-4 sm:justify-center '>
        {/* Shoe Image 1 */}
        <div className='sm:ml-16 relative overflow-hidden group '>
  <img src={whiteshoes} className='sm:h-72 sm:w-92' alt='Shoe 1' />
  <div className='absolute top-0 left-0 w-full h-full bg-black sm:h-72 sm:w-92 bg-opacity-50 leading-none flex items-center justify-center  opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
    <p className='text-white text-lg font-bold text-center sm:-mb-5'>Lorem Ipsum</p>
  </div>
</div>



        {/* Shoe Image 2   */}
        <div className='relative overflow-hidden group'>
  <img src={shoes1} className='sm:h-72 sm:w-100' alt='Shoe 2' />
  <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50  sm:h-72 sm:w-100 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100' id='shoeimg2'>
    <p className='text-white text-lg font-bold text-center'>Lorem Ipsum2</p>
  </div>
</div>


         {/* Shoe Image 3 */}

         <div className='sm:ml-16 relative overflow-hidden group'>
           
            <img src={shoes2} className='sm:h-72 sm:w-100'></img>
           <div className='absolute top-0 left-0 w-full h-full sm:max-h-72 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100' >
           <p className='text-white text-lg font-bold text-center'>Lorem Ipsum3</p>
           </div>
         </div>

         {/* Shoes Image 4 */}

         <div className='relative overflow:hidden group'>
           
            <img src = {shoes3} className='sm:h-72 sm:w-84'></img>
           <div className='absolute top-0 left-0 w-full h-full  bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100' id='shoeimg4' >
           <p className='text-white sm:text-lg font-bold text-center'>Lorem Ipsum4</p>
           </div>
         </div>
</div>
      
      <div className='relative group overflow-hidden'>
         
            <img src={blackFriday} className='blackFriday'></img>
         <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flext items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100' id='shoeimg5'>  
           <p className='text-white sm:text-lg font-bold text-center'>Black Friday Sale</p>
         </div>
         
      </div>
        </div>
    </>
  );
}

export default Image;
