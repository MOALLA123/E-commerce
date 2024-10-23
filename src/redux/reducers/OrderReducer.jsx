import { CREATE_ORDER } from "../type";

const initial = {
  CreatedOrder: [],
};

const OrderReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        CreatedOrder: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default OrderReducer;
