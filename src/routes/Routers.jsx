import React from 'react'
import Home from '../pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'


const Routers = () => {
  return (
    <Routes>
            <Route path='/' element={< Navigate to = '/home' />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default Routers