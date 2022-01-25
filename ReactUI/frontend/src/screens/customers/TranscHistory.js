import React, { useState, useEffect } from "react";

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

  return (
    <Card className={"border border-white bg-white text-dark"}>
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
    </Card>
  );
};

export default TransactionHistory;
