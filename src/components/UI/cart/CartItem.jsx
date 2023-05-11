import React from 'react'
import productImg from '../../../assets/product/Product1.png'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import '../../../styles/cart-item.css'

const CartItem = () => {
  return (
   <div className="list-group card__item">
     <div className='cart__item-info d-flex gap-2'>
        <img src={productImg} alt="Product" />
        <div className='cart__product-info w-100 d-flex align-items-center gap-5 justify-content-between'>
            <div>
                <h6 className='cart__product-title'>Burger</h6>
                <p className='cart__product-price d-flex align-items-center gap-5'>2x <span>$24.00</span> </p>
                <div className='d-flex align-items-center gap-3 justify-content-between increase__decrease-btn'>
                    <span className='increase__btn'><AiOutlinePlus/></span>
                    <span className='quantity'>2</span>
                    <span className='decrease__btn'><AiOutlineMinus/></span>
                </div>
            </div>
            <span className='delete__btn'><AiOutlineClose/></span>
        </div>
    </div>
   </div>
  )
}

export default CartItem