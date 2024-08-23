import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";
import { UseinsertData } from "../../hooks/UseinsertData";
import UseGetData from "../../hooks/UseGetData";

export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await UseinsertData("api/v1/subcategories", data);
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
    console.log(response.data, "red");
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
