import useDeleteData from "../../hooks/UseDeleteData";
import UseGetData from "../../hooks/UseGetData";
import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_ERROR,
  GET_REVIEW_ONPRODUCT,
  UPDATE_REVIEW,
} from "../type";

export const createReview = (formData, id) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `api/v1/products/${id}/reviews`,
      formData
    );
    dispatch({ type: CREATE_REVIEW, payload: response, loading: true });
  } catch (e) {
    dispatch({ type: CREATE_REVIEW, payload: "Error" + e });
  }
};

export const getAllReviewOnProduct = (id, page, limit) => async (dispatch) => {
  try {
    const response = await UseGetData(
      `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
    );

    dispatch({
      type: GET_REVIEW_ONPRODUCT,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_REVIEW_ONPRODUCT, payload: "Error" + e });
  }
};

export const DeleteReview = (id) => async (dispatch) => {
  const response = await useDeleteData(`api/v1/reviews/${id}`);
  try {
    dispatch({ payload: response, type: DELETE_REVIEW });
  } catch (e) {
    dispatch({ type: DELETE_REVIEW, payload: "Error" + e });
  }
};

export const UpdateReview = (data, id) => async (dispatch) => {
  const response = await UseupdatetData(`api/v1/reviews/${id}`, data);
  try {
    dispatch({ payload: response, type: UPDATE_REVIEW });
  } catch (e) {
    dispatch({ type: UPDATE_REVIEW, payload: "Error" + e });
  }
};
