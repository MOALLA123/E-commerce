import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";
import { useInsertData } from "../../hooks/UseinsertData";
import UseGetData from "../../hooks/UseGetData";

export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/subcategories", data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

//Get subcategory depend on category id
export const GetOneCategory = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
