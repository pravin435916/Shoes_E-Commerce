// Cart.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const [quantities, setQuantities] = useState({});
  const [showPayment, setShowPayment] = useState(false); // State to toggle payment page
  const dispatch = useDispatch();
  const productCart = useSelector(state => state.cart.items);

  const updateQuantity = (id, quantity) => {
    setQuantities(prevState => ({
      ...prevState,
      [id]: quantity
    }));
  };

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalCost = () => {
    let total = 0;
    productCart.forEach((product) => {
      const quantity = quantities[product.id] || 1;
      total += parseFloat(product.price.replace(',', '')) * parseInt(quantity);
    });
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePayment = () => {
    alert(`Payment Successful! Total Amount: $${calculateTotalCost()}`);
  };

  return (
    <div className="container mx-auto mt-5 min-h-[80vh]">
      {showPayment ? (
        <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-md p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h2>
          <div className="border-b border-gray-300 mb-4"></div>
          <p className="text-lg text-gray-700 mb-4">Total Amount: <span className="font-bold">${calculateTotalCost()}</span></p>
          <label htmlFor="cardNumber" className="block text-sm text-gray-600 mb-2">Card Number</label>
          <input type="text" id="cardNumber" className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" placeholder="Enter your card number" required />
          <label htmlFor="expiry" className="block text-sm text-gray-600 mb-2">Expiration Date</label>
          <div className="flex mb-4">
            <input type="text" id="expiry" className="w-1/2 mr-2 border border-gray-300 rounded-md px-4 py-2" placeholder="MM/YYYY" required/>
            <input type="text" id="cvv" className="w-1/2 border border-gray-300 rounded-md px-4 py-2" placeholder="CVV" required/>
          </div>
          <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Cardholder Name</label>
          <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" placeholder="Enter cardholder name" required/>
          <button onClick={handlePayment} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Pay Now</button>
        </div>
      </div>
      
      ) : (
        <>
          {productCart.length === 0 ? (
            <div className='h-[80vh] flex justify-center flex-col gap-4 items-center'>
              <span className='font-bold text-3xl text-gray-800'>No items in the Cart</span>
              <Link to='/shop' className='underline text-blue-500 hover:text-blue-700'>Go to Shopping</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-h-[80vh]">
              {productCart.map((product) => (
                <div className='border border-gray-200 rounded-md shadow-md overflow-hidden' key={product.id}>
                  <img className='w-full h-48 object-cover' src={product.img} alt={product.name} />
                  <div className="p-4">
                    <h2 className='text-lg font-bold text-gray-700'>{product.name}</h2>
                    <p className='text-sm text-gray-500 mt-1'>{product.desc}</p>
                    <p className='text-base font-bold text-gray-700 mt-2'>${product.price}</p>
                    <div className='flex justify-between items-center mt-4'>
                      <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600' onClick={() => removeFromCart(product.id)}>Remove</button>
                      <div>
                        <label htmlFor={`quantity-${product.id}`} className='mr-2'>Quantity:</label>
                        <select
                          value={quantities[product.id] || "1"}
                          id={`quantity-${product.id}`}
                          onChange={(e) => updateQuantity(product.id, e.target.value)}
                        >
                          {[1, 2, 3, 4].map((qty) => (
                            <option key={qty} value={qty}>{qty}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-4 mb-10">
            <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
