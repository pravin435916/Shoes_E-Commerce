import React,{useState} from "react";
import './custom.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { baseUrl } from "../baseUrl";
const Contact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('User Login successfully.');
      toast.success("User Login successfully.");
      navigate("/");
    } catch (error) {
      console.error('Registration failed.', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };
  return (
    <>
    <Navbar/>
    <div className="flex flex-col sm:flex-row items-center gap-4 h-[80vh] my-5">
      <div className="relative flex justify-center items-center flex-shrink-0 w-full sm:w-1/2">
        <video
          className="h-[12rem] w-[20rem] sm:w-[36rem] object-cover sm:h-[32rem] m-10"
          src="https://assets.mixkit.co/videos/preview/mixkit-typing-her-shoes-before-exercising-15060-large.mp4"
          autoPlay
          loop
          muted
        ></video>
         <div className="absolute z-10 bottom-5 sm:bottom-20">
        <button className=" text-xs sm:text-xl button">
          <Link to='/SignUp'>Create an Account</Link>
        </button>
        </div>
      </div>
      <div className="flex-shrink-0 w-full sm:w-1/2 p-4 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full sm:w-96 mt-1 p-2 border rounded-md"
              placeholder="Enter your Email"
              onChange={(e)=> setEmail(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <button className="text-white py-2 px-4 rounded-md button" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
