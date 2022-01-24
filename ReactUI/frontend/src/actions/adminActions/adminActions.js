import axios from "axios";
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

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("admin");
    dispatch({ type: ADMIN_SIGNOUT });
    document.location.href = "/home";
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      email,
      password,
    };

    const url = "http://localhost:8080/ebanking/Employee/login";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADMIN_SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const addCust = (
  accountNumber,
  accountBalance,
  cifNo,
  branchName,
  ifscCode,
  firstName,
  lastName,
  email,
  mobileNo
) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_ADD_CUST_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      accountNumber,
      accountBalance,
      cifNo,
      branchName,
      ifscCode,
      customer: {
        firstName,
        lastName,
        email,
        mobileNo,
      },
    };
    console.log(body);
    const url = "http://localhost:8080/ebanking/Employee/addAccount";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADMIN_ADD_CUST_SUCCESS,
          payload: response.data,
         });
      //   window.location.href='/adminhome'
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_ADD_CUST_FAIL,
          payload: error,
        });
      });
  };
};

export const FetchCustList = () => {
  return (dispatch) => {
    dispatch({
      type: CUST_LIST_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = "http://localhost:8080/ebanking/Employee/customerList";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUST_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_LIST_FAIL,
          payload: error,
        });
      });
  };
};

export const FetchTransList = () => {
  return (dispatch) => {
    dispatch({
      type: TRANS_LIST_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = "http://localhost:8080/ebanking/Employee/listOfTransactions";
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: TRANS_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TRANS_LIST_FAIL,
          payload: error,
        });
      });
  };
};
