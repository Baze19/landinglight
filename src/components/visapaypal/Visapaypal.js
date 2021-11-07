import React from 'react'
import './visapaypal.css'
const Visapaypal = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <p className='visa'>VISA</p>
                <p className='new'>Disc<span className="o">o</span>ver</p>
            </div>
            <p>
                <span className="logoo" ><i class="bi bi-paypal lead" style={{color:'#6495ed',fontSize:'1.5rem'}}></i></span>
                <span className="pay">Pay</span>
                <span className="pal">Pal</span>
            </p>
        </div>
    )
}

export default Visapaypal
