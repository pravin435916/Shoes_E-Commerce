import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import NikeData, { getNikeData, getPumaData } from './mergeData';
import PumaData from './mergeData';
import { addItem , wishItem } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Shop = () => {
  
    function removeSpaces(text) {
      // Use regular expression to remove spaces
      return text.replace(/\s/g, '');
    }
  

  const dispatch = useDispatch()
  const nikeData = getNikeData();
  const pumaData = getPumaData();
  const [nameFilter, setNameFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('nike');

  const addToCart = (product) => {
    dispatch(addItem(product));
    alert("Product is added to the cart")
  };
  const wishToCart = (product) => {
    dispatch(wishItem(product));
    alert("Product is wishlisted to the cart")
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

  const currentData = brand === 'nike' ? nikeData : pumaData;
  const filteredProducts = currentData.filter(product =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    (minPrice === '' || product.price >= parseInt(minPrice, 10)) &&
    (maxPrice === '' || product.price <= parseInt(maxPrice, 10))
  );

  return (
    <div className='flex sm:flex-row flex-col w-full h-[84vh]  relative  overflow-hidden'>
      <div className='w-full mx-5 sm:w-[24rem] bg-white p-2 sm:p-8 block sm:sticky top-0'>
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

      <div className='w-full sm:w-full bg-white p-8 overflow-auto'>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredProducts.map(product => (
            <div key={product.id} className='border p-4 rounded-md h-[24rem] sm:h-full'>
              <img className='w-full h-40 object-cover mb-2' src={product.img} alt={product.name} />
              <h2 className='text-[1rem] sm:text-lg font-semibold mb-2'>{product.name}</h2>
              {/* <p className=' text-gray-600 mb-2 text-xs'>{product.desc}</p> */}
              <p className='text-lg font-bold text-blue-500'>${product.price}</p>
              <div className='flex gap-2 mt-2 relative'>
                <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer' title='Add to Cart' onClick={()=> addToCart(product)} id='butt1'><IoMdCart className='z-10 absolute' /></span>
                <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer'  onClick={()=> wishToCart(product)} id='butt2'><CiHeart className='z-10 absolute' /></span>
                <Link to={`/${removeSpaces(product.name)}/${product.id}`}> 
                        <span className='w-8 h-8 rounded-full bg-blue-300 hover:bg-gradient-to-r from-orange-400 to-red-500 text-xl text-white flex justify-center items-center cursor-pointer ' id='butt3'>
                        
                            <HiOutlineViewfinderCircle className='z-10 absolute'/>                        
                        </span>
                        </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;