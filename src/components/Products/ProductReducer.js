import products from "./products";

const initialState = {
    products: [...products],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return state.products;
        }

        case 'ADD_TO_CART': {
            const products = state.products.map(item => {
                if (item.id !== action.item.id) {
                    return item;
                }

                return {
                    ...item,
                    quantity: item.quantity - 1,
                    isAddedToCart: true


                };
            });

            return { ...state, products, isAddedToCart: true };
        }
        case 'REMOVE_FROM_CART': {
            const products = [...state.products];
            const product = products.find(item => item.id === action.item.id);
            product.quantity += action.item.quantity;
            product.isAddedToCart = false;
            return { ...state, products: [...products] };
        }

        case 'INCREASE_CART_QUANTITY': {
            const products = state.products.map(item => {
                if (item.id !== action.id) {
                    return item;
                }

                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            });
            return { ...state, products: products }
        }

        case 'DECREASE_CART_QUANTITY': {
            const products = state.products.map(item => {
                if (item.id !== action.id) {
                    return item;
                }

                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            });

            return {
                ...state,
                products: products
            }

        }

        default: {
            return state;
        }
    }
};

export default productReducer;
