import React from 'react';
import { Card, Table } from "react-bootstrap";


function Approve() {

  const onApprove=()=>{
    alert("account approved")
  }
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
            
            </tr>
          </thead>
           <tbody>
            <h3>List </h3>
           </tbody>
        </Table>
      </div>
    </Card.Body>
  </Card>
);


            }

export default Approve;
