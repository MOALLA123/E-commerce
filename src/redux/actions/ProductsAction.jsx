import UseDeleteData from "../../hooks/UseDeleteData";
import UseGetData from "../../hooks/UseGetData";
import { useinsertDataWithImage } from "../../hooks/UseinsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  UPDATE_PRODUCT,
} from "../type";

export const createProduct = (data) => async (dispatch) => {
  try {
    const response = await useinsertDataWithImage("api/v1/products", data);
    dispatch({ type: CREATE_PRODUCT, payload: response });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const response = await UseGetData("api/v1/products");
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  await UseDeleteData(`api/v1/products/${id}`);
  try {
    dispatch({ type: DELETE_PRODUCTS });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const GetProductDetails = (id) => async (dispatch) => {
  const response = await UseGetData(`api/v1/products/${id}`);
  console.log(response, "tttttttttttttt");
  try {
    dispatch({ type: GET_PRODUCT_DETAILS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};

export const updateProduct = (data, id) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `api/v1/products/${id}`,
      data
    );
    dispatch({ type: UPDATE_PRODUCT, payload: response });
  } catch (e) {
    dispatch({ type: GET_ERROR, payload: "Error" + e });
  }
};
