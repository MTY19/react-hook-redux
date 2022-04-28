import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

//bizim için state döndürüyor
export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state; //eğer aksiyon yoksa ilk state i döndür
  }
}
