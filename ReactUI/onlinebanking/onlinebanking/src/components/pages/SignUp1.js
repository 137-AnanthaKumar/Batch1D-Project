import React, { useState } from 'react';
import { RegisterService } from '../services/RegisterService';
import './SignUp.css';

class SignUp extends react.component{
  constructor(props) {
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            name: '',
           
            emailId: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }
    changeFirstNameHandler= (event) => {
      this.setState({name: event.target.value});
  }

  changeEmailHandler=(event)=>{
    this.setState({emailId:event.target.value})
  }
 saveDetails = (e) => {
  e.preventDefault();
  let newUser = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
  
      
  RegisterService.createNewUser(newUser).then(res =>{
 props.history.push('/create');
             
          }
  
  
  
   ) }
  
  render(){







  return (
    <div className='container'>
      <h1>Regitration Form</h1>






      <div className="div1"> <label for="fname">Full Name :</label>
        <select name="operater" id="operater">
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>


        </select>

        <input type="text" id="fname" onChange={this.changeFirstNameHandler} value={this.state.name} placeholder="Enter Full Name" /></div>
      <div className="div1">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.emailIdS} onchange={this.changeEmailHandler}placeholder="Enter Email" /></div>
      <div className="div1">
        <label for="fname">Date of birth:</label>
        <input type="date" id="birthday" name="birthday" /></div>
      <div className="div1">
        <label for="phnno">Phone Number:</label>
        <input type={Number} id="phnno" name="phnno" placeholder="Enter Phone Number" /></div>
      <div className="div1">
        <label for="panno">PanCard Number:</label>
        <input type="text" id="panno" name="panno" /></div>
      <div className="div1">
        <label for="adharno">Aadhar Number:</label>
        <input type="number" id="adharno" name="adharno" minLength="16" maxLength="16" /></div>
      <div className="div1">
        <label for="adhar-doc-id">Upload Aadhar</label>
        <input type="file" id="myFile" name="filename" /></div>
      <div className="div1">
        <label for="pan-doc-id">Upload Pan</label>
        <input type="file" id="myFile" name="filename" /></div>
      <div className="div1">

        <button onClick={this.Savedetails}>Submit Form</button></div>


    </div>
  );
}
}
export default SignUp;
