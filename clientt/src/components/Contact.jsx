import React from "react";

const Contact = () => {
  return (
    <div className="flex h-[83vh] justify-center items-center ">
      <div className="relative flex justify-center items-center flex-shrink-0 w-1/2">
        <video 
        className="w-[34rem] object-cover h-[34rem]"
        src="https://assets.mixkit.co/videos/preview/mixkit-typing-her-shoes-before-exercising-15060-large.mp4"  
        autoPlay
        loop
        muted>
        </video>
           <span className="absolute z-10 bottom-20 text-xl w-68 px-8 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-500 text-white flex justify-center items-center cursor-pointer">Create an Account</span>
      </div>
      <div className="flex-shrink-0 w-1/2 p-8">
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
              className="w-96 mt-1 p-2 border rounded-md"
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
              className="w-96 mt-1 p-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-4 rounded-md "
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
