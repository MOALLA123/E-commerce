import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import {
  CREATE_NEW_USER,
  FORGET,
  GET_ERROR,
  LOG_IN,
  RESET,
  VERIFY,
} from "./../type";

export const createNewUser = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/auth/signup", formData);
    dispatch({ type: CREATE_NEW_USER, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: CREATE_NEW_USER, payload: e.response });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/auth/login", formData);
    dispatch({ type: LOG_IN, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: LOG_IN, payload: e.response });
  }
};

export const forgetPassword = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(
      "api/v1/auth/forgotPasswords",
      formData
    );
    dispatch({ type: FORGET, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: FORGET, payload: e.response });
  }
};

export const verifyCode = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(
      "api/v1/auth/verifyResetCode",
      formData
    );
    dispatch({ type: VERIFY, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: VERIFY, payload: e.response });
  }
};

export const resetPassword = (formData) => async (dispatch) => {
  try {
    const response = await UseupdatetData(
      "/api/v1/auth/resetPassword",
      formData
    );
    dispatch({ type: RESET, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: RESET, payload: e.response });
  }
};
