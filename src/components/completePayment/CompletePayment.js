import React from 'react'
import './completepayment.css'
const CompletePayment = () => {
    return (
        <div className="pb-5">
            <div className="d-flex justify-content-between container pb-5 mb-5">
                <button type="button" className="btn btn-primary btn-lg px-5 py-3">Complete Payment</button>
                <p style={{ fontSize: 'xx-large', fontWeight: 'bolder' }}>TOTAL: <span>&#8358;</span>2556.64</p>
            </div>
        </div>
    )
}

export default CompletePayment
