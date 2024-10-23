import { useInsertData } from "../../hooks/UseinsertData";
import { CREATE_ORDER } from "../type";

export const createorder = (id) => async (dispatch) => {
  try {
    const response = await useInsertData(`api/v1/orders/${id}`);
    console.log(response);
    dispatch({ type: CREATE_ORDER, payload: response, loading: true });
    console.log(response);
  } catch (e) {
    dispatch({ type: CREATE_ORDER, payload: e });
  }
};

/****************************/
