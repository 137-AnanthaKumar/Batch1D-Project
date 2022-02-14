import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { CustFundTransfer } from "../../actions/customerActions/customerAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerFundTransfer = (props) => {
  const cust = JSON.parse(sessionStorage.getItem("customer"));
  const [senderAccountNo, setSenderAccountNo] = useState(
    cust.savingsAccount.accountNumber
  );
  const [reciverAccountNo, setReciverAccountNo] = useState("");
  const [amount, setAmount] = useState("");

  const FundTrans = useSelector((store) => store.FundTrans);
  const { loading, error, response } = FundTrans;
  toast.configure();

  const dispatch = useDispatch();

  // const accno = JSON.parse(cust).savingsAccount.accountNumber;

  const clearForm = () => {
    setReciverAccountNo("");
    setAmount("");
  };
  

  
   const onTransfer = () => {

    if(amount>0){
    dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));


  }
  else{
    toast.error("Enter Proper Amount To Transfer", { autoClose: 1000 });
    clearForm();
  }
  };

  useEffect(() => {
    if (response === "Transaction done Successfully") {
   
      toast.success("Transaction successful..!!", { autoClose: 2000 });
      clearForm();
    
    } else if (response != "Transaction done Successfully") {
      
      toast.error(response, {
        autoClose: 3000,
      });
    }
  }, [loading, error, response]);
  useEffect(() => {});

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-white bg-white text-dark"}>
          <Card.Header>Fund Transfer</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label">Your Account Number</label>
              <input
                onChange={(e) => {
                  setSenderAccountNo(e.target.value);
                }}
                className="form-control"
                value={cust.savingsAccount.accountNumber}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Beneficiary Account Number</label>
              <input
                onChange={(e) => {
                  setReciverAccountNo(e.target.value);
                }}
                className="form-control"
                value={reciverAccountNo}
                placeholder="0"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Amount </label>
              <input
                type="number"
               
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="form-control"
                value={amount}
                placeholder="0"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onTransfer}
                className="btn btn-success float-right"
              >
                Transfer
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomerFundTransfer;
// import { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { CustFundTransfer } from "../../actions/customerActions/customerAction";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CustomerFundTransfer = (props) => {
//   const cust = JSON.parse(sessionStorage.getItem("customer"));
//   const [senderAccountNo, setSenderAccountNo] = useState(
//     cust.savingsAccount.accountNumber
//   );
//   const [reciverAccountNo, setReciverAccountNo] = useState("");
//   const [amount, setAmount] = useState("");

//   const FundTrans = useSelector((store) => store.FundTrans);
//   const { loading, error, response } = FundTrans;
//   toast.configure();

//   const [action, setAction] = useState();
//   const [toggleState, setToggleState] = useState(1);
//   const dispatch = useDispatch();

//   // const accno = JSON.parse(cust).savingsAccount.accountNumber;

//   const clearForm = () => {
//     setReciverAccountNo("");
//     setAmount("");
//   };
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   const onTransfer = () => {
//     const type="recharge";
//    var today = new Date(),
//     // dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));
//     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     var today = new Date(),
 
//     time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

//     if(action==="deposit"){
  
  
//       dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));
//      } 
//      else if(action==="withdraw") {
  
//       dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));
//   } 
//   };

//   useEffect(() => {
//     if (response === "Transaction done Successfully") {

//       toast.success("Transaction successful..!!", { autoClose: 2000 });
//       clearForm();

//     } else if (response != "Transaction done Successfully") {

//       toast.error(response, {
//         autoClose: 3000,
//       });
//     }
//   }, [loading, error, response]);

//   return (
//     <div id="container">
//       <div className="bloc-tabs">
//         <button
//           className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(1)}
//         >
//           Transfer Money
//         </button>
//         <button
//           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(2)}
//         >
//           Deposit/Withdraw
//         </button>
//       </div>
//       <div>
//         <Container className="text-white">
//           <Card className={"border border-white bg-white text-dark"}>
//             <Card.Header>Fund Transfer</Card.Header>
//             <Card.Body>
//               <div className="content-tabs">
//                 <div
//                   className={toggleState === 1 ? "content  active-content" : "content"}>
//                   <div className="mb-3">
//                     <label className="form-label">Your Account Number</label>
//                     <input
//                       onChange={(e) => {
//                         setSenderAccountNo(e.target.value);
//                       }}
//                       className="form-control"
//                       value={cust.savingsAccount.accountNumber}
//                       readOnly
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Beneficiary Account Number</label>
//                   </div>
//                   <input
//                     onChange={(e) => {
//                       setReciverAccountNo(e.target.value);
//                     }}
//                     className="form-control"
//                     value={reciverAccountNo}
//                     placeholder="0"
//                   />
//                   <div className="mb-3">
//                     <label className="form-label">Amount </label>
//                     <input
//                       onChange={(e) => {
//                         setAmount(e.target.value);
//                       }}
//                       className="form-control"
//                       value={amount}
//                       placeholder="0"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <button
//                       onClick={onTransfer}
//                       className="btn btn-success float-right"
//                     >
//                       Transfer
//                     </button>
//                   </div>
//                 </div>

//                 <div
//                   className={toggleState === 2 ? "content  active-content" : "content"}>
//                   <div className="mb-3">
//                     <label className="form-label">Your Account Number</label>
//                     <input
//                       onChange={(e) => {
//                         setSenderAccountNo(e.target.value);
//                       }}
//                       className="form-control"
//                       value={cust.savingsAccount.accountNumber}
//                       readOnly
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <div class="form-group">
//                       <label>Select Action</label>
//                       <select class="form-select" onChange={(e) => {
//                         setAction(e.target.value);
//                       }} aria-label="Default select example">


//                         <option value="deposit">Deposit</option>
//                         <option value="withdraw">Withdraw</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Amount </label>
//                     <input
//                       onChange={(e) => {
//                         setAmount(e.target.value);
//                       }}
//                       className="form-control"
//                       value={amount}
//                       placeholder="0"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <button
//                       onClick={onTransfer}
//                       className="btn btn-success float-right"
//                     >
//                       Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default CustomerFundTransfer;
