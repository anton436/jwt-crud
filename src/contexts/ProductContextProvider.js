import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const API = "http://34.173.115.25/api/v1";

const INIT_STATE = {
  products: [],
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/products/`, config);
      dispatch({ type: "GET_PRODUCTS", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/category/list/`, config);
      dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getProducts,
    products: state.products,
    getCategories,
    categories: state.categories,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
