import useDeleteData from "../../hooks/UseDeleteData";

import useGetDataToken from "../../hooks/UseGetDataToken";
import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import {
  CREATE_COUPON,
  DELETE_COUPON,
  GET_COUPON,
  GET_SPECIFIC_COUPON,
  UPDATE_COUPON,
} from "../type";

export const createcoupon = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/coupons", formData);
    dispatch({ type: CREATE_COUPON, payload: response, loading: true });
  } catch (e) {
    dispatch({ type: CREATE_COUPON, payload: e.response });
  }
};

export const getAllCoupon = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("api/v1/coupons");

    dispatch({
      type: GET_COUPON,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_COUPON, payload: e.response });
  }
};

export const getSpecificUserCoupon = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`api/v1/coupons/${id}`);
    dispatch({
      type: GET_SPECIFIC_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_COUPON, payload: e.response });
  }
};

export const DeleteCoupon = (id) => async (dispatch) => {
  const response = await useDeleteData(`api/v1/coupons/${id}`);
  try {
    dispatch({ payload: response, type: DELETE_COUPON });
  } catch (e) {
    dispatch({ type: DELETE_COUPON, payload: e.response });
  }
};

export const UpdateCoupon = (data, id) => async (dispatch) => {
  const response = await UseupdatetData(`api/v1/coupons/${id}`, data);
  try {
    dispatch({ payload: response, type: UPDATE_COUPON });
  } catch (e) {
    dispatch({ type: UPDATE_COUPON, payload: e.response });
  }
};
