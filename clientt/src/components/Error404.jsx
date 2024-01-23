import React from 'react';
import './Error404.css';
const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <div className="truck-animation "></div> {/* Truck animation container */}
        <p className="text-gray-600 mb-4">Oops! It looks like you're lost.</p>
        <p className="text-gray-600 mb-8">The page you are looking for might not exist.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to the home page
        </a>
      </div>
    </div>
  );
};

export default Error404;
