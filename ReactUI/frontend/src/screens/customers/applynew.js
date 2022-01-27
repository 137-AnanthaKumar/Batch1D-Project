import React ,{useState,useEffect} from 'react';
import './applynew.css';
import { Form } from 'react-bootstrap';


import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NewApplication } from "../../actions/customerActions/customerAction.js";

const Applynew =(props)=> {
  

  const[fullname,setFullname]=useState("");
  const[date,setdate]=useState("");
  const[email,setEmail]=useState("");
  const[pan,setPan]=useState("");
  const[title,setTitle]=useState("");
  const[mobile,setMobile]=useState("");
  const[aadhar,setAadhar]=useState("");

  const dispatch = useDispatch();
  const newApplication = useSelector((store) => store.NewApplication);
  const { loading, error, response } = "newApplication";
  toast.configure();

  // const clearform=()=>{
  //   setFullname("");
  //   setdate("");
  //   setPan("");
  //   setEmail("");
  //   setMobile("");
  //   setTitle("");
  //   setAadhar("");
  
  // }

  const submitform=()=>{
    
    // console.log("input mobile no")
    // console.log(mobile)
    dispatch(
      
      NewApplication(
        fullname,
        date,
        email,
        title,
        mobile,
        aadhar
      
      )
    );
    
  };
  useEffect(() => {
    if (response && response === "Successfully submited..!") {
      
      toast.success(
        "Application Submission successful..!!",
        { autoClose: 10000 }
      );
    
      
    } else if (response && response.status === "error") {
     
      toast.error(response.error, {
        autoClose: 10000,
      });
    } else if (error) {
     
      toast.error("Already have with this data!!!", {
        autoClose: 3000,
      });
    }
  }, [loading, error, response]);

  useEffect(() => {}, []);



  
  return (<div className="application">

    <form>
    <center><h1 id="colorhead"><label>Application Form for New Account</label></h1></center>
    <div class="form-group">
    <label>Select Title</label>
     <select onChange={(e) => {
      setTitle(e.target.value);
    }} 
    name="title" value={title} id="cars">
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
    type="date" name="dob" value={date} placeholder="Date of Birth" />
</Form.Group>
</div>



  <div class="form-group">
  
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" 
    onChange={(e) => {
      setEmail(e.target.value);
    }}
    value={email} class="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

 
  <div class="form-group">
    <label for="exampleInputPassword1">Mobile Number</label>
    <input 
    onChange={(e) => {
      setMobile(e.target.value);
    }}
    type="text" class="form-control" value={mobile} id="phonenoinput" placeholder="Enter Your Active Phone Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Permanent Account Number(PAN)</label>
    <input 
    onChange={(e) => {
      setPan(e.target.value);
    }}
    type="text" class="form-control" id="paninput" value={pan} placeholder="Enter Your PAN Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Aadhar Number</label>
    <input 
    onChange={(e) => {
      setAadhar(e.target.value);
    }}
    type="number" value={aadhar} class="form-control" id="aadharnoinput" placeholder="Enter Your 16 Digit Aadhar Number"/>
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
   <button type="submit" class="btn btn-primary"  >Clearform</button>
   
  </center>
  
  
  <br></br>
</form>
 <div>{newApplication.loading && <div>waiting for response</div>}</div>
  </div>);
}

export default Applynew;
