import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';

function Carts() {
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
    setShowPayment(!showPayment);
  };

  const handlePayment = () => {
    alert(`Payment Successful! Total Amount: $${calculateTotalCost()}`);
  };

  return (
    <div className="container mx-auto mt-5 min-h-[80vh]">
      {showPayment ? (
        <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Total</h2>
                <div className='flex gap-4'>
                <h2 className="text-2xl font-bold">{calculateTotalCost}</h2>
                <button className="transition-colors" onClick={handleCheckout}>
                  <RxCross2 className="w-12 h-12" />
                </button>
                </div>
              </div>
          <div className="mt-8 space-y-4">
            <div className="grid gap-2">
              <label className="text-base" htmlFor="name">
                Name on Card
              </label>
              <input className='border p-4' id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <label className="text-base" htmlFor="card-number">
                Card Number
              </label>
              <input className='border p-4' id="card-number" placeholder="Enter your card number" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="grid gap-2">
                <label className="text-base" htmlFor="expiration">
                  Expiration
                </label>
                <input className='border p-4' id="expiration" placeholder="MM/YY" />
              </div>
              <div className="grid gap-2">
                <label className="text-base" htmlFor="cvc">
                  CVC
                </label>
                <input className='border p-4' id="cvc" placeholder="CVC" />
              </div>
              <div className="grid gap-2">
                <label className="text-base" htmlFor="zip">
                  Zip Code
                </label>
                <input className='border p-4' id="zip" placeholder="Zip Code" />
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <button className="flex-1 btn-primary" variant="outline" onClick={handleCheckout}>
                Back to Cart
              </button>
              <button className="flex-1 btn-primary" onClick={handlePayment}>Place Order</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="min-h-screen rounded-lg shadow-sm">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <Link className="transition-colors" to='/'>
                  <RxCross2 className="w-12 h-12" />
                </Link>
              </div>
              {productCart.map((product) => (
                <div className="mt-8 space-y-6" key={product.id}>
                  <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
                    <img
                      alt="Product Image"
                      className="rounded-md object-cover"
                      height={400}
                      src={product.img}
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                    <div>
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-gray-500 ">{product.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button className="   transition-colors">
                          <FaMinus className="w-5 h-5" />
                        </button>
                        <span className="text-gray-700 dark:text-gray-300">1</span>
                        <button className="   transition-colors">
                          <FaPlus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-lg font-medium">{product.price}</p>
                      <button className="   transition-colors">
                        <MdDelete className="w-5 h-5" onClick={() => removeFromCart(product.id)} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 ">Total</p>
                <p className="text-lg font-medium">${calculateTotalCost()}</p>
              </div>
              <div className="mt-4 flex gap-2 justify-between">
                <Link className=" btn-primary" to='/shop'>
                  Continue Shopping
                </Link>
                <button className=" btn-primary" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
