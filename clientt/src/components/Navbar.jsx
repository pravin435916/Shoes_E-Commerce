import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from 'react-icons/rx';
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Badge from '@mui/material/Badge';
import './custom.css';
import { useSelector } from 'react-redux';
function Navbar() {
  const cartsProducts  = useSelector(state => state.cart.items)
  const [bar, setBar] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  // function openSearch() {
  //   setBar(!bar);
  //   setMenuOpen(false);
  // }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex justify-center items-center overflow-hidden'>
      <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
        <div className='relative w-full sm:w-[70%] h-1/2 sm:h-24 border shadow-2xl p-4 mt-4 flex flex-col sm:flex-row items-center justify-between bg-white z-10'>
          <div className='flex items-center gap-2'>
          <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="orange"
           width="48px"
           height="48px"
         >
           <path d="M0 0h24v24H0V0z" fill="none" />
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 14.59l-2.83-2.83L7 15.17l3.59 3.58 6.59-6.59-1.41-1.42-5.18 5.18z" />
         </svg>
          <span className='font-bold overline'>Jap</span>
          </div>
          {/* Responsive Menu Button */}
          <button
            className='sm:hidden text-black focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='h-10 w-10 absolute right-3 top-4 z-50'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M4 6h16M4 12h16m-7 6h7'></path>
                ) : (
                  <path d='M6 18L18 6M6 6l12 12'></path>
              )}
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? 'hidden' : 'flex'
            } flex gap-4 sm:gap-8 justify-center items-center sm:flex-row flex-col`}>
            <Link className='hover:text-orange-600' to='/' onClick={()=> setMenuOpen(false)}>Home</Link>
            <Link className='hover:text-orange-600' to='/shop' onClick={()=> setMenuOpen(false)}>Shop</Link>
            <Link className='hover:text-orange-600' to='/blog' onClick={()=> setMenuOpen(false)}>Blog</Link>
            <Link className='hover:text-orange-600' to='/collections' onClick={()=> setMenuOpen(false)}>Collections</Link>
            <Link className='hover:text-orange-600' to='/contact' onClick={()=> setMenuOpen(false)}>Contact</Link>
            <Badge badgeContent={cartsProducts.length} color="secondary">
            <Link className='hover:text-orange-600' to='/cart' onClick={()=> setMenuOpen(false)}><IoCartOutline /></Link>
            </Badge>
            <Link className='hover:text-orange-600' to='/wishlist' onClick={()=> setMenuOpen(false)}><CiHeart /></Link>
            {/* <span className='hover:text-orange-600 cursor-pointer none sm:block' onClick={openSearch}><IoMdSearch /></span> */}
            <Link className='hover:text-orange-600 cursor-pointer' to='/contact' onClick={()=> setMenuOpen(false)}><FaRegUser /></Link>
          </div>
        </div>
        {/* {bar &&
          <motion.div
            animate={{
              x: 0,
              y: 56,
              transition: "ease-in"
            }}
            className='w-[70%] absolute top-  bg-orange-400 border shadow-xl p-3 sm:p-5 flex items-center justify-between z-10'>
            <input className='w-[80%] bg-transparent border-b text-black border-black outline-none' placeholder='Search product' type="search" name="search" id="" />
            <span className='cursor-pointer' onClick={openSearch}><RxCross2 /></span>
          </motion.div>
        } */}
      </div>
    </div>
  );
}

export default Navbar;