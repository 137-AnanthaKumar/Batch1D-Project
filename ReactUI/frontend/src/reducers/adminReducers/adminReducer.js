import {
  ADMIN_ADD_CUST_FAIL,
  ADMIN_ADD_CUST_REQUEST,
  ADMIN_ADD_CUST_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNOUT,
  CUST_LIST_REQUEST,
  CUST_LIST_SUCCESS,
  CUST_LIST_FAIL,
  TRANS_LIST_REQUEST,
  TRANS_LIST_SUCCESS,
  TRANS_LIST_FAIL,
} from "../../constants/adminConstant/constants";

export const adminSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADMIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const adminAddCustReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_CUST_REQUEST:
      return { loading: true };
    case ADMIN_ADD_CUST_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_ADD_CUST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustomerListReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_LIST_REQUEST:
      return { loading: true };
    case CUST_LIST_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const TransactionListReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANS_LIST_REQUEST:
      return { loading: true };
    case TRANS_LIST_SUCCESS:
      return { loading: false, response: action.payload };
    case TRANS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
