// import axios from "axios";
import { GET_DATA_REQ, GET_DATA_FAIL, GET_DATA_SUCC } from "./actionTypes";

const ADD = (item) => {
  console.log("item", item);
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

//Remove one array of item from Cart
const DELETE = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

//Remove individual item onclicking to minus button
const REMOVE = (iteam) => {
  return {
    type: "REMOVE_MINUS_ONE",
    payload: iteam,
  };
};

// export const addToCart = (payload) => (dispatch) => {
//   dispatch(ADD(payload));
// };

async function getProductsData(dispatch) {
  try {
    let res = await fetch("https://bestbuy-backend.onrender.com/");
    let products = await res.json();
    //    console.log(products);
    dispatch({
      type: GET_DATA_SUCC,
      payload: products,
    });
  } catch (e) {
    dispatch({
      type: GET_DATA_FAIL,
    });
  }
}

export { getProductsData, ADD, DELETE, REMOVE };
