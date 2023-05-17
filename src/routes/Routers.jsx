import React from 'react'
import Home from '../pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ShoppingCart from '../pages/ShoppingCart'
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Routers = () => {
  return (
    <Routes>
            <Route path='/' element={< Navigate to = '/home' />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Routers