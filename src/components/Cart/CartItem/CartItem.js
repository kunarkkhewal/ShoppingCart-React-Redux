import React from "react";
import './CartItem.css'

function CartItem(props) {
    const { id, name, price, quantity, productQuantity } = props.data;
    const { handleIncrease, handleDecrease, handleRemoveFromCart } = props;
    return (

        <div>

            <span> {name} </span>
            <span> Rs.{price} </span>
            <span> * </span>
            <span>
                <button className='btn' onClick={() => handleDecrease(id, quantity)}> - </button>
            </span>

            <span> {quantity} </span>

            <span>
                {productQuantity <= 1 ?
                    <button
                        className='btn'
                        disabled
                        onClick={() => handleIncrease(id)}
                    > + </button>
                    :
                    <button className='btn' onClick={() => handleIncrease(id)}> + </button>
                }
            </span>
            
            <span> Rs.{quantity * price} </span>
            <span>
                <button className='btn' onClick={() => handleRemoveFromCart(id, quantity)}>X</button>
            </span>
        </div>
    );
}

export default CartItem;
