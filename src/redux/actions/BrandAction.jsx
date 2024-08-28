import {
  CREATE_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_SPECIFIC_BRAND,
} from "../type";
import UseGetData from "../../hooks/UseGetData";
import { useinsertDataWithImage } from "../../hooks/UseinsertData";

export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/brands?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useinsertDataWithImage("api/v1/brands", formData);
    dispatch({ type: CREATE_BRAND, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const getSpecificBrand = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`api/v1/brands/${id}`);
    console.log(response, "actionnnnnnnnnnnn");
    dispatch({
      type: GET_SPECIFIC_BRAND,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
