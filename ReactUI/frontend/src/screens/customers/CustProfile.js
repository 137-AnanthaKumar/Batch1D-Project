import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './CustProfile.css';

const CustProfile = (props) => {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
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
            <div>First Name : {customer.firstName}</div>
            <div>Last Name : {customer.lastName}</div>
            <div>Email : {customer.email}</div>
            <div>Mobile Number : {customer.mobileNo}</div>
            <br />

            <h4>Account Details</h4>
            <div>Account Number : {customer.savingsAccount.accountNumber}</div>
            <div>
              Account Balance : {customer.savingsAccount.accountBalance}
            </div>
            <div>CIF Number : {customer.savingsAccount.cifNo}</div>
            <div>Branch Name : {customer.savingsAccount.branchName}</div>
            <div>IFSC Code : {customer.savingsAccount.ifscCode}</div>
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
    Here You Are In welcome Page .You Can Make Transaction To Your Payee...
    </li><br></br>
    <li style={{color:"green"}}>
    Here You Are In welcome Page .You Can Make Transaction To Your Payee...</li>
   
    
    </ul>
    </div>
     </marquee>
    </div>
    </div>
  );
};

export default CustProfile;
