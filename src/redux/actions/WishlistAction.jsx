import { ADD_TO_WISHLIST, GET_WISHLIST, REMOVE_FROM_WISHLIST } from "../type";
import useDeleteData from "../../hooks/UseDeleteData";
import UseGetData from "../../hooks/UseGetData";
import { useInsertData } from "../../hooks/UseinsertData";
import { UseupdatetData } from "../../hooks/useUpdateData";
import useGetDataToken from "../../hooks/UseGetDataToken";
export const AddProductToWishlist = (productId) => async (dispatch) => {
  try {
    const response = await useInsertData("api/v1/wishlist", productId);
    dispatch({ type: ADD_TO_WISHLIST, payload: response, loading: true });
  } catch (e) {
    dispatch({ type: ADD_TO_WISHLIST, payload: "Error" + e });
  }
};

export const GetWishlist = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("api/v1/wishlist");
    dispatch({ type: GET_WISHLIST, payload: response.data, loading: true });
  } catch (e) {
    dispatch({ type: GET_WISHLIST, payload: "Error" + e });
  }
};

export const DeleteProductFromWishlist = (id) => async (dispatch) => {
  const response = await useDeleteData(`api/v1/wishlist/${id}`);
  try {
    dispatch({ payload: response, type: REMOVE_FROM_WISHLIST });
  } catch (e) {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: "Error" + e });
  }
};
