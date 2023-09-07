import { combineReducers } from "redux";
import Productreducer from "./reducer";
import productCart from "./CartReducer";
const rootReducer = combineReducers(
    {
        productData:Productreducer,
        cartData:productCart
    }
)

export default rootReducer;