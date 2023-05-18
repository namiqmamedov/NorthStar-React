import React from 'react'
import Card from '../assets/gift-card/giftcard.webp'
import Button from '@mui/material/Button';
import '../styles/gift-card.css'

const GiftCard = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
            <div id='gift-card' className="gift__card">
                <h1>NORTH STAR GIFT CARDS</h1>
            <img src={Card} alt="Gift Card" />
            <div className="content d-flex">
                <p>
                Bagged yourself an North Star gift card? Lucky you!
                 You've unlocked access to all the brands at ASOS (including the ASOS collection and other fashion favourites) and many more exclusives all in one place. Safety first, though – be sure to register your card and attach it to your ASOS account. If you don’t already have one, it's super easy to get signed up.
                </p>
                <div className="gift-btn">
                <Button variant="contained">LET'S GO!</Button>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default GiftCard