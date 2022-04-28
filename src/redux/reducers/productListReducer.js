import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim için state döndürüyor
export default function productListReducer(state=initialState.products,action){

     switch (action.type) {
         case actionTypes.GET_PRODUCTS_SUCCESS:          
            return action.payload   
         default:
            return state;//eğer aksiyon yoksa ilk state i döndür         
     }
}