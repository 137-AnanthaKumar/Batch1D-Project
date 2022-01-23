import React ,{useState} from 'react';

import { RegisterService } from '../services/RegisterService';
import './SignUp.css';


export default function SignUp(props) {
  const [data, setData] = useState({name:"", Email:""})
  const HamdleChenge = (e) => {
  let name=e.target.name;
  let value=e.target.value;
  setData({[name]:value})
  }
  
  const store = () => {
    
    
    RegisterService.createNewUser(data).then(res =>{
      props.history.push('/create');
      setData({name:"",Email:""})

  } )}

  return (
    <div className='container'>
      <h1>Regitration Form</h1>
      <form>
        




      <div className="div1"> <label for="fname">Full Name :</label>
        <select name="operater" id="operater">
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>


        </select>

        <input type="text" id="fname" name="name" value={data.name} onChange={HamdleChenge} placeholder="Enter Full Name" /></div>
      <div className="div1">
        <label for="email">Email:</label>
        <input type="email" id="email"  value={data.Email} name="email" onChange={HamdleChenge} placeholder="Enter Email" /></div>
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

        <button onClick={store} >Submit Form</button></div>

        </form>



    </div>
  );
}
