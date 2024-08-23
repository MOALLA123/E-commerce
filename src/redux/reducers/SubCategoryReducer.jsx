import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";

const initial = {
  subCategory: [],
  subCategoryx: [],
  loading: true,
};

const SubCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };

    case GET_SUB_CATEGORY:
      return {
        subCategoryx: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      };

    default:
      return state;
  }
};

export default SubCategoryReducer;
