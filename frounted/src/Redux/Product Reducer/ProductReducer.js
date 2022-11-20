import {
  GET_REQUIEST,
  GET_SUCCESS,
  GET_ERROR,
  GET_SUCCESS_FILTER,
  SORTDATA_HTL,
  SORTDATA_LTH,
  SORTDATA_RATINGD,
  LOGIN,
  LOGOUT,
} from "./action";

const initState = {
  isError: false,
  isLoading: false,
  products: [],
  filterData: [],
  username: "",
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REQUIEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
      };

    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...action.payload],
      };

    case GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
        filterData: [],
      };

    case GET_SUCCESS_FILTER:
      return {
        ...state,
        isLoading: false,
        isError: false,

        filterData: action.payload,
      };
    case SORTDATA_HTL:
      return {
        ...state,
        filterData: [...state.products.sort((a, b) => +b.price - +a.price)],
      };

    case SORTDATA_LTH:
      return {
        ...state,
        filterData: [...state.products.sort((a, b) => +a.price - +b.price)],
      };

    case SORTDATA_RATINGD:
      return {
        ...state,
        filterData: [
          ...state.products.sort((a, b) => b.rate.length - a.rate.length),
        ],
      };

    case LOGIN:
      return {
        ...state,
        username: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        username: "",
      };

    default:
      return state;
  }
};
