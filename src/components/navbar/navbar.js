import React from 'react'
import './navbar.css';
import MyPicture from '../../assests/ba.jpg'

const navbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg  ">
        <div className="container">
           
        
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"  id='px'>
                        <a href="#learn" className="nav-link" id='links'>TRIPS</a>
                    </li>
                    <li className="nav-item"  id='px'>
                        <a href="#question" className="nav-link" id='links'>RECENTLY VIEWED</a>
                    </li>
                    <li className="nav-item"  id='px'>
                        <a href="#instruction" className="nav-link" id='links'>BOOKINGS</a>
                    </li>
                    <li className="nav-item"  id='img'>
                        <img src={MyPicture} className="Pic"></img>
                    </li>
                </ul>
            </div>
        </div>

       
    </nav>
    
        </>
    )
}

export default navbar
