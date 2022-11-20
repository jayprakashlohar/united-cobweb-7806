import { GET_DATA_REQ, GET_DATA_FAIL, GET_DATA_SUCC } from "./actionTypes";
import { toast } from "react-toastify";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
  carts: [],
  totalPrice: 0,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
      };
    }
    case GET_DATA_SUCC: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case GET_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    }
    default:
      return state;
  }
};

//ADD TO CART REDUCERS FUNCTIONALITY:-

const cartreducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam._id === action.payload._id
      );
      console.log('cartReducer',  state, )
      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        toast.info(
          `${state.carts[IteamIndex].name} increased by ${state.carts[IteamIndex].qnty} `,
          {
            position: "bottom-left",
          }
        );
      } else {
        const temp = { ...action.payload, qnty: 1 };
        toast.success(`${action.payload.name} added to your cart`, {
          position: "bottom-left",
        });
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_FROM_CART":
      const data = state.carts.filter((el) => el._id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    case "REMOVE_MINUS_ONE":
      const IteamIndex_Dec = state.carts.findIndex(
        (iteam) => iteam._id === action.payload._id
      );

      if (state.carts[IteamIndex_Dec].qnty >= 1) {
        const dltitem = (state.carts[IteamIndex_Dec].qnty -= 1);
        console.log([...state.carts, dltitem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[IteamIndex_Dec].qnty === 1) {
        const data = state.carts.filter((el) => el._id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};

export { reducer, cartreducer };
