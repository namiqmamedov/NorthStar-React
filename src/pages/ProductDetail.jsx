import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Product1 from '../assets/product/Product1.png'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import '../styles/product-detail.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import products from '../data/products'
import { cartActions } from '../store/shopping-cart/cartSlice';



const ProductDetail = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const {id} = useParams();
    const dispatch = useDispatch();
    const product = products.find(product => product.id === id)
    const {title, price,desc, image} = product

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
                        <img src={product.image} alt="Produt Image" />
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem className='test' value={10}>Ten</MenuItem>
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
                        <h1>hello</h1>
                        </Tab>
                        </Tabs>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail