import useDeleteData from "../../hooks/UseDeleteData";
import useGetDataToken from "./../../hooks/UseGetDataToken";
import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import {
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  UPDATE_PASSWORD,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_DATA,
} from "../type";

export const UpdateUserPasword = (data) => async (dispatch) => {
  try {
    const response = await UseupdatetData(
      "api/v1/users/changeMyPassword",
      data
    );
    dispatch({ payload: response, type: UPDATE_PASSWORD });
  } catch (e) {
    dispatch({ type: UPDATE_PASSWORD, payload: e.response });
    console.log(e.response, "2222222222222");
  }
};

export const UpdateUserData = (data) => async (dispatch) => {
  try {
    const response = await UseupdatetData("api/v1/users/updateMe", data);
    dispatch({ payload: response, type: UPDATE_USER_DATA });
  } catch (e) {
    dispatch({ type: UPDATE_USER_DATA, payload: e.response });
    console.log(e.response, "2222222222222");
  }
};

export const getUserAddress = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("api/v1/addresses");
    dispatch({
      type: GET_ADDRESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: GET_ADDRESS, payload: e.response });
  }
};

export const getSpecificUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`api/v1/addresses/${id}`);
    dispatch({
      type: GET_SPECIFIC_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_ADDRESS, payload: e.response });
  }
};

export const creteUseraddAddress = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/addresses", formData);
    dispatch({ type: CREATE_ADDRESS, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: CREATE_ADDRESS, payload: e.response });
  }
};

export const updateUserAddress = (data, id) => async (dispatch) => {
  const response = await UseupdatetData(`api/v1/addresses/${id}`, data);
  try {
    dispatch({ payload: response, type: UPDATE_USER_ADDRESS });
  } catch (e) {
    dispatch({ type: UPDATE_USER_ADDRESS, payload: e.response });
  }
};

export const DeleteAddress = (id) => async (dispatch) => {
  const response = await useDeleteData(`api/v1/addresses/${id}`);
  try {
    dispatch({ payload: response, type: DELETE_ADDRESS });
  } catch (e) {
    dispatch({ type: DELETE_ADDRESS, payload: e.response });
  }
};
