import React from 'react'
import NikeData from './NikeData'
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

function Products() {
    return (
        <div className='w-full  flex items-center justify-center flex-col h-full gap-8'>
            <div className='flex items-center justify-center flex-col m-5 gap-4'>
                <span className='text-5xl font-bold'>Nike Collection</span> 
                <span className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt neque pariatur.</span>
            </div>
            {/* <div className='flex items-center justify-center gap-2 w-[80%] flex-wrap'> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[90%] ">
            {NikeData.map((product) => (
                <div className='w-96 h-96 flex flex-col justify-center items-start gap-1 p-2' key={product.id}>
                    <div className='w-72 h-72 bg-blue-300 flex justify-center items-center'>
                    <img className='w-48 h-52' src={product.img} alt={product.name} />
                    </div>
                    <h2 className='text-gray-400'>{product.name}</h2>
                    <span className='w-72 text-lg'>{product.des}</span>
                    <span>${product.price}</span>
                    <div className='flex gap-2'>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' title='Add to Cart'><IoMdCart /></span>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' ><CiHeart /></span>
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer'><HiOutlineViewfinderCircle /></span>
                    </div>
                </div>
            ))}
           </div>
        </div>
    )
}

export default Products