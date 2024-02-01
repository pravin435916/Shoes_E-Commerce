import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemWish } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
function Wish() {
  const dispatch = useDispatch();
  const productCart = useSelector(state => state.cart.wishlist);

  const removeFromCart = (id) => {
    dispatch(removeItemWish(id));
  };

  return (
    <>
    {productCart.length === 0 && (
  <div className='h-[80vh] flex justify-center flex-col gap-4 items-center'>
    <span className='font-bold text-3xl text-gray-800'>No items in the Wishlist</span>
    <Link to='/shop' className='underline text-blue-500 hover:text-blue-700'>Add SOmething</Link>
  </div>
)}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full ml-4 m-5">
  {productCart.map((product) => (
    <div className='w-full h-auto sm:h-full flex flex-col justify-start items-center gap-4 p-4 overflow-hidden border border-gray-200 rounded-md' key={product.id}>
      <div className='w-full h-48 flex justify-center items-center'>
        <img className='w-36 h-36 sm:w-48 sm:h-48 object-cover' src={product.img} alt={product.name} />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <h2 className='text-lg sm:text-xl font-bold text-gray-700'>{product.name}</h2>
        <p className='text-sm text-gray-500'>{product.desc}</p>
        <p className='text-base font-bold text-gray-700'>${product.price}</p>
        <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600' onClick={() => removeFromCart(product.id)}>Remove from cart</button>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default Wish;