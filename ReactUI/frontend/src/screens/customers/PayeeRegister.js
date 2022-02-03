import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { CustChangeEmail } from "../../actions/customerActions/customerAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PayeeRegister = (props) => {
  const [Payee, setPayee] = useState("");

  const PayeeAdd=()=>{
    alert("payee add???")
  }

  

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Add Benifitary</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label"> New Benifitary Account </label>
              <input
                onChange={(e) => {
                  setPayee(e.target.value);
                }}
                className="form-control"
                maxLength={10}
                type="text"
                placeholder="EnterPayee"
                value={Payee}
              />
            </div>
            <div className="mb-3">
              <button
               onClick={PayeeAdd}
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
export default PayeeRegister;
