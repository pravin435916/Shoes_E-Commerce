import React from 'react'
import NikeData from './NikeData'
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import './custom.css';
import PumaData from './PumaData';

function Products() {
    return (
        <div className='w-full  flex items-center justify-center flex-col h-full gap-8 overflow-hidden'>
            {/* <img src="" alt="" /> */}
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


           <div className='flex items-center justify-center flex-col m-5 gap-4'>
                <span className='text-5xl font-bold'>Puma Collection</span> 
                <span className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt neque pariatur.</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 w-[90%] ">
            {PumaData.map((product) => (
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
    )
}

export default Products;