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
import Error from '../pages/Error'
import Faq from '../pages/Faq'
import TermsOfUse from '../pages/TermsOfUse'
import GiftCard from '../pages/GiftCard'
import Delivery from '../pages/Delivery'


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
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/gift-card" element={<GiftCard />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Routers