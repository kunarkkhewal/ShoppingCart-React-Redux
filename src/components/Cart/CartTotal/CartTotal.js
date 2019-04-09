import React from 'react'

function CartTotal(props) {
    const { grandTotal } = props
    return (
        <div>
            <span><h2> AAPKA Total</h2></span>
            <span><h2> Rs.{grandTotal}</h2></span>
        </div>
    )
}

export default CartTotal
