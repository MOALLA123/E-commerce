import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR } from "../type";

const initial = {
  brand: [],
  loading: true,
};

const BrandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };

    default:
      return state;
  }
};

export default BrandReducer;
