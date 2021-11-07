import React from 'react'
import Card from '../card/Card'
import CardInput from '../cardInput/CardInput'
const CardContainer = () => {
    return (
        <div className="container row">
            <Card/>
            <div className="col-md-1"></div>
            <CardInput/>
        </div>
    )
}

export default CardContainer
