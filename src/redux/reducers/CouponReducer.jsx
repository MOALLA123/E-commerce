import {
  CREATE_COUPON,
  DELETE_COUPON,
  GET_COUPON,
  GET_SPECIFIC_COUPON,
  UPDATE_COUPON,
} from "../type";

const initial = {
  coupon: [],
  createCoupon: [],
  deletecoupon: [],
  updatecoupon: [],
  SpecificCoupon: [],
  loading: true,
};

const CouponReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        createCoupon: action.payload,
        loading: false,
      };

    case GET_COUPON:
      return {
        ...state,
        coupon: action.payload,
        loading: false,
      };

    case DELETE_COUPON:
      return {
        ...state,
        deletecoupon: action.payload,
        loading: false,
      };

    case UPDATE_COUPON:
      return {
        ...state,
        updatecoupon: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_COUPON:
      return {
        ...state,
        SpecificCoupon: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default CouponReducer;
