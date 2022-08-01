/**
 * @file Main file that take all wrapping components
 * @author Kenny Yen
 */
import GlobalStyle from "./globalStyled";
import { useEffect, useReducer } from "react";
import ProductList from "./components/productList/ProductList";
import AppContext from "./context/store";
import reducer, { initialState } from "./context/reducer";
import action from "./context/actions";
import "./util/seed.js";

// extend window type for using seed.js
declare global {
  interface Window {
    Seed: any;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get product list data
  useEffect(() => {
    // can be updated to use fetch to get real data then set response afterwards
    dispatch(action.setProductList(window?.Seed?.products));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <ProductList />
    </AppContext.Provider>
  );
}

export default App;
