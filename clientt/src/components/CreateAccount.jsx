import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import './custom.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../baseUrl";
import Navbar from "./Navbar";
const CreateAccount = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/signup`, { username, email, password });
      console.log('User Created successfully.');
      toast.success("User Created successfully.");
      navigate("/contact");
    } catch (error) {
      console.error('Registration failed.', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="flex flex-col sm:flex-row items-center gap-4 h-[80vh] my-5">
      <div className="relative flex justify-center items-center flex-shrink-0 w-full sm:w-1/2">
        <video
          className="h-[12rem] w-[20rem] sm:w-[36rem] object-cover sm:h-[32rem]"
          src="https://assets.mixkit.co/videos/preview/mixkit-typing-her-shoes-before-exercising-15060-large.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute z-10 bottom-5 sm:bottom-20">
        <button className=" text-xs sm:text-xl button">
          <Link to='/contact'>Sign In</Link>
        </button>
        </div>
      </div>
      <div className="flex-shrink-0 w-full sm:w-1/2 p-4 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full sm:w-96 mt-1 p-2 border rounded-md"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="text-white py-2 px-4 rounded-md button" onClick={handleRegister}>
            Create Account
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateAccount;
