import handleCart from './handleCart'
import { productsReducer } from '../reduxSlice/ProductsSlice';
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    productsReducer
})
export default rootReducers