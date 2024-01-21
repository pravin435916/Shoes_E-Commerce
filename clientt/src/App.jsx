import React from 'react'
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Home/>}/>
          <Route path="/contact" element={<Home/>}/>
          <Route path="/shop" element={<Home/>}/>
          <Route path="/cart" element={<Home/>}/>
          <Route path="/pages" element={<Home/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App