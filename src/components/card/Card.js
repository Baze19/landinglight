import React from 'react';
import './card.css'
import Chip from './Chip'

const Card = () => {
    return (
        <div className="carddesign  col-md-5 ">
        
                <p className="cardNumber">CARD NUMBER</p>
                <p className="num">4324 5433 9382 1030</p>

            <Chip/>
            
            <div style={{ marginTop: '1rem' }}>
                <p>Expiry date</p>
                <p>03/04</p>
            </div>


            <div className="d-flex justify-content-between ">
                <p>John Doe</p>
                <div className="d-flex">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                </div>

            </div>
        </div>
    )
}

export default Card
