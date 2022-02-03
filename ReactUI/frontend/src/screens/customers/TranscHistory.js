import jsPDF from "jspdf";
import React, { useState, useEffect } from "react";
// import bag from '../src/image/bag.png';

import { Card, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { FetchTransHistory } from "../../actions/customerActions/customerAction.js";

const TransactionHistory = (props) => {
  const dispatch = useDispatch();

  const CustTransHistory = useSelector((store) => store.CustTransHistory);
  const { error, response, loading } = CustTransHistory;

  const cust = JSON.parse(sessionStorage.getItem("customer"));
  const customerId = cust.customerId;

  useEffect(() => {
    dispatch(FetchTransHistory(customerId));
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const DounloadStatement=()=>{
    
  var doc=new jsPDF('px','pt','a4');
 
  
  
    doc.html(document.querySelector("#pdf"),{
    callback:function(pdf){
        pdf.save("knststatement.pdf");

    }});
    
    
    
  }
  
  return (
    <Card id="pdf" className={"border border-white bg-white text-dark"}>
      <Card.Header>Transaction History</Card.Header>
      <Card.Body>
        <div>
          <Table bordered hover striped variant="dark">
            <thead className="text-white">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Available Balance</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.length > 0 &&
                response.map((list) => {
                  return (
                    <tr>
                      <td>{list.date}</td>
                      <td>{list.time}</td>
                      <td>{list.description}</td>
                      <td>{list.type}</td>
                      <td>{list.amount}</td>
                      <td>{list.availableBalance}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer> <center> <button onClick={DounloadStatement} type="primary">Dounload Statement</button></center></Card.Footer>
    </Card>
  );
};

export default TransactionHistory;
