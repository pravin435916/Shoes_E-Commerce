import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import './custom.css';

import { motion } from "framer-motion";

function Navbar() {
    const [bar, setBar] = useState(false);

   

    function opensearch() {
        setBar(!bar);
    }

    return (
        <div className='w-full flex justify-center items-center rounded' id='navbar'>
            <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
                <div className='w-[70%] border shadow-2xl p-7 mt-8 flex flex-col sm:flex-row items-center justify-between bg-white z-10 '>
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <div className='flex gap-8 justify-center items-center sm:flex-row flex-col'>
                        <Link className='hover:text-orange-600' to='/'>Home</Link>
                        <Link className='hover:text-orange-600' to='/shop'>Shop</Link>
                        <Link className='hover:text-orange-600' to='/blog'>Blog</Link>
                        <Link className='hover:text-orange-600' to='/pages'>Pages</Link>
                        <Link className='hover:text-orange-600' to='/contact'>Contact</Link>
                        <Link className='hover:text-orange-600' to='/cart'><IoCartOutline /></Link>
                        <span className='hover:text-orange-600 cursor-pointer' onClick={opensearch}><IoMdSearch /></span>
                        <Link className='hover:text-orange-600 cursor-pointer' to='/contact'><FaRegUser /></Link>
                    </div>
                </div>
                {bar &&
                    <motion.div
                        animate={{
                            x: 0,
                            y: 56,
                            transition: "ease in"
                        }}
                        className='w-[70%] absolute  top-14 bg-orange-400 border shadow-xl p-5 flex items-center justify-between transition-all'>
                        <input className='w-[80%] bg-transparent border-b text-black border-black outline-none ' placeholder='search product' type="search" name="search" id="" />
                        <span className=' cursor-pointer' onClick={opensearch}><RxCross2 /></span>
                    </motion.div>
                }
            </div>
        </div>
        {bar &&
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
        }
      </div>
    </div>
  );
}

export default Navbar;
