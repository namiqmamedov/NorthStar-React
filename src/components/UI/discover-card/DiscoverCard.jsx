import React from 'react'
import productData from '../../../data/products'
import '../../../styles/discover.css'
import {NavLink, Link} from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const DiscoverCard = (props) => {

    const {id,title,size,image,price} = props.item

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image,
            size,
            price
        }))
    }

    return (
        <>
          <div className="card-index">
          <Link to={`/product/${id}`}>
          <div className="card-thumbnail">
              <img src={image} alt="Card Image"/>
          </div>
          </Link>
          <div className="card-body">
          <Link to={`/product/${id}`}>
              <h4 className="card-title mt-3 mb-2">
                  {title}
              </h4>
              <span className="card-price">
                  ${price}
              </span>
        </Link>
          </div>
      </div>
        </>
  )
}

export default DiscoverCard