import React from 'react'
import HomeImg from '../assets/home/HomeImg.png'
import {NavLink, Link} from 'react-router-dom'
import productData from '../data/products'
import '../styles/home.css'
import Button from '@mui/material/Button';
import Product1 from '../assets/product/Product1.png'
import mainLogo01 from '../assets/home/mainLogo01.svg'
import mainLogo02 from '../assets/home/mainLogo02.svg'
import mainLogo03 from '../assets/home/mainLogo03.svg'
import mainLogo04 from '../assets/home/mainLogo04.svg'
import DiscoverCard from '../components/UI/discover-card/DiscoverCard'
import MainThumbnail from '../components/UI/main-thumbnail/mainThumbnail'

const mainData = [
    {
        title: 'FREE SHIPPING',
        logo: mainLogo01,
        desc: 'Enjoy free shipping on all orders above $100'
    }, 
    {
        title: 'SUPPORT 24/7',
        logo: mainLogo02,
        desc: 'Our support team is there to help you for queries'
    },
     {
        title: '30 DAYS RETURN',
        logo: mainLogo03,
        desc: 'Simply return it within 30 days for an exchange'
    },
    {
        title: '100% PAYMENT SECURE',
        logo: mainLogo04,
        desc: 'Our payments are secured with 256 bit encryption'
    },

]

const Home = () => {
    return ( <> 

    <div className='home-index'>
        <div className="home__index-content">
            <div className="home__index-body">
                <h1>stylist picks beat the heat</h1>
                <Link className="shop__now-btn">
                    SHOP NOW
                </Link>
            </div>
        </div>
        <img src={HomeImg} alt="Home Image"/>
    </div> 

    <section> 
        <div className="section__top text-center">
        <h5 className='section-title'>Discover NEW Arrivals</h5>
        <p className='section-subtitle'>Recently added shirts!</p>
        <div className="card-wrapper">
            <div className="container">
                <div className="row">
                    <div className="card-wrapper-index">
                        {productData.map((item,index)=> (
                            <DiscoverCard key={index} item={item}/>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </section>

    <section className="main__wrapper">
        <div className="container">
            <div className="row">
            {mainData.map((item,index) => (
        <div className="main-card col-lg-3 col-6" key={index}>
            <div className="main-item">
                <div className="card-top">
                    <img className='main-image' src={item.logo} alt="Main Image" />
                    <h4>{item.title}</h4>
                </div>
                <p className='description'>
                    {item.desc}
                </p>
            </div>
        </div>
    ))}
            <div className="main__thumbnail">
                <MainThumbnail/>
            </div>
            </div>
        </div>
    </section>

    <section>
    <h5 className='section-title'>Top Sellers</h5>
    <p className='section-subtitle'>Browse our top-selling products</p>
    <div className="card-wrapper">
            <div className="container">
                <div className="row">
                    <div className="card-wrapper-index">
                         {productData.slice(-4).map((item,index)=> (
                            <DiscoverCard key={index} item={item}/>
                        ))} 
                    </div>
                    <Link className='shopNow-btn'>
                    <Button variant="contained">SHOP NOW</Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>

     </>)
}

export default Home