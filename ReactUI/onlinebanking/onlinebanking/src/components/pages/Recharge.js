
import React, { useState } from "react";
import './Recharge.css';
export default function Recharge() {
  
  const[operator,setOperator] = useState("");

  const HandleChenge =(event)=>{
    setOperator("BSNL")
  }



  
  return (
    <div className='recharge'>
     <div >
       <label>Mobile Recharge</label>
     </div>
     <div>
      <label>SelectOperater : </label>
     <select name="operater" id="operater">
       <option value="bsnl" onChenge={HandleChenge}>BSNL</option>
         <option value="jio">JIO</option>
         <option value="airtel">AIRTEL</option>
         <option value="tata">TATA SKY</option>
         
      </select>
     
   

     </div>
        <p> {operator}</p>
    </div>
  );
}
