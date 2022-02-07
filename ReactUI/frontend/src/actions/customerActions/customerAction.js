import {
  CUST_CHANGE_EMAIL_FAIL,
  CUST_CHANGE_EMAIL_REQUEST,
  CUST_CHANGE_EMAIL_SUCCESS,
  CUST_CHANGE_MOB_FAIL,
  CUST_CHANGE_MOB_REQUEST,
  CUST_CHANGE_MOB_SUCCESS,
  CUST_CHANGE_PASS_FAIL,
  CUST_CHANGE_PASS_REQUEST,
  CUST_CHANGE_PASS_SUCCESS,
  CUST_FUND_TRANS_FAIL,
  CUST_FUND_TRANS_REQUEST,
  CUST_FUND_TRANS_SUCCESS,
  CUST_REGISTER_FAIL,
  CUST_REGISTER_REQUEST,
  CUST_REGISTER_SUCCESS,
  CUST_SIGNIN_FAIL,
  CUST_SIGNIN_REQUEST,
  CUST_SIGNIN_SUCCESS,
  CUST_TRANS_LIST_SUCCESS,
  CUST_TRANS_LIST_FAIL,
  CUST_TRANS_LIST_REQUEST,
  CUST_NEW_CUST_REQUEST,
  CUST_NEW_CUST_SUCCESS,
  CUST_NEW_CUST_FAIL,
  CUST_BILL_PAY_REQUEST,
  CUST_BILL_PAY_SUCESS,
  CUST_BILL_PAY_FAIL,
  CUST_PROFILE_REQUEST,
  CUST_PROFILE_SUCCESS,
  CUST_PROFILE_FAIL,
} from "../../constants/customerConstant/CustConst";
import axios from "axios";
import bcrypt from 'bcryptjs';




export const CustRecharge = (senderAccountNo, reciverAccountNo, plan ,operater ,mobileNo,type,date,time) => {
  return (dispatch) => {
    dispatch({
      type: CUST_BILL_PAY_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      senderAccountNo,
      reciverAccountNo,
      plan,
      time,
      date,
      type,
      mobileNo,
      operater,
     
    };
    console.log(body);
    const url = "http://localhost:8080/ebanking/billpayment/newrequest";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUST_BILL_PAY_SUCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_BILL_PAY_FAIL,
          payload: error,
        });
      });
  };
};
export const newApplication = (
  fullname,
  date,
  email,
  title,
  mobile,
  aadhar,
  pan,
) => {
  return (dispatch) => {
    dispatch({
      type: CUST_NEW_CUST_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      fullname,
      date,
      email,
      title,
      mobile,
      aadhar,
      pan,
      }
    
    console.log(body);
    const url = "http://localhost:8080/ebanking/newapplication/create";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUST_NEW_CUST_SUCCESS,
          payload: response.data,
         });
     
      })
      .catch((error) => {
        dispatch({
          type:CUST_NEW_CUST_FAIL,
          payload: error,
        });
      });
  };
};




export const CustSignin = (email, pass) => {

  const password = bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u');
  return (dispatch) => {
    dispatch({
      type: CUST_SIGNIN_REQUEST,
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

    const url = "http://localhost:8080/ebanking/customer/login";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUST_SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const CustRegister = (
  password,
  email,
  mobileNo,
  accountNumber,
  branchName,
  ifscCode
) => {
  return (dispatch) => {
    dispatch({
      type: CUST_REGISTER_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      password,
      email,
      mobileNo,
      accountNumber,
      branchName,
      ifscCode,
    };

    const url = "http://localhost:8080/ebanking/customer/register";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUST_REGISTER_SUCCESS,
          payload: response.data,
        });
       
      })
      .catch((error) => {
        dispatch({
          type: CUST_REGISTER_FAIL,
          payload: error,
        });
      });
  };
};

export const CustFundTransfer = (senderAccountNo, reciverAccountNo, amount) => {
  return (dispatch) => {
    dispatch({
      type: CUST_FUND_TRANS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      senderAccountNo,
      reciverAccountNo,
      amount,
    };
    console.log(body);
    const url = "http://localhost:8080/ebanking/transaction";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUST_FUND_TRANS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_FUND_TRANS_FAIL,
          payload: error,
        });
      });
  };
};

export const CustChangeMob = (customerId, mobileNo) => {
  return (dispatch) => {
    dispatch({
      type: CUST_CHANGE_MOB_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      mobileNo,
    };

    const url = "http://localhost:8080/ebanking/customer/updateMobileNumber";
    axios
      .put(url + "/" + customerId, body, header)
      .then((response) => {
        dispatch({
          type: CUST_CHANGE_MOB_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_CHANGE_MOB_FAIL,
          payload: error,
        });
      });
  };
};

export const CustChangePass = (customerId, pass) => {

  const password = bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u');
  return (dispatch) => {
    dispatch({
      type: CUST_CHANGE_PASS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      password,
    };

    const url = "http://localhost:8080/ebanking/customer/updatePassword";
    axios
      .put(url + "/" + customerId, body, header)
      .then((response) => {
        dispatch({
          type: CUST_CHANGE_PASS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_CHANGE_PASS_FAIL,
          payload: error,
        });
      });
  };
};

export const CustChangeEmail = (customerId, email) => {
  return (dispatch) => {
    dispatch({
      type: CUST_CHANGE_EMAIL_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      email,
    };

    const url = "http://localhost:8080/ebanking/customer/updateEmail";
    axios
      .put(url + "/" + customerId, body, header)
      .then((response) => {
        dispatch({
          type: CUST_CHANGE_EMAIL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_CHANGE_EMAIL_FAIL,
          payload: error,
        });
      });
  };
};

export const FetchTransHistory = (customerId) => {
  return (dispatch) => {
    dispatch({
      type: CUST_TRANS_LIST_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = "http://localhost:8080/ebanking/customer/getTransaction";
    axios
      .get(url + "/" + customerId, header)
      .then((response) => {
        dispatch({
          type: CUST_TRANS_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_TRANS_LIST_FAIL,
          payload: error,
        });
      });
  };
};


export const FetchCustProfile = (customerId) => {
  return (dispatch) => {
    dispatch({
      type: CUST_PROFILE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = "http://localhost:8080/ebanking/customer/getProfile";
    axios
      .get(url + "/" + customerId, header)
      .then((response) => {
        dispatch({
          type: CUST_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUST_PROFILE_FAIL,
          payload: error,
        });
      });
  };
};
