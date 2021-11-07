import React from 'react'
import Paymentinfo from '../paymentInformantion/Paymentinfo'
import Visapaypal from '../visapaypal/Visapaypal';




const payment = () => {
    return (
        <div className="container d-flex justify-content-between">
            <Paymentinfo />
            <Visapaypal />

        </div>
    )
}

export default payment
