import React from 'react'
import ContactImage from '../assets/contact/contactImage.png'
import '../styles/contact.css'
import Button from '@mui/material/Button';



const Contact = () => {
  return (
   <>
     <div className='contact-index'>
    <div className="contact-main">
        <div className="contact__content">
        CONTACT US
        </div>
    </div>
    <img src={ContactImage} alt="Contact Image" />
    </div>

    <div className="contact__main">
        <div className="container">
            <div className="row">
                <div className="contact-index col-lg-9">
                    <h3 className="title">
                    We would love to hear from you.
                    </h3>
                    <div className="description">
                    If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
                    </div>

                    <div className="form-top">
                    <div className="form-index">
                        <label>Name</label>
                        <input name='name' />
                    </div>
                    <div className="form-index">
                        <label>Email</label>
                        <input name='email' />
                    </div>
                    </div>
                    <div className="form-index message">
                        <label>Message</label>
                       <textarea name="message">
                       </textarea>
                    </div>
                    <Button className='send-message' variant="contained">SEND MESSAGE</Button>

                </div>
                <div className="contact-detail col-lg-3">
                    <div className="content">
                    <h4 className='title__detail'>Visit Us</h4>
                    <div className="location text">UET Lahore, Punjab, Pakistan</div>
                    <a className='phone text' href="tel:+923039898987">
                    Phone:+923039898987
                    </a>
                    </div>

                    <div className="content">
                    <h4 className='title__detail'>Get In Touch</h4>
                    <div className="get-touch text">
                    You can get in touch with us on this provided email.
                     <a className='email text' href="mailto:hmjawad087@gmail.com">
                     Email: hmjawad087@gmail.com
                     </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Contact