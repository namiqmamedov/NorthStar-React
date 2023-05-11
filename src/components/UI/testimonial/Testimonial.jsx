import React from 'react'
import Testimonial01 from '../../../assets/about/testimonial01.png'
import Testimonial02 from '../../../assets/about/testimonial02.png'
import Testimonial03 from '../../../assets/about/testimonial03.png'
import '../../../styles/testimonial.css'
import {FiUser} from 'react-icons/fi'
import Quote from '../../../assets/about/quote.svg'


const testimonialData = [
    {
        image: Testimonial01,
        name: 'Stacy',
        desc: 'Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.'
    }, 
    {
        image: Testimonial02,
        name: 'Tiffany',
        desc: 'I ordered 5 shirts from them and received them in no time. The customer support was awesome!'
    }, 
    {
        image: Testimonial03,
        name: 'James',
        desc: 'I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.'
    }

]

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="row">
                <div className="testimonial-wrapper">
                {testimonialData.map((item) => (
                    <div className='testimonial-item'>
                        <div className="testimonial-body">
                        <img src={item.image} alt="Testimonial Image" />
                        <div className="testimonial-center">
                        <img src={Quote} alt="Quote" />
                        <div className="testimonial-description">
                            {item.desc}
                        </div>
                        <p className='testimonial-name'>
                            {item.name}
                        </p>
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial