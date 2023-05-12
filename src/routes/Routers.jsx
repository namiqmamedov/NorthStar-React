import React from 'react'
import Home from '../pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ShoppingCart from '../pages/ShoppingCart'


const Routers = () => {
  return (
    <Routes>
            <Route path='/' element={< Navigate to = '/home' />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
    </Routes>
  )
}

export default Routers