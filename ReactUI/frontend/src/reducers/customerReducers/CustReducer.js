import {
  CUST_CHANGE_PASS_REQUEST,
  CUST_CHANGE_PASS_SUCCESS,
  CUST_CHANGE_PASS_FAIL,
  CUST_FUND_TRANS_FAIL,
  CUST_FUND_TRANS_REQUEST,
  CUST_FUND_TRANS_SUCCESS,
  CUST_SIGNIN_FAIL,
  CUST_SIGNIN_REQUEST,
  CUST_SIGNIN_SUCCESS,
  CUST_REGISTER_REQUEST,
  CUST_REGISTER_SUCCESS,
  CUST_REGISTER_FAIL,
  CUST_CHANGE_EMAIL_REQUEST,
  CUST_CHANGE_EMAIL_SUCCESS,
  CUST_CHANGE_EMAIL_FAIL,
  CUST_CHANGE_MOB_REQUEST,
  CUST_CHANGE_MOB_SUCCESS,
  CUST_CHANGE_MOB_FAIL,
  CUST_TRANS_LIST_FAIL,
  CUST_TRANS_LIST_SUCCESS,
  CUST_TRANS_LIST_REQUEST,
} from "../../constants/customerConstant/CustConst";

export const CustSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_SIGNIN_REQUEST:
      return { loading: true };
    case CUST_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_REGISTER_REQUEST:
      return { loading: true };
    case CUST_REGISTER_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustFundTransReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_FUND_TRANS_REQUEST:
      return { loading: true };
    case CUST_FUND_TRANS_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_FUND_TRANS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustChangePassReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_CHANGE_PASS_REQUEST:
      return { loading: true };
    case CUST_CHANGE_PASS_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_CHANGE_PASS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustChangeEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_CHANGE_EMAIL_REQUEST:
      return { loading: true };
    case CUST_CHANGE_EMAIL_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_CHANGE_EMAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CustChangeMobReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_CHANGE_MOB_REQUEST:
      return { loading: true };
    case CUST_CHANGE_MOB_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_CHANGE_MOB_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const TransactionHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CUST_TRANS_LIST_REQUEST:
      return { loading: true };
    case CUST_TRANS_LIST_SUCCESS:
      return { loading: false, response: action.payload };
    case CUST_TRANS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
