import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import products from '../data/products'
import { cartActions } from '../store/shopping-cart/cartSlice';
import ReactImageMagnify from 'react-image-magnify'
import '../styles/product-detail.css'


const ProductDetail = () => {

    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    const {id} = useParams();
    const dispatch = useDispatch();
    const product = products.find(product => product.id === id)
    const {title, price, desc, image} = product

    const addItem = () =>{
      dispatch(cartActions.addItem({
        id,
        title,
        price,
        image
    }))
    }

  return (
    <div className='product__index'>
        <div className="container">
            <div className="row">
                <div className="product__main">
                    <div className="product__thubmanil col-lg-5">
                    <ReactImageMagnify className='imageMagnify' {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.image,
                        },
                        largeImage: {
                            src: product.image,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    </div>
                    <div className="product__content col-lg-7">
                    <div className="breadcrumb-main" id="breadcrumb-product">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className="breadcrumb-item">
                            HOME
                        </Link>
                        <Link underline="hover" color="inherit" href="/" className="breadcrumb-item">
                            SHOP
                        </Link>
                        <Link underline="hover" color="inherit" href="/" className="breadcrumb-item">
                            MEN
                        </Link>
                        <Typography color="text.primary" class="breadcrumb-base">SHOP</Typography>
                    </Breadcrumbs>
                    </div>
                        <h2 className='product__title'>{product.title}</h2>
                        <div className="feedback__main">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                            <span className='item__count'>
                                (15)
                            </span>
                        </div>
                        <div className="product__price">
                            <div className="old__price">
                            $69.00 
                            </div>
                            <span className='main__price'>
                            ${product.price}
                            </span>
                        </div>
                        <div className="product__description">
                            <p>
                                {product.desc}
                            </p>
                        </div>
                        <div className="product__size">
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth className='input__main'>
                            <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Size"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                        </div>
                        <Button onClick={addItem} className='addToCart' variant="contained">ADD TO CART</Button>
                        <div className="bottom__main">
                            <div className="product__wrapper">
                            <div className="category__wrapper">
                            <span>Category:</span>
                            Men, Polo, Casual
                            </div>
                            <div className="tag__wrapper">
                                <span>Tags:</span>
                                Modern, Design, cotton
                            </div>
                            </div>
                        <div className="social__link">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item">
                                <HiOutlineMail/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="product__index">
                    <Tabs
                        defaultActiveKey="description"
                        id="uncontrolled-tab-example"
                        >
                        <Tab eventKey="description" title="Description">
                           <div className="tab__main">
                           <p className='tab__content'>
                                A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. 
                                Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience. 
                            </p>
                           </div>
                        </Tab>
                        <Tab eventKey="review" title="Reviews(0)">
                        <div className="tab__main">
                        <div class="review">
                            <p class="user__name mb-0">Jhon Doe</p>
                            <p class="user__email">user@protonmail.com</p>
                            <p class="feedback__text">great product</p>
                        </div>
                        <div class="review">
                            <p class="user__name mb-0">Ricardo Gonzalez</p>
                            <p class="user__email">ricardo@protonmail.com</p>
                            <p class="feedback__text">Thank you !</p>
                        </div>
                        <form class="form">
                            <div class="form__group">
                                <input type="text" placeholder="Enter your name" required=""/>
                            </div>
                            <div class="form__group">
                                <input type="email" placeholder="Enter your email" required=""/>
                            </div>
                            <div class="form__group">
                                <textarea rows="5" type="text" placeholder="Write your review">
                                </textarea>
                            </div>
                            <Button className='submitBtn' variant="contained">Submit</Button>
                        </form>
                        </div>
                        </Tab>
                        </Tabs>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail