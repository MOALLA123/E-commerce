import {
  CREATE_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  UPDATE_PASSWORD,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_DATA,
} from "../type";

const initial = {
  /* for password and information*/
  updated: [],
  updatedData: [],
  /* for address*/
  address: [],
  createdaddress: [],
  updatedAddress: [],
  specificAddress: [],
  deletedAddress: [],
  loading: true,
};

const UserReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {
        ...state,
        updated: action.payload,
        loading: false,
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        updatedData: action.payload,
        loading: false,
      };

    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
      };

    case CREATE_ADDRESS:
      return {
        ...state,
        createdaddress: action.payload,
        loading: false,
      };

    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        updatedAddress: action.payload,
        loading: false,
      };

    case GET_SPECIFIC_ADDRESS:
      return {
        ...state,
        specificAddress: action.payload,
        loading: false,
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        deletedAddress: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
