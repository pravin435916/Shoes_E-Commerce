import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Contact from './components/Contact';
import Blog from './components/Blog';
import CreateAccount from './components/CreateAccount';
import Error404 from './components/Error404';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Wish from './components/Wish';
import { NikeData, PumaData } from './components/mergeData';
import Viewmorepage from './components/Viewmorepage';
import './App.css'
import UserList from './Admin/UserList';
import AdminDashboard from './Admin/AdminDashboard';
import Collections from './components/Collections';
import UploadProduct from './Admin/UploadProduct';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function removeSpaces(text) {
    return text.replace(/\s/g, '');
  }

  const allProducts = [...NikeData, ...PumaData];
  const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };
  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
         <div className="bar">
           <div className="ball"></div>
           <span>Loading...</span>
        </div>
        </div>
      ) : (
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/SignUp" element={<CreateAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wish />} />
            <Route path="/collections" element={<Collections/>} />

            <Route path="/admin/" element={<AdminDashboard />}>
               <Route path="users" element={<UserList />} />
               <Route path="products" element={<Products />} />
               <Route path="upload" element={<UploadProduct />} />
            </Route>

            <Route path="/*" element={<Error404 />} />
            {allProducts.map((product) => (
              <Route
                key={product.id}
                path={`/${removeSpaces(product.name)}/${product.id}`}
                element={<Viewmorepage name={product.name} desc={product.desc} img={product.img} price={product.price} />} // Replace YourComponent with the appropriate component to render
              />
            ))}
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
