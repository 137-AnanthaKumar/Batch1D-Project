import {} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCust } from "../../actions/adminActions/adminActions.js";
import { Redirect } from "react-router-dom";
// import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCustomer = (props) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [cifNo, setCIFNo] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const dispatch = useDispatch();
  const adminAddCust = useSelector((store) => store.adminAddCust);
  const { loading, error, response } = adminAddCust;
  toast.configure();

  const clearForm = () => {
    setAccountNumber("");
    setAccountBalance("");
    setCIFNo("");
    setBranchName("");
    setIfscCode("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
  };

 

  const onaddCust = () => {
    
    dispatch(
      addCust(
        accountNumber,
        accountBalance,
        cifNo,
        branchName,
        ifscCode,
        firstName,
        lastName,
        email,
        mobileNo
      )
    );
  };
  
  useEffect(() => {
    if (response && response === "Successfully Added..!") {
      
      toast.success(
        "Customer added successfully..!!    Please provide information to customer for Registration.",
        { autoClose: 10000 }
      );
      clearForm();
      <Redirect to="/adminhome" />;
    } else if (response && response.status === "error") {
     
      toast.error(response.error, {
        autoClose: 10000,
      });
    } else if (error) {
      // alert(
      //   "Error: Already have a customer with this data!!! please confirm details with customer"
      // );
      toast.error("Already have a customer with this data!!!", {
        autoClose: 3000,
      });
    }
  }, [loading, error, response]);

  useEffect(() => {}, []);

  return (
    <div>
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add New Customer</Card.Header>
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Account Number</label>
              <input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                type="text"
                maxLength="10"
                value={accountNumber}
                placeholder="please enter numbers only"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">First Name</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                maxLength="20"
                value={firstName}
                placeholder="please enter First Name only"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Account Balance</label>
              <input
                onChange={(e) => {
                  setAccountBalance(e.target.value);
                }}
                type="text"
                maxLength="20"
                value={accountBalance}
                placeholder="please enter amount in number"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Last Name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                maxLength="20"
                value={lastName}
                placeholder="please enter Last Name only"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">CIF Number</label>
              <input
                onChange={(e) => {
                  setCIFNo(e.target.value);
                }}
                type="text"
                maxLength="11"
                value={cifNo}
                placeholder="please enter 11 digit number"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">E-mail</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                placeholder="please enter Primary mail id: example@org.com"
                className="form-control bg-dark text-white"
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
                maxLength="20"
                value={branchName}
                placeholder="please enter branch name"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Mobile Number</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                maxLength="10"
                value={mobileNo}
                placeholder="please enter Primary mobile number"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">IFSC Code</label>
              <input
                onChange={(e) => {
                  setIfscCode(e.target.value);
                }}
                type="text"
                maxLength="11"
                value={ifscCode}
                placeholder="please enter 11 character only"
                className="form-control bg-dark text-white"
                //className={'bg-dark text-white'}
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button
            type="reset"
            onClick={onaddCust}
            size="md"
            className="btn btn-success"
          >
            ADD
          </Button>
        </Card.Footer>

        {adminAddCust.loading && <div>waiting for response</div>}
      </Card>
    </div>
  );
};

export default AddCustomer;
