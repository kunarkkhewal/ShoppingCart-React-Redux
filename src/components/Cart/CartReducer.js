const cartState = {
    products: [],
    grandTotal: 0
};
const cartReducer = (state = cartState, action) => {
    
    switch (action.type) {
        
        case 'ADD_TO_CART': {
            const products = [...state.products, action.item];
            let grandTotal = state.grandTotal;
            grandTotal += action.item.price;
            return { ...state, products, grandTotal };
        }
        case 'REMOVE_FROM_CART': {
            let grandTotal = state.grandTotal;

            const findIndex = state.products.findIndex(
                item => item.id === action.item.id
            );
            grandTotal -= state.products[findIndex].price * action.item.quantity;
            const products = [...state.products.slice(0, findIndex),
            ...state.products.slice(findIndex + 1, state.products.length)

            ];

            return {
                ...state,
                products,
                grandTotal
            };
        }
        case 'INCREASE_CART_QUANTITY': {
            let grandTotal = state.grandTotal;
            const products = state.products.map(item => {
                if (item.id !== action.id) {
                    return item;
                }
                grandTotal += item.price;
                return {
                    ...item,
                    quantity: item.quantity + 1,
                    productQuantity: item.productQuantity - 1
                };
            });


            return { ...state, products, grandTotal };
        }
        case 'DECREASE_CART_QUANTITY': {
            let grandTotal = state.grandTotal;
            const products = state.products.map(item => {
                if (item.id !== action.id) {
                    return item;
                }
                grandTotal -= item.price;
                return {
                    ...item,
                    quantity: item.quantity - 1,
                    productQuantity: item.productQuantity + 1
                };
            });

            return { ...state, products, grandTotal };
        }

        default: {
            return state;
        }
    }
};

export default cartReducer;
