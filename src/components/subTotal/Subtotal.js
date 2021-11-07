import React from 'react'
import './subtotal.css'
const Subtotal = () => {
    return (
        <div className="container d-flex justify-content-between u">
            <div>
                <p>Subtotal</p>
                <p>Estimation TAX</p>
                <p>Promotional Code: <span style={{ opacity: '0.3' }}>Z4KXLM9A</span></p>
            </div>
            <div>
                <p> <span>&#8358;</span>2,497.00</p>
                <p>  <span>&#8358;</span>111.94</p>
                <p>  <span>&#8358;</span>-60.00</p>
            </div>
        </div>
    )
}

export default Subtotal
