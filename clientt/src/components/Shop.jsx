import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import NikeData from './NikeData';
import PumaData from './PumaData';

const Shop = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('nike');

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleBrandChange = (selectedBrand) => {
    console.log('Selected Brand:', selectedBrand);
    setBrand(selectedBrand);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const currentData = brand === 'nike' ? NikeData : PumaData;
  const filteredProducts = currentData.filter(product =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    (minPrice === '' || product.price >= parseInt(minPrice, 10)) &&
    (maxPrice === '' || product.price <= parseInt(maxPrice, 10))
  );

  return (
    <div className='flex w-full h-[80vh] my-5 absolute overflow-hidden'>
      <div className='w-1/3 bg-blue-200 p-8 sticky top-0'>
        <h1 className='text-2xl font-bold mb-4'>Filter Products</h1>
        <div className='mb-4'>
          <input
            type="text"
            placeholder="Search by name..."
            value={nameFilter}
            onChange={handleNameFilterChange}
            className='border p-2 w-full'
          />
        </div>
        <div className='flex gap-4 mb-4'>
          <label>
            <input
              type="radio"
              value="nike"
              checked={brand === 'nike'}
              onChange={() => handleBrandChange('nike')}
            />
            Nike
          </label>

          <label>
            <input
              type="radio"
              value="puma"
              checked={brand === 'puma'}
              onChange={() => handleBrandChange('puma')}
            />
            Puma
          </label>
        </div>
        <div className='flex gap-4'>
          <div>
            <label className='block'>Min Price:</label>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
              className='border p-2 w-full'
            />
          </div>
          <div>
            <label className='block'>Max Price:</label>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className='border p-2 w-full'
            />
          </div>
        </div>
      </div>

      <div className='w-2/3 bg-white p-8 overflow-y-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className='border p-4 rounded-md'>
              <img className='w-full h-40 object-cover mb-2' src={product.img} alt={product.name} />
              <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
              <p className='text-sm text-gray-600 mb-2'>{product.desc}</p>
              <p className='text-lg font-bold text-blue-500'>${product.price}</p>
              <div className='flex gap-2 mt-2'>
                <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' title='Add to Cart' id='butt1'><IoMdCart className='z-10 absolute' /></span>
                <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' id='butt2'><CiHeart className='z-10 absolute' /></span>
                <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' id='butt3'><HiOutlineViewfinderCircle className='z-10 absolute' /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
