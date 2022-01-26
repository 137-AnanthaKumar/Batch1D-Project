import React, { Component } from "react";

import { Card, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import './Welcome.css'
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import { IconButton } from "@material-ui/core";

class Welcome extends Component {
  render() {
    return (
      <Container className="mainbg">
      <div className="miniheader">  <marquee width="100%" direction="left" height="60px" ><p>For added security of your accounts, 
      mandatory login password change after 180 days has been introduced.   |   Now You can make 
      International Fund Transfers up to Rs. 18 lakhs from the comfort of your home. 
      Please visit Payment/Transfers – International Fund Transfers – Foreign Currency 
      transfer/Remittance section.</p></marquee></div>

      <div className="BankName"> <center><h1 id="head1">WELCOME TO KNST BANK</h1></center></div>
        <div className="text-primary">
          <marquee margin-left="100px" width="65%" direction="left" height="100px">
          <h5 id="marquee">Join our Net-Banking just by clicking here 
          <Link to="/applynew" > <span>Apply Now</span></Link></h5>
          </marquee>
        </div>
       
      <br/>
      <div className="textitems">
        <h6 id="text">  <p id="para"> <Link to="/custlogin" className="login-link">
        <em>Log in</em>
      </Link> to KNST Bank Internet Banking.
       Manage your finances conveniently and securely with KNST Bank Internet Banking, 
       right from the comfort of your home or your office. Getting started with our 
        Internet Banking portal is simple. All you need is your user ID and password to use 
        our internet banking services.</p></h6></div>
        <br />
      
        <div>
          <div className="row">
            <div className="col-sm-3">
              {" "}
              <Card className="loginbox">
                <Card.Body>
                  <Card.Title>Login to Net-Banking</Card.Title>
                  <Card.Text>
                    <div>
                      <Link to="/custlogin" className="nav-link">
                        Login Now
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3 ">
              <Card className="registerbox">
                <Card.Body>
                  <Card.Title>New To Net-Banking?</Card.Title>
                  <Card.Text>
                    <div>
                      <Link
                        to="/custRegister"
                        className="nav-link text-justify"
                      >
                        Register Here
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />
        </div>
        
      </Container>
    );
  }
}
export default Welcome;
