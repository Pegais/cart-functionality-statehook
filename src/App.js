import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/MainPage';

import CardContext from './contextWrapper/ProductContext';
import Product from './Component/object';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Card from './Component/Card';

function App() {
  const [cart, setCart] = useState([]);

  // function add to cart
  function addToCart(product) {
    console.log("clicked on cart");
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    if (productinCart) {
      // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
      setCart(cart.map((ele)=>ele.id===product.id ? {...productinCart,quantity:productinCart.quantity+1}:ele))
    }
    else {
      setCart([...cart,{...product,quantity:1}])
    }
    
    
  }
  return (
    <BrowserRouter>
      <CardContext.Provider value={{Product, addToCart,cart}}>
        <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/cart" element={<Card />}/>
        </Routes>
      </CardContext.Provider >
    </BrowserRouter>
  );
}

export default App;
