import { combineReducers } from "redux";
import productReducer from '../components/Products/ProductReducer';
import cartReducer from '../components/Cart/CartReducer'

const rootReducer = combineReducers({

    cart: cartReducer,
    products: productReducer,
})

export default rootReducer;