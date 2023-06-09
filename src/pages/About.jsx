import React from 'react'
import AboutImage from '../assets/about/aboutImage.png'
import Button from '@mui/material/Button';
import AboutProduct01 from '../assets/about/aboutProduct01.png'
import AboutProduct02 from '../assets/about/aboutProduct02.png'
import Founder01 from '../assets/about/founder01.png'
import Founder02 from '../assets/about/founder02.png'
import Founder03 from '../assets/about/founder03.png'
import Founder04 from '../assets/about/founder04.png'
import '../styles/about.css'
import {Link} from 'react-router-dom'
import Testimonial from '../components/UI/testimonial/Testimonial';


const aboutData = [
    {
        image:AboutProduct01
    },
    {
        image:AboutProduct02
    },
]

const About = () => {
  return (
    <>
    <div className='about-index'>
        <div className="about-main">
            <div className="about__content">
            About Northstar
            </div>
        </div>
        <img src={AboutImage} alt="About Image" />
    </div>

    <div className="about__product">
        <div className="container">
            <div className="row">
                <div className="about__product-thumbnail col-lg-12 col-12 col-md-12">
                    {aboutData.map((item) => (
                        <div className="product__item">
                        <Link className='product__btn'>
                            BUY NOW
                        </Link>
                        <img src={item.image} alt="About Product" />
                        </div>   
                    ))}    
                </div>
            </div>
        </div>
    </div>

    <div className="founder-index">
        <h2 className="title text-center">
        The Founders
        </h2>
        <div className="container">
            <div className="row">
                <div className="founder-wrapper col-lg-12 col-12">
                <div className="founder-item">
                    <img src={Founder01} alt="Founder Image" />
                    <div className="founder-name">
                        HM Jawad
                    </div>
                </div>
                <div className="founder-item">
                    <img src={Founder02} alt="Founder Image" />
                    <div className="founder-name">
                        Furqan Abid
                    </div>
                </div>
                <div className="founder-item">
                    <img src={Founder03} alt="Founder Image" />
                    <div className="founder-name">
                        Abdullah Ah
                    </div>
                </div>
                <div className="founder-item">
                    <img src={Founder04} alt="Founder Image" />
                    <div className="founder-name">
                        Abrar Khan
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <Testimonial/>
    </>
  )
}

export default About