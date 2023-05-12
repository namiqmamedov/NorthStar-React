import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom'

const ShoppingCart = () => {
  return (
   <div className="breadcrumb-item">
    <div className="container">
        <div className="row">
            <Breadcrumbs aria-label="breadcrumb">
            <Link
            underline="hover"
            color="inherit"
            to='/'
            >
            HOME
            </Link>
            <Typography color="text.primary">SHOPPING CART</Typography>
        </Breadcrumbs>
        </div>
    </div>
   </div>
  )
}

export default ShoppingCart