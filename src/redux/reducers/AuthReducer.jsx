import { CREATE_NEW_USER, FORGET, LOG_IN, RESET, VERIFY } from "../type";

const initial = {
  user: [],
  forget: [],
  verifypassword: [],
  resetPassword: [],
  loading: true,
};

const AuthReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case LOG_IN:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case FORGET:
      return {
        ...state,
        forget: action.payload,
        loading: false,
      };

    case VERIFY:
      return {
        ...state,
        verifypassword: action.payload,
        loading: false,
      };

    case RESET:
      return {
        ...state,
        resetPassword: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
