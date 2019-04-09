import React from 'react';
import './ShowProducts.css'

const ShowProducts = props => {
    const { name, quantity, image, price } = props.data;
    const { handleAddToCart, isAddedToCart } = props;
    return(
        <div className='products'>
            <img width='100px' src={image} alt={name} />
            <h1>{name}</h1>
            <p>Rs.{price}</p>
            {quantity<1 ? <p>OUT of Stock (0)</p> : <p>IN Stock ({quantity})</p>}
            {isAddedToCart ? <button disabled onClick={()=>handleAddToCart(props.data)}>ADD TO CART</button> : 
                            <button onClick={()=> handleAddToCart(props.data)}>ADD TO CART</button> }
        </div>
    )
}

export default ShowProducts;