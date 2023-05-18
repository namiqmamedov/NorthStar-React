import React from 'react'
import '../styles/delivery.css'

const Delivery = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="delivery__information">
                    <h1>Delivery Information</h1>
                    <p>
                    GameStop currently processes and ships orders Monday-Friday from our warehouse in Dublin. Orders placed from Friday to Sunday and on public holidays will be processed the following week. Additional processing time may be necessary during weeks that include bank/public holidays. 
                    </p>
                    <p>The standard delivery period is normally 1-3 working days once an order has shipped with our partner couriers. Weekend days/public holidays should not be considered when calculating your delivery date.</p>
                    <p>
                    Please bear in mind that these delivery times are guidelines and are not 100% guaranteed due to certain factors which are outside of our control once your order has shipped from our warehouse.
                    </p>
                    <p className='fw-bold'>Below are the approximate shipping time frames and can change at any time.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery