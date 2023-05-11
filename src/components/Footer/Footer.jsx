import React from 'react'
import '../../styles/footer.css'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import visa from '../../assets/footer/visa.png'
import master from '../../assets/footer/master.png'
import paypal from '../../assets/footer/paypal.png'
import visaElectron from '../../assets/footer/visa-electron.png'
import {BiChevronRight} from 'react-icons/bi'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Footer = () => {
  return (
    <div className="footer-index">
      <div className="container">
        <div className="row">
        <div className="footer-main">
        <div className="footer-item">
          <h5 className='title'>COMPANY INFO</h5>
          <ul>
            <li>
              <Link>
              About Us
              </Link>
            </li>
            <li>
              <Link>
              Latest Post
              </Link>
            </li>
            <li>
              <Link>
              Contact Us
              </Link>
            </li>
            <li>
              <Link>
              Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h5 className='title'>HELP LINKS</h5>
          <ul>
            <li>
              <Link>
              Tracking
              </Link>
            </li>
            <li>
              <Link>
              Order Status
              </Link>
            </li>
            <li>
              <Link>
              Delivery
              </Link>
            </li>
            <li>
              <Link>
              Shipping Info
              </Link>
            </li>
            <li>
              <Link>
              FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h5 className='title'>USEFUL LINKS</h5>
          <ul>
            <li>
              <Link>
              Special Offers
              </Link>
            </li>
            <li>
              <Link>
              Gift Cards
              </Link>
            </li>
            <li>
              <Link>
              Advetising
              </Link>
            </li>
            <li>
              <Link>
              Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      <div className="footer-item-accordion">
      <Accordion className='footer-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>COMPANY INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='footer-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>HELP LINKS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='footer-accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>USEFUL LINKS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="footer-item">
          <h5 className='title'>USEFUL LINKS</h5>
          <TextField id="standard-basic" label="Enter email" variant="standard" />
          <BiChevronRight/>
        </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper">
          <div className="wrapper-top">
          <p className="since-item">
          © 2020 eCommerce, Made by DeoThemes.
          </p>
          <p className="terms-item">
          Privacy Policy Terms & Conditions
          </p>
          </div>
          <div className="payment-item">
            <img src={visa} alt="Visa" title='Visa' />
            <img src={master} alt="Master Card" title='Master Card' />
            <img src={paypal} alt="Paypal" title='Paypal' />
            <img src={visaElectron} alt="Visa Electron" title='Visa Electron' />
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer