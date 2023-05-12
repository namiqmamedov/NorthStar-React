// import React from 'react' import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs'; import {Link} from
// 'react-router-dom' import Button from '@mui/material/Button'; import {
// useSelector } from 'react-redux'; import '../styles/shopping-cart.css' const
// ShoppingCart = (props) => {   const cartItems = useSelector(state =>
// state.cart.cartItems)   return (     <div> <div className="breadcrumb-item">
//    <div className="container">         <div className="row">
// <Breadcrumbs aria-label="breadcrumb">             <Link
// underline="hover"             color="inherit"             to='/'
// >             HOME             </Link>             <Typography
// color="text.primary">SHOPPING CART</Typography>         </Breadcrumbs>
//  </div>     </div>    </div>       <div class="shopping-cart">         <div
// className="container">           <div className="row">           <div
// class="column-labels">           <label class="product-image">Image</label>
//         <label class="product-details">Product</label>           <label
// class="product-price">Price</label>           <label
// class="product-quantity">Quantity</label>           <label
// class="product-line-price">Total</label>         </div>         <div
// class="product">           <div class="product-image">             <img
// src={image} />           </div>           <div class="product-details">
//       <div class="product-title">{title}</div>           </div>
// <div class="product-price">${price}</div>           <div
// class="product-quantity">             <input type="number" value={quantity}
// min="1"/>           </div>           <div
// class="product-line-price">25.98</div>         </div>         <div
// class="product">           <div class="product-image">             <img
// src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFoo
// d.png"/>           </div>           <div class="product-details">
// <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
//  </div>           <div class="product-price">45.99</div>           <div
// class="product-quantity">             <input type="number" value="1"  max="5"
// />           </div>           <div class="product-line-price">45.99</div>
//     </div>         <div className="cart__totals">           <h2>Cart
// Totals</h2>           <div className="cart__price-section">
// <div className="subtotal content">                 <p>Subtotal</p>
//      <span>$59.99</span>               </div>               <div
// className="shipping content">                 <p>Shipping Fee</p>
//     <span>FREE!!!</span>               </div>               <div
// className="total-price content">                 <span>Total</span>
//       <span>$59.00</span>               </div>           </div>
// <Button className='checkout-btn' variant="contained">PROCEED TO
// CHECKOUT</Button>         </div>           </div>         </div>       </div>
//     </div>   ) } export default ShoppingCart

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../store/shopping-cart/cartSlice";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import '../styles/shopping-cart.css'

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    return (
        <section>
          <div className="container">
            <div className="row">
            {cartItems.length === 0
                ? (
                    <h5 className="text-center">Your cart is empty</h5>
                )
                : (
                   <>
                     <div class="shopping-cart">
                        <div className="container">
                            <div className="row">
                                <div class="column-labels">
                                    <label class="product-image">Image</label>
                                    <label class="product-details">Product</label>
                                    <label class="product-price">Price</label>
                                    <label class="product-quantity">Quantity</label>
                                    <label class="product-line-price">Total</label>
                                    {cartItems.map((item) => (<Tr item={item} key={item.id}/>))}
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="cart__totals">
                     <h2>Cart Totals</h2>
                     <div className="cart__price-section">
                         <div className="subtotal content">
                             <p>Subtotal</p>
                             <span>${totalAmount}</span>
                         </div>
                         <div className="shipping content">
                             <p>Shipping Fee</p>
                             <span>FREE!!!</span>
                         </div>
                         <div className="total-price content">
                             <span>Total</span>
                             <span>${totalAmount}</span>
                         </div>
                     </div>
                     <Button className='checkout-btn' variant="contained">PROCEED TO CHECKOUT</Button>
                  </div>
                   </>
                )}
            </div>
          </div>      
        </section>
    );
};

const Tr = (props) => {
    const {id, image, title, price, quantity} = props.item;
    // const dispatch = useDispatch(); const deleteItem = () => {
    // dispatch(cartActions.deleteItem(id)); };
    return (
        <div class="product">
            <div class="product-image">
                <img src={image} alt="Product Image" />
            </div>
            <div class="product-details">
                <div class="product-title">{title}</div>
            </div>
            <div class="product-price">{price}</div>
            <div class="product-quantity">
                <input type="number" value={quantity} min="1"/>
            </div>
            <div class="product-line-price">{price}</div>
        </div>
    );
};

export default ShoppingCart
