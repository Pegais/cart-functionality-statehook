import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import Productpage from './ProductPage';


const Mainpage = () => {
    return (
        <div>
            <Navbar/>
            <Body />
            <Productpage />
            <Footer/>
            
        </div>
    );
}

export default Mainpage;
