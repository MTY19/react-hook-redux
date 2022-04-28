import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim için state döndürüyor
export default function categoryListReducer(state=initialState.categories,action){

     switch (action.type) {
         case actionTypes.GET_CATEGORRIES_SUCCESS:          
            return action.payload   
         default:
            return state;//eğer aksiyon yoksa ilk state i döndür         
     }
}