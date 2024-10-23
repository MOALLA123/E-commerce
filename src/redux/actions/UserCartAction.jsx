import useDeleteData from "../../hooks/UseDeleteData";
import useGetDataToken from "../../hooks/UseGetDataToken";
import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import {
  ADD_PRODUCT_TO_CART,
  APPLY_COUPON,
  DELETE_ITEM_CART,
  GET_CART,
  UPDATE_CART_PRODUCT_QUANTITY,
} from "../type";

export const AddProductToCart = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/cart", formData);
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: response, loading: true });
  } catch (e) {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: e.response });
  }
};

export const updateCartQuantity = (data, id) => async (dispatch) => {
  const response = await UseupdatetData(`api/v1/cart/${id}`, data);
  try {
    dispatch({ payload: response, type: UPDATE_CART_PRODUCT_QUANTITY });
  } catch (e) {
    dispatch({ type: UPDATE_CART_PRODUCT_QUANTITY, payload: e.response });
  }
};

export const getUserCart = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("api/v1/cart");
    dispatch({
      type: GET_CART,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_CART, payload: e.response });
  }
};

export const DeleteItemFromCart = (id) => async (dispatch) => {
  const response = await useDeleteData(`api/v1/cart/${id}`);
  try {
    dispatch({ payload: response, type: DELETE_ITEM_CART });
  } catch (e) {
    dispatch({ type: DELETE_ITEM_CART, payload: e.response });
  }
};

export const ApplyCouponOncart = (data) => async (dispatch) => {
  const response = await UseupdatetData("api/v1/cart/applyCoupon", data);
  try {
    dispatch({ payload: response, type: APPLY_COUPON });
  } catch (e) {
    dispatch({ type: APPLY_COUPON, payload: e.response });
  }
};
