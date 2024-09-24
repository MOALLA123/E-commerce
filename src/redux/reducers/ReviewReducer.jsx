import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_ERROR,
  UPDATE_REVIEW,
} from "../type";
import { GET_REVIEW_ONPRODUCT } from "./../type";

const initial = {
  review: [],
  createreview: [],
  deletedreview: [],
  update: [],
  loading: true,
};

const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createreview: action.payload,
        loading: false,
      };

    case GET_REVIEW_ONPRODUCT:
      return {
        ...state,
        review: action.payload,
        loading: false,
      };

    case DELETE_REVIEW:
      return {
        ...state,
        deletedreview: action.payload,
        loading: false,
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        update: action.payload,
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

export default reviewReducer;
