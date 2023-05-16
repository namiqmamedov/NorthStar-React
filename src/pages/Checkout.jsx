import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link';
import Form from 'react-bootstrap/Form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/checkout.css'

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Product', 'Total'),
    createData('Plain White Shirt', '$59.00'),
    createData('Subtotal', '$59.00')
];

const Checkout = () => {
    return (
        <div className="checkout-index">
            <div className="container">
                <div className="row">
                    <div className="breadcrumb-main" id="breadcrumb-product">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/" className="breadcrumb-item">
                                HOME
                            </Link>
                            <Typography color="text.primary" class="breadcrumb-base">CHECKOUT</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className="checkout__index">
                        <h2>Billing details</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Full Name
                                    <span className='radius'>*</span>
                                </Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Street address
                                    <span className='radius'>*</span>
                                </Form.Label>
                                <Form.Control type="text" placeholder="House number and street name"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicTownAndCity">
                                <Form.Label>Town / City
                                    <span className='radius'>*</span>
                                </Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone
                                    <span className='radius'>*</span>
                                </Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address
                                    <span className='radius'>*</span>
                                </Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="order__item">
                        <h2 className='mt-3 mb-4'>Your order</h2>
                        <TableContainer className='table__container' component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0
                                            }
                                        }}>
                                            <TableCell component="th" scope="row" className='th_first'>
                                                {row.name}
                                            </TableCell>
                                            <TableCell className='td_right' align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="order__notice">
                            <div className="border__notice">
                                <div className="notice">
                                Cash on delivery.  Please contact us if you require assistance or wish to make alternate arrangements.
                                </div>
                            </div>
                        <div className="place-button text-end">
                        <Button type="submit" variant="contained">PLACE ORDER</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout