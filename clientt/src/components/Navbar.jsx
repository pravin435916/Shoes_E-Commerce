import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from 'react-icons/rx';
import { CiHeart } from "react-icons/ci";
import { FaBars, FaRegUser, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Badge from '@mui/material/Badge';
import logo from '../assets/logo.png'
import './custom.css';
import { useSelector } from 'react-redux';
function Navbar() {
  const cartsProducts = useSelector(state => state.cart.items)
  const [bar, setBar] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //   return (
  //     <div className='w-full flex justify-center items-center overflow-hidden'>
  //       <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
  //         <div className='relative w-full sm:w-[70%] h-1/2 sm:h-24 border shadow-2xl p-4 mt-4 flex flex-col sm:flex-row items-center justify-between bg-white z-10'>
  //           <div className='flex items-center gap-2'>
  //             <img className='h-36 w-36' src={logo} alt="" />
  //           </div>
  //           {/* Responsive Menu Button */}
  //           <button
  //             className='sm:hidden text-black focus:outline-none'
  //             onClick={toggleMenu}
  //           >
  //             <svg
  //               className='h-10 w-10 absolute right-3 top-4 z-50'
  //               fill='none'
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               viewBox='0 0 24 24'
  //               stroke='currentColor'
  //             >
  //               {isMenuOpen ? (
  //                 <path d='M4 6h16M4 12h16m-7 6h7'></path>
  //               ) : (
  //                 <path d='M6 18L18 6M6 6l12 12'></path>
  //               )}
  //             </svg>
  //           </button>

  //           <div
  //             className={`${isMenuOpen ? 'hidden' : 'flex'
  //               } flex gap-4 sm:gap-8 justify-center items-center sm:flex-row flex-col`}>
  //             <Link className='hover:text-orange-600' to='/' onClick={() => setMenuOpen(false)}>Home</Link>
  //             <Link className='hover:text-orange-600' to='/shop' onClick={() => setMenuOpen(false)}>Shop</Link>
  //             <Link className='hover:text-orange-600' to='/blog' onClick={() => setMenuOpen(false)}>Blog</Link>
  //             <Link className='hover:text-orange-600' to='/collections' onClick={() => setMenuOpen(false)}>Collections</Link>
  //             <Badge badgeContent={cartsProducts.length} color="secondary">
  //               <Link className='hover:text-orange-600' to='/cart' onClick={() => setMenuOpen(false)}><IoCartOutline /></Link>
  //             </Badge>
  //             <Link className='hover:text-orange-600' to='/wishlist' onClick={() => setMenuOpen(false)}><CiHeart /></Link>
  //             <Link className='hover:text-orange-600 cursor-pointer' to='/contact' onClick={() => setMenuOpen(false)}><FaRegUser /></Link>

  //           </div>
  //         </div>

  //       </div>
  //     </div>
  //   );
  // }

  // export default Navbar;

  return (
    <div className='w-full p-6 flex justify-center gap-8 items-center overflow-hidden platypi z-50' >
      <div className='flex gap-2'>
        <div className='absolute left-8 top-8 flex items-center gap-2'>
          <img className='h-16 w-16' src={logo} alt="" />
        </div>
      </div>
      <span className='absolute top-4 right-4 block sm:hidden text-3xl' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </span>
      <div className={`absolute bg-black flex flex-col text-white text-lg gap-3 p-10 border-xs rounded-lg top-10 right-12 sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link className='hover:text-orange-600' to='/' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className='hover:text-orange-600' to='/shop' onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link className='hover:text-orange-600' to='/blog' onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link className='hover:text-orange-600' to='/collections' onClick={() => setMenuOpen(false)}>Collections</Link>
        <Badge badgeContent={cartsProducts.length} color="secondary">
          <Link className='hover:text-orange-600' to='/cart' onClick={() => setMenuOpen(false)}><IoCartOutline /></Link>
        </Badge>
        <Link className='hover:text-orange-600' to='/wishlist' onClick={() => setMenuOpen(false)}><CiHeart /></Link>
        <Link className='hover:text-orange-600 cursor-pointer' to='/contact' onClick={() => setMenuOpen(false)}><FaRegUser /></Link>
      </div>
      <div className='hidden bg-white p-10 sm:flex sm:flex-row gap-4 sm:gap-12 sm:shadow-xl justify-center items-center flex-col'>
        <Link className='hover:text-orange-600' to='/' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className='hover:text-orange-600' to='/shop' onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link className='hover:text-orange-600' to='/blog' onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link className='hover:text-orange-600' to='/collections' onClick={() => setMenuOpen(false)}>Collections</Link>
        <Badge badgeContent={cartsProducts.length} color="secondary">
          <Link className='hover:text-orange-600' to='/cart' onClick={() => setMenuOpen(false)}><IoCartOutline /></Link>
        </Badge>
        <Link className='hover:text-orange-600' to='/wishlist' onClick={() => setMenuOpen(false)}><CiHeart /></Link>
        <Link className='hover:text-orange-600 cursor-pointer' to='/contact' onClick={() => setMenuOpen(false)}><FaRegUser /></Link>
      </div>
    </div>
  );
}

export default Navbar;