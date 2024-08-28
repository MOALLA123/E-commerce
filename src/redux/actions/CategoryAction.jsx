import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_SPECIFIC_CATEGORY,
} from "../type";
import UseGetData from "../../hooks/UseGetData";
import { useinsertDataWithImage } from "../../hooks/UseinsertData";

export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/categories?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useinsertDataWithImage(
      "api/v1/categories",
      formData
    );
    dispatch({ type: CREATE_CATEGORY, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const getSpecifiCategory = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/categories/${id}`);
    dispatch({
      type: GET_SPECIFIC_CATEGORY,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
