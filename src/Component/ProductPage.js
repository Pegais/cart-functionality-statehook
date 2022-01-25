import React, { useContext } from 'react';
import ProductCart from './Product';
import CardContext from '../contextWrapper/ProductContext';

const Productpage = () => {
    const {Product} = useContext(CardContext);
    const productMap =Product.map((ele) => {
        return (
            <ProductCart key={ele.id} props={ele}/>
        )
    })
    return (
        <div>
            {productMap}
            
        </div>
    );
}

export default Productpage;
