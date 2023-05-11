import React from 'react'
import CartItem from './CartItem'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import '../../../styles/shopping-cart.css'

const Carts = () => {
  return (
   <div className="cart__container">
       <div className="cart">
       <div className="cart__close">
            <span><AiOutlineClose/></span>
        </div>

        <div className="cart__item-list">
            <CartItem/>
            <CartItem/>
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>Subtotal amount: <span>$123</span></h6>
            <button>
                <Link>Checkout</Link>
            </button>
        </div>
       </div>
   </div>
  )
}

export default Carts