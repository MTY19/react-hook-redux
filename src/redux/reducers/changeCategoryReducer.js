import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim iiçin state döndürüyor
export default function changeCategoryReducer(state=initialState.currentCategory,action){

     switch (action.type) {
         case actionTypes.CHANGE_CATEGORY:        
            return action.payload   
         default:
            return state;//eğer aksiyon yoksa ilk state i döndür         
     }

}