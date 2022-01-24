import React, { useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { FetchCustList } from "../../actions/adminActions/adminActions";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Delete } from "@material-ui/icons";

const ListCustomer = (props) => {
  const dispatch = useDispatch();

  const CustList = useSelector((store) => store.CustList);
  const { error, response, loading } = CustList;
  toast.configure();
  useEffect(() => {
    dispatch(FetchCustList());
  }, []);

  useEffect(() => {}, [error, response, loading]);

  const onDelete = (customerId) => {
    axios
      .delete(
        `http://localhost:8080/ebanking/Employee/deleteCustomer/${customerId}`
      )
      .then(
        (response) => {
          console.log(response);
          toast.success("Deleted Successfully..!!");
          dispatch(FetchCustList());
        },
        (error) => {
          console.log(error);
          toast.error("Not deleted");
        }
      );
  };

  return (
    <Card className={"border border-dark bg-dark text-white"}>
      <Card.Header>List Of All Customers</Card.Header>
      <Card.Body>
        <div>
          <Table bordered hover striped variant="dark">
            <thead className="text-white">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Mobile Number</th>
                <th>Account Number</th>
                <th>Account Balance</th>
                <th>Branch Name</th>
                <th>Net Banking Activation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.length > 0 &&
                response.map((list) => {
                  return (
                    <tr>
                    <td>{list.firstName}</td>
                    <td>{list.lastName}</td>
                    <td>{list.email}</td>
                    <td>{list.mobileNo}</td>
                    <td>{list.savingsAccount.accountNumber}</td>
                    <td>{list.savingsAccount.accountBalance}</td>
                    <td>{list.savingsAccount.branchName}</td>
                    <td>{list.savingsAccount.isNetBankingActive}</td>
                    <td>
                      <button
                        size="md"
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                          onDelete(list.customerId);
                        }}
                      >
                        DELETE
                      </button>
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
};

export default ListCustomer;
