import React from 'react'
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Contact from './components/Contact'
import Blog from './components/Blog'
import CreateAccount from './components/CreateAccount'
import Error404 from './components/Error404'
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Products/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/SignUp" element={<CreateAccount/>}/>
          <Route path="/cart" element={<Home/>}/>
          <Route path="/wishlist" element={<Home/>}/>
          <Route path="/pages" element={<Home/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App