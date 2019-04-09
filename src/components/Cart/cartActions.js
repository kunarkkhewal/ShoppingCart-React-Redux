const increaseQuantity = (id) => ({
    type: 'INCREASE_CART_QUANTITY',
    id: id
}
)

const decreaseQuantity = (id) => ({
    type: 'DECREASE_CART_QUANTITY',
    id: id
}
)

const removeFromCart = (id, quantity) => ({
    type: 'REMOVE_FROM_CART',
    item: { id, quantity }
}
)


export {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}
