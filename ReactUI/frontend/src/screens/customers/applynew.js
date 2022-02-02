import React ,{useState,useEffect} from 'react';
import './applynew.css';
import { Form } from 'react-bootstrap';

import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { newApplication } from "../../actions/customerActions/customerAction.js";

const Applynew =(props)=> {
  

  const[fullname,setFullname]=useState(null);
  const[date,setdate]=useState(null);
  const[email,setEmail]=useState(null);
  const[pan,setPan]=useState(null);
  const[title,setTitle]=useState(null);
  const[mobile,setMobile]=useState(null);
  const[aadhar,setAadhar]=useState(null);

  const dispatch = useDispatch();
  const adminAddCust = useSelector((store) => store.adminAddCust);
  const { loading, error, response } = adminAddCust;
  toast.configure();

  const clearform=()=>{
    setFullname("");
    setdate("");
    setPan("");
    setEmail("");
    setMobile("");
    setTitle("");
    setAadhar("");
  
  }

  const submitform=()=>{
    if(fullname!=null && date!=null && email!=null && pan!=null && aadhar!=null &&mobile!=null){   // console.log("input mobile no")
    // console.log(mobile)
    alert("Request Want To Submit");
    dispatch(
      
      newApplication(
        fullname,
        date,
        email,
        title,
        mobile,
        aadhar,
        pan,
      
      )
     
    );
    toast.success(
      "Application Submission successful..!!",
      { autoClose: 1000 }
    );
   
    setFullname("");
    setdate("");
    setPan("");
    setEmail("");
    setMobile("");
    setTitle("");
    setAadhar("");
  
    <Redirect to="/" />;
    
  }
  else{
        toast.error("Please Fill All the Details!!!", {
      autoClose: 3000,
    });
  }
  

};
  // useEffect(() => {
  //   if (response && response === "Successfully Added..!") {
      
      // toast.success(
      //   "Application Submission successful..!!",
      //   { autoClose: 1000 }
      // );
    
      
  //   } else if (response && response.status === "error") {
     
  //     toast.error(response.error, {
  //       autoClose: 1000,
  //     });
  //   } else if (error) {
     
      // toast.error("Already have with this data!!!", {
      //   autoClose: 3000,
      // });
  //   }
  // }, [loading, error, response]);

  // useEffect(() => {}, []);



  
  return (<div className="application">

    
    <center><h1 id="colorhead"><label>Application Form for New Account</label></h1></center>
    <div class="form-group">
    <label>Select Title</label>
     <select onChange={(e) => {
      setTitle(e.target.value);
    }} 
    name="title" required value={title} id="cars">
  <option >Select</option>
  <option value="mr">Mr</option>
  <option value="ms">Ms</option>
  <option value="mrs">Mrs</option>
  </select>
  </div>
  <div class="form-group">
  
  <label for="fullname">FullName</label>
  <input type="text"
  onChange={(e) => {
    setFullname(e.target.value);
  }}
   class="form-control" value={fullname} id="exampleInputEmail1"
   aria-describedby="emailHelp" placeholder="Enter Your Full Name"/>
  
</div>
<div className="form-group">
<Form.Group controlId="dob">
    <Form.Label>Select Date</Form.Label>
    <Form.Control
     onChange={(e) => {
      setdate(e.target.value);
    }}
    type="date" name="dob" value={date} placeholder="Date of Birth"
    required />
</Form.Group>
</div>



  <div class="form-group">
  
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" 
    onChange={(e) => {
      setEmail(e.target.value);
    }}
    value={email} class="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

 
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile Number</label>
    <input 
    onChange={(e) => {
      setMobile(e.target.value);
    }}
    type="text" class="form-control" required value={mobile} id="phonenoinput" placeholder="Enter Your Active Phone Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Permanent Account Number(PAN)</label>
    <input 
    onChange={(e) => {
      setPan(e.target.value);
    }}
    type="text" class="form-control" id="paninput" value={pan} placeholder="Enter Your PAN Number" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Aadhar Number</label>
    <input 
    onChange={(e) => {
      setAadhar(e.target.value);
    }}
    type="number" value={aadhar} class="form-control" id="aadharnoinput" required placeholder="Enter Your 16 Digit Aadhar Number"/>
  </div>
  <div className="file">
  <label>Upload Aadhar:</label>
  <input type="file" id="myFile" name="Aadhar"/>
  </div>
  <div className="file"><br></br>
  <label id="pan">Upload PAN   :</label>
  <input type="file" id="myFile" name="PAN"/><br></br>
  </div>
  <center>
  <button type="submit"  class="btn btn-primary" onClick={submitform} >Submit</button>
   <button type="submit" class="btn btn-primary" onClick={clearform} >Clearform</button>
   
  </center>
  
  
  <br></br>

 <div>{adminAddCust.loading && <div>waiting for response</div>}</div>
  </div>);
}

export default Applynew;
