import {
  ADD_TO_WISHLIST,
  GET_WISHLIST,
  GET_ERROR,
  UPDATE_REVIEW,
} from "../type";

const initial = {
  addtowishlist: [],
  wishlist: [],

  loading: true,
};

const wishlistReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addtowishlist: action.payload,
        loading: false,
      };
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        review: action.payload,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
