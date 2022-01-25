
import React, { useContext } from 'react';
import CardContext from '../contextWrapper/ProductContext';
import Cartproduct from './CartProduct';

function Card() {
  const {cart} = useContext(CardContext);
  return (
    <div>
      {
        cart.map((product) => {
          return (
            <Cartproduct key={product.id} product={product}/>
          )
        })
      }
      </div>
  );
}

export default Card;

