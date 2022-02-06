import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import validator from 'validator';

import { CustChangePass } from "../../actions/customerActions/customerAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePass = (props) => {
  const [password, setPassword] = useState("");
  const[oldpassword, setOldPassword]=useState("");
  const[newpassword, setNewPassword]=useState("");

  const CustPassChange = useSelector((store) => store.CustPassChange);
  const { loading, error, response } = CustPassChange;
  toast.configure();

  const dispatch = useDispatch();
  const cust = sessionStorage.getItem("customer");
  const customerId = JSON.parse(cust).customerId;

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessagee, setErrorMessagee] = useState('');
  
  const validate = (value) => {
    setNewPassword(value);
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  

  const clearForm = () => {
    setPassword("");
    

  };
  const onChange = (customerId) => {

    if(newpassword==password){
    dispatch(CustChangePass(customerId, password));
  }
  else{
    setErrorMessagee(' Should Not Match Password')
    alert("NewPassword and ConfirmNew Password Shoulnot Match...")
  }
};

  useEffect(() => {
    if (response === "successfully updated password!!!") {
      //  sessionStorage.setItem('token', response.data.token)
      // props.history.push('/custhome')
      // alert(
      //   "Success: Password changed successfully..!! Please Re-login with your new Password..!!"
      // );
      clearForm();
      toast.success(
        "Password changed successfully..!! Please Re-login with your new Password..!!",
        { autoClose: 5000 }
      );
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-white text-dark"}>
          <Card.Header>Change Password</Card.Header>
          <Card.Body>
          <div className="mb-3">
              <label className="form-label"> Old Password</label>
              <input
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                className="form-control"
                type="password"
                placeholder="********"
               
                value={oldpassword}
              />
              
            </div>
            <div className="mb-3">
              <label className="form-label"> New Password</label>
              <input
              // onChange={(e) => {
              //   setNewPassword(e.target.value);
              // }}
               onChange={(e) => validate(e.target.value)}

                
                className="form-control"
                type="password"
                placeholder="********"
                // maxLength="8"
                // value={newpassword}
              />
              <span style={{
                fontWeight: 'bold',
                color: 'red',
              }}>{errorMessage}</span>
            </div>
            <div className="mb-3">
              <label className="form-label"> Confirm New Password</label>
              <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
                
                className="form-control"
                type="password"
                placeholder="********"
                
                value={password}
              />
              <span style={{
                fontWeight: 'bold',
                color: 'red',
              }}>{errorMessagee}</span>
            </div>
            <div className="mb-3">
              <button
                onClick={() => {
                  onChange(customerId);
                }}
                className="btn btn-success float-right"
              >
                Change
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div>
        {/* <button>
          <a className="btn btn-outline-secondary float-left" href="/custhome">
            Profile
          </a>
        </button> */}
      </div>
    </div>
  );
};

export default ChangePass;
