import React, { useContext } from 'react';
import '../style.css'
import CardContext from '../contextWrapper/ProductContext';
function ProductCart({props}) {
    console.log(props);
    const { addToCart } = useContext(CardContext)
    
    return (
        <div className='card-container'>
        <div className="card-line">
            <div className="card1" />
                <span className='text' >{props.value}</span>
                <span className='text1'>{props.description}]</span>
            <button onClick={()=>addToCart(props)}>ADD TO CART</button>

        </div>
    </div>
  )
}

export default ProductCart;
