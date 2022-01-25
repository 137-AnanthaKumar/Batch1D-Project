import React from 'react';
import './applynew.css';
import { Form } from 'react-bootstrap';
import { Label } from '@material-ui/icons';

function applynew() {
  return (<div className="application">

    <form>
    <center><h1 id="colorhead"><label>Application Form for New Account</label></h1></center>
    <div class="form-group">
    <label>Select Title</label>
     <select name="cars" id="cars">
  <option value="mr">Mr</option>
  <option value="ms">Ms</option>
  <option value="mrs">Mrs</option>
  </select>
  </div>
  <div class="form-group">
  
  <label for="fullname">FullName</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Full Name"/>
  
</div>
<div className="form-group">
<Form.Group controlId="dob">
    <Form.Label>Select Date</Form.Label>
    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
</Form.Group>
</div>



  <div class="form-group">
  
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

 
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile Number</label>
    <input type="text" class="form-control" id="phonenoinput" placeholder="Enter Your Active Phone Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Permanent Account Number(PAN)</label>
    <input type="text" class="form-control" id="paninput" placeholder="Enter Your PAN Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Aadhar Number</label>
    <input type="number" class="form-control" id="aadharnoinput" placeholder="Enter Your 16 Digit Aadhar Number"/>
  </div>
  <div className="file">
  <label>Upload Aadhar:</label>
  <input type="file" id="myFile" name="Aadhar"/>
  </div>
  <div className="file"><br></br>
  <label id="pan">Upload PAN   :</label>
  <input type="file" id="myFile" name="PAN"/><br></br>
  </div><center><br></br>
  <button type="submit" class="btn btn-primary">Submit</button></center>
  <br></br>
</form>
  </div>);
}

export default applynew;
