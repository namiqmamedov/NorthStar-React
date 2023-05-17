import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FiUser} from 'react-icons/fi'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

import '../../styles/header.css'

function Header() {

  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="/">NorthStar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav__main">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>  
            <Link to='/cart'>CART</Link>
          </Nav>
          <Nav className='nav__options'>
            <Link to={'login'}>
              <FiUser/>
            </Link>
            <Link className='cart-link' onClick={toggleCart}>
              <RiShoppingBag3Fill/>
              <span className="cart-quantity">
               {totalQuantity}
              </span>
            </Link>
            <Link>
              <RxHamburgerMenu/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;