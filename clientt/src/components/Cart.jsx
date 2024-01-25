import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <p className="text-lg font-semibold">
              Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
