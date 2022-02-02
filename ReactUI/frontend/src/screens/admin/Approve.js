import React ,{useEffect, useState} from 'react';
import { Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { FetchNewApplyList } from "../../actions/adminActions/adminActions";
import { custApprove } from "../../actions/adminActions/adminActions.js";
import './Approve.css';

function Approve(props) {
  
 
    const[accountBalance, setAccountBalance]=useState(0);
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState(null);
    const [email, setEmail] = useState("");
    const[applicationId,setApplicationId]=useState(null);
  
    const[mobileNo,setmobileNo]=useState("");
    // const[aadhar,setAadhar]=useState(null);
    const dispatch = useDispatch();
 
  const NewList = useSelector((store) => store.NewList);
  const { error, response, loading } = NewList;
  toast.configure();
  useEffect(() => {
    dispatch(FetchNewApplyList());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const onApprove=()=>{
    
    const password=Math.floor(Math.random()*900001) + 100002;
    const accountNumber=Math.floor(Math.random()*34410000) + 54410000;
    const cifNo=Math.floor(Math.random()*34410000091) + 54410000098;
    const branchName="TSI";
    const ifscCode="12345678909";
   
    
    dispatch(
      custApprove(
        password,
        accountNumber,
        cifNo,
        accountBalance,
        branchName,
        ifscCode,
        firstName,
        email,
        mobileNo,
        lastName,
        
      )
     
    );
    setAccountBalance(null);
    
    // axios
    // .delete(
    //   `http://localhost:8080/ebanking/newapplication/disapproved/${applicationId}`
    // )
    // .then(
    //   (response) => {
    //     console.log(response);
        // toast.success("Account Approved Successfully..!!");
        // dispatch(FetchNewApplyList());
    //   },
    //   (error) => {
    //     console.log(error);
    //     toast.error("Somthing Wrong");
    //   }
    // );
    
  }
  useEffect(() => {
    if (response && response === "Successfully Added..!") {
      
      toast.success(
        "Customer added successfully..!!    Please provide information to customer for Registration.",
        { autoClose: 10000 }
      );
     
    } else if (response && response.status === "error") {
     
      toast.error(response.error, {
        autoClose: 10000,
      });
    } else if (error) {
      // alert(
      //   "Error: Already have a customer with this data!!! please confirm details with customer"
      // );
      toast.error("Already have a customer with this data!!!", {
        autoClose: 3000,
      });
    }
  }, [loading, error, response]);

  useEffect(() => {}, []);
  const notApprove = (applicationId) => {
    axios
      .delete(
        `http://localhost:8080/ebanking/newapplication/disapproved/${applicationId}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("Deleted Successfully..!!");
          dispatch(FetchNewApplyList());
        },
        (error) => {
          console.log(error);
          toast.error("Not deleted");
        }
      );
  };


  return(
    <Card className={"border border-dark bg-white text-dark"}>
    <Card.Header>List Of Application</Card.Header>
    <Card.Body>
      <div>
        <Table bordered hover striped variant="dark">
          <thead className="text-white">
            <tr>
              <th>Title</th>
              <th>Full Name </th>
              <th>Email </th>
              <th>Mobile Number</th>
              <th>Date Of Birth</th>
              <th>PAN Number</th>
              <th>Aadhar Number</th>
             
              <th>Application Id</th>
              <th>Balance</th>
              <th>Action</th>
            
            </tr>
          </thead>
           <tbody>
           {response &&
                response.length > 0 &&
                response.map((list) => {
                  return (
                    <tr>
                    <td > <input
              
                className="formcontrol"
                value={list.title}
                readOnly
              /></td>
                    <td > <input
                     value={list.fullname}
                      type="text"
                onSelect={(e) => {
                  setfirstName(e.target.value);
                }}
                className="formcontrol"
               
               
              /></td>
                    <td > <input
                     value={list.email}
                      type="email"
                      onSelect={(e) => {
                  setEmail(e.target.value);
                }}
                className="formcontrol"
               
               
              /></td>
                    <td> <input
                     value={list.mobile}
                      type="text"
                    maxLength="10"
                    onSelect={(e) => {
                  setmobileNo(e.target.value);
                }}
                className="formcontrol"
                
               
              /></td>
                    <td> <input
                // onChange={(e) => {
                //   setDate(e.target.value);
                // }}
                type="text"
                className="formcontrol"
                value={list.date}
               
              /></td>
                    <td> <input
                // onChange={(e) => {
                //   setPan(e.target.value);
                // }}
                className="formcontrol"
                value={list.pan}
                readOnly
              /></td>
                    <td> <input
                // onChange={(e) => {
                //   setAadhar(e.target.value);
                // }}
                className="formcontrol"
                value={list.aadhar}
                readOnly
              /></td>
                    <td> <input
                onChange={(e) => {
                  setApplicationId(e.target.value);
                }}
                className="formcontrol"
                value={list.applicationId}
                readOnly
              /></td>
                    <td><input type="number" placeholder='SetBalance' onChange={(e) => {
                  setAccountBalance(e.target.value);
                }}/></td>
                    <td><div className='Button'>
                      <button
                        size="md"
                        type="button"
                        className="buttonbo"
                        onClick={() => {
                          onApprove(list.applicationId);
                        }}
                      >
                        APPROVE
                      </button>
                      <button
                        size="md"
                        type="button"
                        className="buttonbo"
                        onClick={() => {
                          notApprove(list.applicationId);
                        }}
                      >
                        DISAPPROVE
                      </button></div>
                    </td>
                  </tr>
                  );
                })}
           </tbody>
        </Table>
      </div>
    </Card.Body>
  </Card>
);


            }

export default Approve;
