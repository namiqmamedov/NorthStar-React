import React from 'react'
import Header from '../Header/Header'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Carts from '../UI/cart/Carts'
import { useSelector } from 'react-redux'

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartIsVisible);

  return (
    <div>
        <Header/>
        {showCart && <Carts/>}
        <>
        <Routers/>
        </>
        <Footer/>
    </div>
  )
}

export default Layout