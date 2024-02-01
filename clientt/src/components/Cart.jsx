import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();
  const productCart = useSelector(state => state.cart.items);

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

// Function to calculate total cost
const calculateTotalCost = () => {
  let total = 0;
  productCart.forEach((product) => {
    total += parseFloat(product.price.replace(',', '')) * parseInt(quantity);
  });
  return total.toFixed(2); // Round the total to 2 decimal places
};


  return (
    <>
      {productCart.length === 0 && (
        <div className='h-[80vh] flex justify-center flex-col gap-4 items-center'>
          <span className='font-bold text-3xl text-gray-800'>No items in the Cart</span>
          <Link to='/shop' className='underline text-blue-500 hover:text-blue-700'>Go to Shopping</Link>
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
              <p className='text-base font-bold text-gray-700 mt-2'>${product.price}</p>
              <div className='flex flex-row justify-center'>
                <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mt-2' onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                <label htmlFor="quantity" className='sm:ml-8 sm:mt-2 ml-6 mt-3'>Quantity:</label>
                <select value={quantity} className='sm:ml-2 sm:mb-1 ml-1 mt-1' id="quantity" onChange={(e) => setQuantity(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Display total cost */}
      <div className="flex justify-center mt-4">
        <h2 className="text-xl font-bold">Total Cost: ${calculateTotalCost()}</h2>
      </div>
    </>
  );
}

export default Cart;
