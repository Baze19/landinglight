import React from 'react';
import './cardinput.css'
    ;


const CardInput = () => {
    return (
        <div className='add col-md-6'>
            <div className="row ">
                <div className="col-md-6">
                    <div class="mb-5">
                        <label for="exampleFormControlInput1" className="form-label">Credit card number</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="4324 5433 9382 1030"
                            style={{ padding: '1rem', backgroundColor: '#e6e6fa' }} />
                    </div>
                    <div class="mb-5">
                        <label for="exampleFormControlInput1" className="form-label">Security code</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="420"
                            style={{ padding: '1rem', backgroundColor: '#e6e6fa' }} />
                    </div>

                </div>
                <div className="col-md-6">
                <div class="mb-5">
                        <label for="exampleFormControlInput1" className="form-label">Expiry date</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="03/04"
                            style={{ padding: '1rem', backgroundColor: '#e6e6fa' }} />
                    </div>
                    
                    <div class="mb-5">
                        <label for="exampleFormControlInput1" className="form-label">Postal code</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="1109"
                            style={{ padding: '1rem', backgroundColor: '#e6e6fa' }} />
                    </div>
                </div>
            </div>
            <div className="form-check  mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" for="flexRadioDefault2">
                    <span>Use this card for next time purchase </span>
                </label>
            </div>
            <div class="d-grid gap-2">

                <button class="btn btn-primary" type="button" style={{padding:'1.5rem'}}>Add card</button>
            </div>
        </div>
    )
}

export default CardInput
