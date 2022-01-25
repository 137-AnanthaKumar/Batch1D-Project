import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import React, { useEffect, useState } from "react";

import { CustChangeMob } from "../../actions/customerActions/customerAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangeMob = (props) => {
  const [mobileNo, setMobileNo] = useState("");

  const CustMobChange = useSelector((store) => store.CustMobChange);
  const { loading, error, response } = CustMobChange;
  toast.configure();

  const dispatch = useDispatch();
  const cust = sessionStorage.getItem("customer");
  const customerId = JSON.parse(cust).customerId;

  const clearForm = () => {
    setMobileNo("");
  };
  const onChange = (customerId) => {
    dispatch(CustChangeMob(customerId, mobileNo));
  };
  useEffect(() => {
    if (response === "successfully updated mobile number!!!") {
      //  sessionStorage.setItem('token', response.data.token)
      // props.history.push('/custhome')
      // alert(
      //   "Success: Mobile No changed successfully..!! Please Re-login to see updated mobile no..!!"
      // );
      clearForm();
      toast.success(
        "Mobile Number changed successfully..!! Please Re-login to see updated Mobile Number..!!",
        { autoClose: 5000 }
      );
    } else if (response && response.status === "error") {
      //alert(response.error);
      toast.error(response.error, {
        autoClose: 5000,
      });
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  // const profile = () => {
  //   props.history.push("/custhome");
  // };

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Change Mobile Number</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label">New Mobile Number</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                className="form-control"
                type="text"
                maxLength="10"
                value={mobileNo}
              />
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
      {/* <div>
        <button
          className="btn btn-outline-secondary float-left"
          onClick={profile}
        >
          Profile
        </button>
      </div> */}
    </div>
  );
};

