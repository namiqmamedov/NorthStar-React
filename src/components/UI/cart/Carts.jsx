import React from 'react'
import CartItem from './CartItem'
import {AiOutlineClose} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import '../../../styles/cart.css'
import { useDispatch, useSelector} from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'

const Carts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }
    
  return (
   <div className="cart__container">
       <div className="cart">
       <span className="cart__close" onClick={toggleCart}>
            <span><AiFillCloseCircle/></span>
        </span>

        <div className="cart__item-list">
            {
                cartProducts.length === 0 ? <h6 className='text-center mt-5'>No item added to the cart</h6> : cartProducts.map((item,index)=>(
                    <CartItem item={item} key={index} />
                ))
            }
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>Subtotal amount: <span>${totalAmount}</span></h6>
            <button>
                <Link to={'checkout'}>Checkout</Link>
            </button>
        </div>
       </div>
   </div>
  )
}

export default Carts