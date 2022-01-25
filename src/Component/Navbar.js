import React, { useState, useEffect, useContext } from 'react'

import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import CardContext from '../contextWrapper/ProductContext';




export default function Navbar(props) {
    const { cart } = useContext(CardContext);
    console.log(cart)
    let sum=cart.length;
    // for (let i = 0; i < cart.length; i++){
          
    // }
    console.log(sum);

    return (
        <>
            <nav>
                <img src={logo} />
                <Link to="/cart">
                    <div className='cart'>Cart
                        <div className='counter'>{sum}</div>
                    </div>
                </Link>
            </nav>
        </>
    )
}
