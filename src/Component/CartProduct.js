import React from 'react';

const Cartproduct = ({product}) => {
    return (
        <div className='card-container'>
        <div className="card-line">
            <div className="card1" />
                <span className='text' >{product.value}</span>
                <span className='text1'>{product.description}]</span>
            <button >Delete from CART</button>

        </div>
    </div>
    );
}

export default Cartproduct;
