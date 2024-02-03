import React from 'react'
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Contact from './components/Contact'
import Blog from './components/Blog'
import CreateAccount from './components/CreateAccount'
import Error404 from './components/Error404'
import Shop from './components/Shop'
import Cart from './components/Cart'

import Footer from './components/Footer'
import Wish from './components/Wish'
import { NikeData, PumaData } from './components/mergeData';
import Viewmorepage from './components/Viewmorepage'
function App() {
  function removeSpaces(text) {
    // Use regular expression to remove spaces
    return text.replace(/\s/g, '');
  }

  const allProducts = [...NikeData, ...PumaData];


  return (
   

    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/SignUp" element={<CreateAccount/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wish/>}/>
          <Route path="/collections" element={<Products/>}/>
          {allProducts.map((product) => (
          <Route
            key={product.id}
            path={`/${removeSpaces(product.name)}/${product.id}`}
            element={<Viewmorepage name={product.name} desc={product.desc} img={product.img} price={product.price}/>} // Replace YourComponent with the appropriate component to render
          />
        ))}
          <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App