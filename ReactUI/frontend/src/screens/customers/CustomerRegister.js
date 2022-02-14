import React, { useEffect, useState } from "react";
import { CustRegister } from "../../actions/customerActions/customerAction.js";
// import { Link } from 'react-router-dom'
import { Card, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from 'bcryptjs';


const CustRegs = (props) => {
  const [pass, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfsccode] = useState("");

  const dispatch = useDispatch();
  const CustRegisterStore = useSelector((store) => store.CustRegisterStore);
  const { loading, error, response } = CustRegisterStore;
  toast.configure();

  const clearForm = () => {
    setPassword("");
    setEmail("");
    setMobileNo("");
    setAccountNumber("");
    setBranchName("");
    setIfsccode("");
  };

  const onRegister = () => {
   
    const password = bcrypt.hashSync(pass, '$2a$10$CwTycUXWue0Thq9StjUM0u');
    dispatch(
      CustRegister(
        password,
        email,
        mobileNo,
        accountNumber,
        branchName,
        ifscCode
      )
    );
    alert("NetBanking Activation Susscessfull..")
  };

  useEffect(() => {
    if (response && response === "Registered Succesfully..!!") {
    
      alert(
        "Your Registration is successfully completed !! Please activate your account through your registered Email"
      );
      clearForm();
      toast.success(
        "Your Registration is Successfully Completed ..!! Please Activate your Account through your Registered Email",
        { autoClose: 10000 }
      );
      <Redirect to="/custlogin" />;
      props.history.push("/custlogin");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      //alert("Error: Please check that you have filled form correctly !!!");
      toast.error("Please check that you have filled form correctly !!!", {
        autoClose: 5000,
      });
    }
  }, [loading, error, response]);

  return (
    <div>
      <Card style={{backgroundColor:"orange"}}>
        <Card.Header>Registration  Form NetBanking</Card.Header>
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                maxLength="8"
                placeholder="******"
                value={pass}
                className="form-control text-dark"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                placeholder="please enter Registered Email"
                className="form-control  text-dark"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Mobile Number</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                maxLength="12"
                value={mobileNo}
                placeholder="please enter Registered mobile number"
                className="form-control  text-dark"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Account Number</label>
              <input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                type="text"
                maxLength="10"
                value={accountNumber}
                placeholder="please enter Account number given by Bank"
                className="form-control  text-dark"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                onChange={(e) => {
                  setBranchName(e.target.value);
                }}
                type="text"
                value={branchName}
                maxLength="20"
                placeholder="please enter your Branch Name"
                className="form-control  text-dark"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">IFSC Code</label>
              <input
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
                type="text"
                maxLength="11"
                value={ifscCode}
                placeholder="please enter your banks IFSC code"
                className="form-control  text-dark"
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button onClick={onRegister} size="md" className="btn btn-success">
            Register
          </Button>
        </Card.Footer>

        {loading && <div>waiting for response</div>}
        <div className="text-green">
         
        </div>
       
      </Card>
      <marquee width="80%" direction="left" height="100px">
      <h5 id="marquee">Please Register Carefully........
      </h5>
      </marquee>
    </div>
  );
};

export default CustRegs;
