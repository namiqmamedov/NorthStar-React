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
                    <div className="breadcrumb-main">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className="breadcrumb-item">
                            HOME
                        </Link>
                        <Typography color="text.primary" class="breadcrumb-base">SHOPPING CART</Typography>
                    </Breadcrumbs>
                    </div>
                    {cartItems.length === 0
                        ? (
                            <h5 className="text-center m-5">Your cart is empty</h5>
                        )
                        : ( <> <div class="shopping-cart">
                            <div className="container">
                                <div className="row">
                                    <div class="column-labels">
                                        <label class="product-image product-unshow">Image</label>
                                        <label class="product-details product-unshow">Product</label>
                                        <label class="product-price product-unshow">Price</label>
                                        <label class="product-quantity product-unshow">Quantity</label>
                                        <label class="product-line-price product-unshow">Total</label>
                                        {cartItems.map((item) => (<Tr item={item} key={item.id}/>))}
                                    </div>
                                </div>
                            </div>
                        </div> < div className = "cart__totals" > <h2>Cart Totals</h2> < div className = "cart__price-section" > <div className="subtotal content">
                            <p>Subtotal</p>
                            <span>${totalAmount}</span>
                        </div> < div className = "shipping content" > <p>Shipping Fee</p> < span > FREE !!!</span> </div>
                         <div className="total-price content">
                             <span>Total</span > <span>${totalAmount}</span> </div>
                     </div > <Button className='checkout-btn' variant="contained">PROCEED TO CHECKOUT</Button> </div>
                   </>)}
                </div>
            </div>
        </section>
    );
};

const Tr = (props) => {
    const {id, image, title, price, quantity} = props.item;
    return (
        <div class="product">
            <div class="product-image">
                <img src={image} alt="Product Image"/>
            </div>
            <div class="product-details">
                <div class="product-title">{title}</div>
            </div>
            <div class="product-price">{price}</div>
            <div class="product-quantity">
                <input type="number" value={quantity}/>
            </div>
            <div class="product-line-price">{price}</div>
        </div>
    );
};

export default ShoppingCart
