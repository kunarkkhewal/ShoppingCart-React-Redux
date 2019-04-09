const getProducts = () => ({
    type: "GET_PRODUCTS"
})

const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item: item
})

export default addToCart;