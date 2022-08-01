/**
 * @file Define the function handlers for each dispatch actions
 */
import actionTypes from "./actionTypes";

export const initialState = {
  productList: [],
};
const reducer = (state = initialState, action: { type: string; data: any }) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.SET_PRODUCT_LIST: {
      return {
        ...state,
        productList: data,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
