import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaInstagram } from 'react-icons/fa6';
// import { CiLinkedin } from 'react-icons/ci';
// import { FaGithub } from 'react-icons/fa';
// import { SiCodeproject, SiCodechef } from 'react-icons/si';
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [bar,setbar] = useState(false)
    function opensearch() {
      setbar(!bar)
    }
    return (

        <div className='w-full flex justify-center items-center' >
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[70%]  border shadow-xl p-7 mt-8 flex items-center justify-between'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex gap-8 justify-center items-center'>
                    <Link className='hover:text-orange-600' to='/' >Home</Link>
                    <Link className='hover:text-orange-600' to='/shop' >Shop</Link>
                    <Link className='hover:text-orange-600' to='/blog' >Blog</Link>
                    <Link className='hover:text-orange-600' to='/pages' >Pages</Link>
                    <Link className='hover:text-orange-600' to='/contact' >Contact</Link>
                    <Link className='hover:text-orange-600' to='/cart' ><IoCartOutline /></Link>
                    <Link className='hover:text-orange-600' to='/search' onClick={opensearch}><IoMdSearch /></Link>
                </div>
            </div>
            { bar && 
            <div className='w-[70%] bg-orange-400 border shadow-xl p-5 flex items-center justify-between transition-all'>
                <input className='w-[80%] bg-transparent border-b text-black border-black outline-none ' placeholder='search product' type="search" name="search" id="" />
                <span className='text-2xl cursor-pointer' onClick={opensearch}><RxCross2 /></span>
            </div>
              }
          </div>
        </div>
    );
}

export default Navbar;
