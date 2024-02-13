import React, { useState } from 'react';
import axios from 'axios';
const UploadProduct = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [star, setStar] = useState('');
  const [brand, setBrand] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [uploading, setUploading] = useState(false);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImg(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('productName', name);
      formData.append('productDescription', desc);
      formData.append('productImage', img);
      formData.append('productBrand', brand);
      formData.append('productGender', gender);
      formData.append('productPrice', price);
      formData.append('productStar', star);

      const response = await axios.post('http://localhost:5000/api/NikeProducts',formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response from server:', response.data);

      if (response.data.success) {
        console.log('Product uploaded successfully');
        alert("Product uploaded successfully");        
        setName('');
        setDesc('');
        setBrand('');
        setGender('');
        setPrice('');
        setStar('');
        setImg('');
      } else {
        console.error('Failed to upload product');
      }
    } catch (error) {
      console.error('Error uploading product:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <div className="mx-8">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mx-8">
          <label htmlFor="productDesc" className="block text-gray-700 font-bold mb-2">Product Description:</label>
          <input
            type="text"
            id="productDesc"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mx-4">
          <label htmlFor="productPrice" className="block text-gray-700 font-bold mb-2">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="m-8">
          <label htmlFor="productBrand" className="block text-gray-700 font-bold mb-2">Product Brand:</label>
          <input
            type="text"
            id="productBrand"
            value={brand}
            onChange={(e)=> setBrand(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="m-8">
          <label htmlFor="productGender" className="block text-gray-700 font-bold mb-2">Product Gender:</label>
          <input
            type="text"
            id="productGender"
            value={gender}
            onChange={(e)=> setGender(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="m-8">
          <label htmlFor="productStar" className="block text-gray-700 font-bold mb-2">Product Star:</label>
          <input
            type="number"
            id="productStar"
            value={star}
            onChange={(e)=> setStar(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="m-8">
          <label htmlFor="productImage" className="block text-gray-700 font-bold mb-2">Product Image Link:</label>
          <input
            type="text"
            id="productImage"
            // accept="image/*"
            onChange={(e)=> setImg(e.target.value)}
            className="w-96 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={uploading} className="mt-16 ml-8 w-38 h-12 bg-black border rounded-lg text-white p-2 font-bold focus:outline-none hover:bg-white hover:text-black">{uploading ? 'Uploading...' : 'Upload Product'}</button>
      </form>
    </div>
  );
};

export default UploadProduct;
