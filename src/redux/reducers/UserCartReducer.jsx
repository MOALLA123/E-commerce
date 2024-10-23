import {
  ADD_PRODUCT_TO_CART,
  APPLY_COUPON,
  DELETE_ITEM_CART,
  GET_CART,
  UPDATE_CART_PRODUCT_QUANTITY,
} from "../type";

const initial = {
  CartProduct: [],
  updatedQuantity: [],
  AlluserCart: [],
  itemdeleted: [],
  appliedCoupon: [],
  loading: true,
};

const UserCartReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        CardProduct: action.payload,
        loading: false,
      };
    case UPDATE_CART_PRODUCT_QUANTITY:
      return {
        ...state,
        updatedQuantity: action.payload,
        loading: false,
      };

    case GET_CART:
      return {
        ...state,
        AlluserCart: action.payload,
        loading: false,
      };
    case UPDATE_CART_PRODUCT_QUANTITY:
      return {
        ...state,
        updatedQuantity: action.payload,
        loading: false,
      };
    case APPLY_COUPON:
      return {
        ...state,
        appliedCoupon: action.payload,
        loading: false,
      };

    case DELETE_ITEM_CART:
      return {
        ...state,
        itemdeleted: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default UserCartReducer;
