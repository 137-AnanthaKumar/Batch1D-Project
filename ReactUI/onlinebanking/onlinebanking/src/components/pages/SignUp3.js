import React, { useState } from 'react';
import { RegisterService } from '../services/RegisterService';
import './SignUp.css';

export default function SignUp() {
  const[data ,setData]=useState("")
  const NameAdd=(e)=>{
    setData(e.target.value)
  }
  const Store=()=>{
      RegisterService.adduser(data);
  }
  
  return(
    <div className='container'>
      <h1>Regitration Form</h1>

 

     
        

<div className="div1"> <label for="fname">Full Name :</label>
  <select name="operater" id="operater">
         <option value="mr">Mr</option>
         <option value="mrs">Mrs</option>
         <option value="ms">Ms</option>
       
         
      </select>
 
  <input type="text" id="fname" onChange={NameAdd} value={data} placeholder="Enter Full Name"/></div>
  <div className="div1">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter Email"/></div>
  <div className="div1">
  <label for="fname">Date of birth:</label>
  <input type="date" id="birthday" name="birthday"/></div>
  <div className="div1">
  <label for="phnno">Phone Number:</label>
  <input type={Number} id="phnno" name="phnno" placeholder="Enter Phone Number"/></div>
  <div className="div1">
  <label for="panno">PanCard Number:</label>
  <input type="text" id="panno" name="panno"/></div>
  <div className="div1">
  <label for="adharno">Aadhar Number:</label>
  <input type="number" id="adharno" name="adharno" minLength="16" maxLength="16"/></div>
  <div className="div1">
  <label for="adhar-doc-id">Upload Aadhar</label>
  <input type="file" id="myFile" name="filename"/></div>
  <div className="div1">
  <label for="pan-doc-id">Upload Pan</label>
  <input type="file" id="myFile" name="filename" /></div>
  <div className="div1">

  <button onClick={Store}>Submit Form</button></div>

     
    </div>
  );
}
