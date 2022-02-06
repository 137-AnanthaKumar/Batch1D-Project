import React, { useEffect, useState } from "react";
import { CustSignin } from "../../actions/customerActions/customerAction.js";
import { Card } from "react-bootstrap";
import './Customer.css';
import { useDispatch, useSelector } from "react-redux";

const CustLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const[data,setData]=("");

  const CustSignIn = useSelector((store) => store.CustSignIn);
  const { loading, error, response } = CustSignIn;

  const dispatch = useDispatch();

  const onSignin = () => {
    dispatch(CustSignin(email, password));
  };

  useEffect(() => {
    if (response && response.email === email) {
      sessionStorage.setItem("customer", JSON.stringify(response));
      props.history.push("/custhome");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert("Error: Please enter correct Credentials");
    }
  }, [loading, error, response]);

  return (
<div className="mainclass">
    
    <Card className="customer">
      <Card.Header>Customer Login</Card.Header>
      <Card.Body>
        <div>
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                placeholder="Enter Registered Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                maxLength="8"
                placeholder="******"
                type="password"
              ></input>
            </div>
            <div className="mb-3">
              <button onClick={onSignin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </Card.Body>
    </Card>
    <div className="dataclass">
    <h4><center>Important Notice</center></h4>
        <ul>
        <li>
        An additional feature of “CAPTCHA” has been introduced for KNST Bank’s 
        Internet Banking login, to ensure a safer banking experience.
        
        </li>
        <br></br>
        <li>
        If you are using an old version of Internet Explorer,
         please update to the latest version immediately, to enjoy a seamless
          banking experience.</li><br></br>
          <li>
          As per RBI guidelines, Real-Time
           Gross Settlement (RTGS) is available 24x7 with effect from 
           Dec 14, 2020. Please <a class="icici-link" href="https://www.icicibank.com/Personal-Banking/onlineservice/
           online-services/FundsTransfer/neft-rtgs.page">click here</a> for details.
          </li><br></br>
          <li>
          OTP/URN for internet banking transactions for NRI customers which was earlier 
          sent on email, is now sent on SMS at customer’s registered India/International
           Mobile numbers. Key transactions where OTP/URN will be sent on SMS are- Funds 
           Transfer/Add payee or biller*/Online User id/Password generation and Risk based OTP.
            Please note that post new payee/biller addition, there will be a 30 minutes 
          cooling period before NRI customers can initiate a transaction to the newly added payee/biller
          </li>
        
        </ul>
    
    </div></div>
  );
};

export default CustLogin;
