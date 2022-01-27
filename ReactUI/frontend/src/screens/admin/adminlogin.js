import React, { useEffect, useState } from "react";
import { signin } from "../../actions/adminActions/adminActions";
import { Card } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './adminlogin.css';

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminSignIn = useSelector((store) => store.adminSignIn);
  const { loading, error, response } = adminSignIn;

  const dispatch = useDispatch();

  const onSignin = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (response && response.email === email) {
      sessionStorage.setItem("admin", JSON.stringify(response));
      props.history.push("/adminhome");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert("Error: Please enter correct Credentials");
    }
  }, [loading, error, response]);

  return (
    <div className="admincard">
    <Card style={{backgroundColor:"aliceblue"}}>
  
      <Card.Header>Admin Login</Card.Header>
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
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                placeholder="***** "
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
    </div>
  );
};

export default AdminLogin;
