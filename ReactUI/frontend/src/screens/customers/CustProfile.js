import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

const CustProfile = (props) => {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  //console.log(customer)
  return (
    <div>
      <Container className="text-white">
        {" "}
        <Card className={"border border-dark bg-dark text-white"}>
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
  );
};

export default CustProfile;
