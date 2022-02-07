import React,{useState,useEffect} from 'react';
import './BillPayment.css';
import { CustRecharge } from "../../actions/customerActions/customerAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";



const BillPayment=()=>{

const cust = JSON.parse(sessionStorage.getItem("customer"));
const [senderAccountNo, setSenderAccountNo] = useState(cust.savingsAccount.accountNumber);
const [mobileNo,setMobileNo] = useState(null);

const [operater,setOperter]=useState("jio");
const [toggleState, setToggleState] = useState(1);
const [plan,setPlan]=useState(199);
//BillPay from store.js
const BillPay = useSelector((store) => store.BillPay);
  const { loading, error, response } = BillPay;
  toast.configure();


const toggleTab = (index) => {
    setToggleState(index);
  };

  const dispatch = useDispatch();

 const MakeReCharge=()=>{
   
  alert("Do You wanna recharge for "+mobileNo+" With "+plan+" for "+operater);
   const type="recharge";
   var today = new Date(),
  //  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   var today = new Date(),

   time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   if(operater==="jio"){
    const reciverAccountNo=81106677;
    // var amount=plan;

    
    dispatch(CustRecharge(senderAccountNo, reciverAccountNo, plan ,operater ,mobileNo,type,date,time));
      //  console.log(senderAccountNo);
      //  console.log(operater);
      //  console.log(plan);
      //  console.log("rechgargr");
      //  console.log(date);
      //  console.log(time);
      
      
   } 
   else if(operater==="airtel") {

    const reciverAccountNo=81106677;
    // var amount=plan;
    dispatch(CustRecharge(senderAccountNo, reciverAccountNo, plan ,operater ,mobileNo,type,date,time));
    console.log(senderAccountNo);
    console.log(operater);
    console.log(plan);
    console.log(type);
    console.log(date);
    console.log(time);
} 
   
   else if(operater==="bsnl") {
    const reciverAccountNo=81106677;
    // var amount=plan;
    dispatch(CustRecharge(senderAccountNo, reciverAccountNo, plan ,operater ,mobileNo,type,date,time));
    console.log(senderAccountNo);
    console.log(operater);
    console.log(plan);
    console.log("rechgargr");
    console.log(date);
    console.log(time);
}
else if(operater==="vi") {
  const reciverAccountNo=81106677;
  // var amount=plan;
  dispatch(CustRecharge(senderAccountNo, reciverAccountNo, plan ,operater ,mobileNo,type,date,time));
  console.log(senderAccountNo);
  console.log(operater);
  console.log(plan);
  console.log("rechgargr");
  console.log(date);
  console.log(time);
}


 } 

 useEffect(() => {
    if (response === "Transaction done Successfully") {
   
      toast.success("Transaction successful..You Will Receive Confirmation Notification From Your!!", { autoClose: 2000 });
     
    
    } else if (response != "Transaction done Successfully") {
      
      toast.error(response, {
        autoClose: 3000,
      });
    }
  }, [loading, error, response]);

  return (
    <div id="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          RECHARGE
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          ELECTRICITY
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          CREDITCARD
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>MOBILE RECHARGE</h2>
          <hr />
          <div class="form-group">
          <label>Enter Mobile</label>
          <input type="text" class="form-control" 
          
          pattern="[0-9]{10}" required
          onChange={(e) => {setMobileNo(e.target.value); }}
          aria-describedby="emailHelp" 
                    
          
          placeholder="Enter Phone"/>
          </div>
         <div  class="form-group">
         <label>Select Opetater</label>
         <select class="form-select"  onChange={(e) => {
            setOperter(e.target.value);
          }} aria-label="Default select example">
       

         <option value="jio">JIO</option>
         <option value="airtel">AIRTEL</option>
         <option value="bsnl">BSNL</option>
         <option value="vi">VI-INDIA</option>
           </select>
            
         </div>
         <div>
         <label>Select Plan</label>
         <select class="form-select"  onChange={(e) => {
            setPlan(e.target.value);
          }} aria-label="Default select example">
         
         <option value={199}>Plan.199|1.5GB per Day for 28 Days.|UlimitedCalls</option>
         <option value={399}>Plan.399|1.5GB per Day for 56 Days.|UlimitedCalls</option>
         <option value={555}>Plan.555|1.5GB per Day for 84 Days.|UlimitedCalls</option>
         <option value={598}>Plan.598|2GB per Day for 84 Days.|UlimitedCalls</option>
           </select>
            
         
         
         </div>
         <div>
         <br></br>
         <button className='btn btn-info float-center' onClick={MakeReCharge}>Proceed To Recharge</button>
         </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>ELECTRICITY</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>CREDIT CARD BILL</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
            
      
   
}



export default BillPayment;

