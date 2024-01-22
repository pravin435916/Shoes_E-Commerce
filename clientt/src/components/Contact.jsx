import React from "react";
import './custom.css';

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
      <div className="relative flex justify-center items-center flex-shrink-0 w-full sm:w-1/2">
        <video
          className="h-[12rem] w-[20rem] sm:w-[36rem] object-cover sm:h-[32rem]"
          src="https://assets.mixkit.co/videos/preview/mixkit-typing-her-shoes-before-exercising-15060-large.mp4"
          autoPlay
          loop
          muted
        ></video>
        <button className="absolute z-10 bottom-5 sm:bottom-20 text-xs sm:text-xl button">Create an account</button>
      </div>
      <div className="flex-shrink-0 w-full sm:w-1/2 p-4 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full sm:w-96 mt-1 p-2 border rounded-md"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full sm:w-96 mt-1 p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <button className="text-white py-2 px-4 rounded-md button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
