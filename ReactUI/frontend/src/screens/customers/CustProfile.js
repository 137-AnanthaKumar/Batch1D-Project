import React, { Component,useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './CustProfile.css';
import { FetchCustProfile } from "../../actions/customerActions/customerAction.js";


const CustProfile = (props) => {
  // const customer = JSON.parse(sessionStorage.getItem("customer"));
  const dispatch = useDispatch();

  const CustProfile = useSelector((store) => store.CustProfile);
  const { error, response, loading } = CustProfile;

  const cust = JSON.parse(sessionStorage.getItem("customer"));
  const customerId = cust.customerId;

  // useEffect(() => {
  //   dispatch(FetchCustProfile(customerId));
  // }, []);

  useEffect(() => {}, [error, response, loading]);





  // const CustProfile = useSelector((store) => store.CustProfile);
  // const { error, response, loading } = CustProfile;
  // toast.configure();
  // useEffect(() => {
  //   dispatch(FetchNewApplyList());
  // }, []);
  //console.log(customer)
  return (
    <div className="mainprofile">
    <div className="custprofile">
      <Container className="text-dark">
        {" "}
        <Card className={"border border-dark bg-white text-dark"}>
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            <h4>Personal Information</h4>
            <div>First Name : {cust.firstName}</div>
            <div>Last Name : {cust.lastName}</div>
            <div>Email : {cust.email}</div>
            <div>Mobile Number : {cust.mobileNo}</div>
            <br />

            <h4>Account Details</h4>
            <div>Account Number : {cust.savingsAccount.accountNumber}</div>
            <div>
              Account Balance : {cust.savingsAccount.accountBalance}
            </div>
            <div>CIF Number : {cust.savingsAccount.cifNo}</div>
            <div>Branch Name : {cust.savingsAccount.branchName}</div>
            <div>IFSC Code : {cust.savingsAccount.ifscCode}</div>
          </Card.Body>
        </Card>
      </Container>
     
    </div>
    
    
    <div className="smalldetails">
       
    <marquee width="100%" direction="up" behavior="slide" height="300px">
    <div>
    <ul>
    <li style={{color:"blue"}}>
    Here You Are In welcome Page .You Can Make Transaction To Your Payee...
    </li><br></br>
    <li style={{color:"orange"}}>
    Coral Credit Card: Joining fee 500 + GST. Earn up to 10,000 additional reward points. Apply for it now.
    </li><br></br>
    <li style={{color:"green"}}>
    Resolution Framework 2.0 as per RBI Guidelines for COVID-19 related stress.
    </li><br></br> 
    <li style={{color:"blue"}}>
    Get Education loan, Housing Loans, Personal Loans at just 6.5%
    </li>  
    
    </ul>
    </div>
     </marquee>
    </div>
    </div>
  );
};

export default CustProfile;