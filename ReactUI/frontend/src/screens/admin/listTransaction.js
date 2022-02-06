import React, { useState, useEffect } from "react";
import jsPDF from 'jspdf';
import { Card, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { FetchTransList } from "../../actions/adminActions/adminActions";

const ListTransaction = (props) => {
  const dispatch = useDispatch();

  const adminTransactionList = useSelector(
    (store) => store.adminTransactionList
  );
  const { error, response, loading } = adminTransactionList;

  useEffect(() => {
    dispatch(FetchTransList());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const DounloadStatementa=()=>{
    
    var doc=new jsPDF('px','pt','a3');
   
    
    
      doc.html(document.querySelector("#pdfadmin"),{
      callback:function(pdf){
          pdf.save("knststatement.pdf");
  
      }});
    }

  return (
    <Card id="pdfadmin" className={"border border-dark bg-white text-dark"}>
      <Card.Header>List Of All Transaction</Card.Header>
      <Card.Body>
        <div>
          <Table bordered hover striped variant="dark">
            <thead className="text-white">
              <tr>
                <th>Id</th>
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
                      <td>{list.id}</td>
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
      <Card.Footer> <center> <button onClick={DounloadStatementa} type="primary">Dounload Statement</button></center></Card.Footer>
    
    </Card>
  );
};

export default ListTransaction;
