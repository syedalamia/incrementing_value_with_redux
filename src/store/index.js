import { createStore } from "redux";

//initialize value
const INITIAL_STATE = {
  cart: "",
};

//declare reducer
//initial state is creating a table basic

const CartReducer = (state = INITIAL_STATE, action) => {
  console.log("the initial value is", INITIAL_STATE);
  switch (action.type) {
    case "ADD_FLOWER":
      return { ...state, cart: action.payload };
      break;
    default:
      return { ...state };
  }
};

//store create kore fellam
const store = createStore(CartReducer);
export default store;
