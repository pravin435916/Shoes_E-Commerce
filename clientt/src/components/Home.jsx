import React from 'react'
import './custom.css'
import shoes from '../assets/hero-shoes.png'
import { IoIosAdd } from "react-icons/io";
import Products from './Products';
import gradient from '../assets/bg-gradient.png'
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import NikeData from './NikeData';
import Image from './Images';


function Home() {
  return (
    <>
    <div className='w-full sm:flex justify-center items-center flex-col h-full overflow-hidden'>
      <img className='absolute w-[64rem] right-0 -z-10 top-0' src={gradient} alt="" />
       <div className='flex justify-center items-center gap-5 flex-col sm:flex-row w-full sm:w-[80%] h-[90vh]'>
        <div className='flex flex-col items-center sm:items-start gap-8 p-2 sm:p-10 '>
          <div className='flex flex-col text-3xl sm:text-7xl font-bold mr-5 '>
          <span>Nike New</span>
          <span>Collection!</span>
          </div>
          <div className='w-[28rem] p-15'>
          <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quas placeat adipisci explicabo, vero dignissimos excepturi odit itaque provident nulla dolor quaerat quibusdam.</span>
          </div>
          <div className='flex gap-3'>
          <span className='flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-4xl text-white'><IoIosAdd /></span>
          <button className='uppercase drop-shadow-lg'>Add To Bag</button>
          </div>
        </div>
        <div className='flex justify-center items-center p-10'>
          <img className='drop-shadow-2xl' src={shoes} alt="" />
        </div>
       </div>
       {/* nike data  */}
       <div className='flex items-center justify-center flex-col m-5 gap-4'>
                <span className='text-5xl font-bold'>Nike Collection</span> 
                <span className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt neque pariatur.</span>
            </div>
            {/* <div className='flex items-center justify-center gap-2 w-[80%] flex-wrap'> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 w-[90%] ">
            {NikeData.map((product) => (
                <div className='w-80 h-96 sm:w-76 sm:h-[28rem] flex flex-col justify-center items-start gap-1 p-2 overflow-hidden' key={product.id}>
                    <div className='sm:w-full sm:h-72 flex justify-center items-center'>
                    <img className='w-40 h-36 sm:w-72 sm:h-72' src={product.img} alt={product.name}/>
                    </div>
                    <h2 className='w-32 sm:w-72 text-gray-700'>{product.name}</h2>
                    <span className='w-24 h-4 sm:w-72 text-xs overflow-hidden'>{product.desc}</span>
                    <span>${product.price}</span>
                    <div className='flex gap-2'>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer  ' title='Add to Cart' id='butt1'><IoMdCart className='z-10 absolute'/></span>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer ' id='butt2' ><CiHeart className='z-10 absolute'/></span>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer ' id='butt3'><HiOutlineViewfinderCircle className='z-10 absolute' /></span>
                    </div>
                </div>
            ))}
           </div>

      
    </div>

    <Image/>
    </>
  )
}

export default Home;