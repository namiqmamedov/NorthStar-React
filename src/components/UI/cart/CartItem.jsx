import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux'
import {cartActions}  from '../../../store/shopping-cart/cartSlice'

const CartItem = ({item}) => {

    const {id,title,price,image,quantity,totalPrice} = item

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image
        }))
    }

    const decreaseItem = () => {
       dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

  return (
   <div className="list-group card__item">
     <div className='cart__item-info d-flex gap-2'>
        <img src={image} alt="Product" />
        <div className='cart__product-info w-100 d-flex align-items-center gap-5 justify-content-between'>
            <div>
                <h6 className='cart__product-title'>{title}</h6>
                <p className='cart__product-price d-flex align-items-center gap-5'>{quantity}x <span>${totalPrice}</span> </p>
                <div className='d-flex align-items-center gap-3 justify-content-between increase__decrease-btn'>
                    <span className='increase__btn' onClick={incrementItem}><AiOutlinePlus/></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='decrease__btn' onClick={decreaseItem}><AiOutlineMinus/></span>
                </div>
            </div>
            <span className='delete__btn' onClick={deleteItem}><AiOutlineClose/></span>
        </div>
    </div>
   </div>
  )
}

export default CartItem