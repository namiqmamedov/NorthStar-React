import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/faq.css'

const Faq = () => {
  return (
   <section className='faq-index'>
    <div className="container">
        <div className="row">
        <h1>Terms & Conditions</h1>
   <div className="accordion-index">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>The legal bits...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We’re ASOS.com Limited, Dutch Branch a company branch registered in the Netherlands with a registered address at Luna ArenA, Herikerbergweg 238, 1101 CM Amsterdam and registered with the trade register of the Dutch Chamber of Commerce (Kamer van Koophandel) under number 86043188. 
          </Typography>
          <Typography>
          When you shop with us (or access our services, apps and websites (our “Websites”)), these terms apply. They’re important for both of us as they set out what we expect from each other, and they also give you helpful info. You can also find out more on our Help pages (which also form part of these terms). Of course, if you need anything else, get in touch with Customer Care – we always love to hear from you!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>About you</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>To shop with us, you need to:</Typography>
          <ul className='ul-list'>
            <li><span>be at least 16 years old; </span></li>
            <li><span>have a credit or debit card that we accept (see bottom of page for details of current payment providers); and</span></li>
            <li><span>be authorised to use that credit or debit card (e.g. it is in your name or you have permission to use it).</span></li>
          </ul>
          <Typography>Just FYI, some of the goods sold through our Websites may not be suitable for under 18s.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Returns and refunds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you have purchased an item that was in the sale (that means it had a red-penned, reduced price) you can request a refund for your item within 14 days of it being delivered to you or becoming available for collection. You then need to ensure that you return the item to us within a further 14 days. Provided that we receive your item within 28 days of it being delivered to you or becoming available for collection, we will issue a refund to your original payment method.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Your information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Privacy Policy sets out how we’ll use your information. If your details change, remember that you need to update My Account so we can continue giving you our best service (you can also update your marketing preferences there).
          </Typography>
          <Typography>
          At ASOS, we love being able to interact with and chat to you through social media. However, we can’t control those social media platforms or how you set your profiles on them. Please check and set your privacy settings so that you understand and are comfortable with how your personal information on those platforms will be used.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Promo Codes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          From time to time, we may give you Promo Codes that you can use to reduce the price of specified products. Remember, it’s up to you to enter the code at checkout!
          </Typography>
          <Typography>
          Each Promo Code has its own terms, which will be made clear at the time it’s issued to you (e.g. what products, single/multiple use, when it can be used etc).
          </Typography>
          <Typography>
          Unless we tell you otherwise, Promo Codes can’t be used to buy ASOS Premier, ASOS Gift Vouchers or on ASOS Marketplace.
          </Typography>
        </AccordionDetails>
      </Accordion>
   </div>
        </div>
    </div>
   </section>
  )
}

export default Faq