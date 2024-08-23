import {
  CREATE_PRODUCT,
  DELETE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
} from "../type";

const initial = {
  //when create product
  product: [],
  //when get product
  allproduct: [],
  productDetails: [],
  loading: true,
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allproduct: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        allproduct: action.payload,
        loading: false,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };

    case GET_PRODUCT_DETAILS:
      return {
        productDetails: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
