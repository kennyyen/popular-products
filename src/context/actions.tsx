/**
 * @file Initialize possible dispath actions for global storage
 */
import actionTypes from "./actionTypes";
import { productType } from "../components/productList/Product";

const actions = {
  setProductList: (data: productType[]) => ({
    type: actionTypes.SET_PRODUCT_LIST,
    data,
  }),
};
export default actions;
