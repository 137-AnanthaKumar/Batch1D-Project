import React, { Component } from "react";

import { Card, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import './Welcome.css'

class Welcome extends Component {
  render() {
    return (
      <Container className="mainbg">
      <div className="BankName"> <center><h1 id="head1">WELCOME TO OUR KNST BANK</h1></center></div>
        <div className="text-primary">
          <marquee width="100%" direction="left" height="100px">
          <h5 id="marquee">Are You Ready For Join With Our Bank 
          <Link to="/applynew" > <span>Apply Now</span></Link></h5>
          </marquee>
        </div>
       
      <br/>
      <div className="textitems">
        <h6 id="text">  <p id="para"> <Link to="/custlogin" >
        Log in
      </Link> to KNST Bank Internet Banking
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
                  <Card.Title>Login Now</Card.Title>
                  <Card.Text>
                    <div>
                      <Link to="/custlogin" className="nav-link">
                        Login NetBanking
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3 ">
              <Card className="registerbox">
                <Card.Body>
                  <Card.Title>New To NetBanking?</Card.Title>
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
