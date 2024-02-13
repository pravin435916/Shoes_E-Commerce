import React from 'react';
import { CiHeart } from "react-icons/ci";
import { addItem, wishItem } from '../redux/CartSlice';

const Viewmorepage =({name,desc,img,price})=>{
    const addToCart = (product) => {
        dispatch(addItem(product));
        alert("Product is added to the cart")
      };
      const wishToCart = (product) => {
        dispatch(wishItem(product));
        alert("Product is wishlisted to the cart")
      };
    return(
        <>
            <div className='flex flex-col sm:flex-row justify-center sm:m-20 m-8 '>
                <div className='sm:border sm:border-gray-300 sm:p-2 sm:shadow-lg sm:mr-20 rounded-md border border-gray-300 p-2 shadow-lg'>
                    <img src={img} className='sm:h-96 sm:w-96 h-80 w-80 rounded-md' id='pro-img'></img>
                </div>
                <div>
                    <div><h1 className='text-xl mt-8' id='product-title'>{name}</h1></div>
                    <hr className='w-48 h-1 rounded bg-orange-400 border mt-1 border-orange-400 sm:w-56 sm:mt-3' ></hr>
                    <div><h2 className='font-xxl mt-4' id='pricing'>${price}</h2></div>
                    <div className='flex flex-row pt-8'>
                        <div><h4>Category</h4></div>
                        <div className='pl-4'><h4>:</h4></div>
                        <div className='pl-5'><h4> Household</h4></div>
                    </div>

                    <div className='flex flex-row'>
                        <div><h4>Availability :</h4></div>
                        <div className='pl-5 text-orange-400 font-medium'><h4>In Stock</h4></div>
                    </div>
                    
                    <hr className='mt-10 border-1'></hr>

                    <div className='sm:w-96 mt-10 font-light font-gray-300 '><h2>{desc}</h2></div>

                    <div className='flex flex-row sm:mt-12'>
                    <button className='h-8 w-32 rounded-md text-sm mt-5 hover:bg-orange-600 text-white bg-orange-400 sm:mr-5' onClick={()=> addToCart(id)}>Shop Now</button>
                    <button className='h-8 w-32 text-sm rounded-md mt-5 hover:bg-orange-600 text-white bg-orange-400 sm:mr-5'  onClick={()=> wishToCart(id)}>Add To Wishlist</button>
                    <button className='h-8 w-32 text-sm rounded-md mt-5 hover:bg-orange-600 text-white bg-orange-400'>Add To Cart</button>
                </div>
                </div>

                
            </div>
        </>
    )
}

export default Viewmorepage;