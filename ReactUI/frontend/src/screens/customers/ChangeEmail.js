import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { CustChangeEmail } from "../../actions/customerActions/customerAction.js";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangeEmail = (props) => {
  const [email, setEmail] = useState("");

  const CustEmailChange = useSelector((store) => store.CustEmailChange);
  const { loading, error, response } = CustEmailChange;
  toast.configure();

  const dispatch = useDispatch();
  const cust = sessionStorage.getItem("customer");
  const customerId = JSON.parse(cust).customerId;
  const clearForm = () => {
    setEmail("");
  };
  const onChange = (customerId) => {
    dispatch(CustChangeEmail(customerId, email));
  };
  useEffect(() => {
    if (response === "successfully updated email!!!") {
      //  sessionStorage.setItem('token', response.data.token)
      // alert(
      //   "Success: Email changed successfully..!!      Please Re-login with your new Email..!!"
      // );
      clearForm();
      clearForm();
      toast.success(
        "Email changed successfully..!! Please Re-login with your new Email..!!",
        { autoClose: 5000 }
      );
      <Redirect to="/custhome" />;
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Change Email</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label"> New Email </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                type="email"
                placeholder="example@org.com"
                value={email}
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
export default ChangeEmail;
