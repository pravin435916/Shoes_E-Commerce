import React from 'react'
import './custom.css'
import shoes from '../assets/hero-shoes.png'
import { IoIosAdd } from "react-icons/io";
import Products from './Products';
function Home() {
  return (
    <div className='w-full sm:flex justify-center items-center flex-col h-full'>
       <div className='flex justify-center items-center gap-5 flex-col sm:flex-row w-[80%] h-[90vh]'>
        <div className='flex flex-col items-start gap-8 p-10'>
          <div className='flex flex-col text-3xl sm:text-7xl font-bold '>
          <span>Nike New</span>
          <span>Collection!</span>
          </div>
          <div className='w-[28rem]'>
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
       <Products/>
    </div>
  )
}

export default Home