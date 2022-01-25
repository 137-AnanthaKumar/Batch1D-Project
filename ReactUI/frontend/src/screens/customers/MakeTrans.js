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
    dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));
  };

  useEffect(() => {
    if (response === "Transaction done Successfully") {
      // sessionStorage.setItem("customer", JSON.stringify(response));
      //alert("Success: Transaction successful..!!");
      toast.success("Transaction successful..!!", { autoClose: 2000 });
      clearForm();
      //<Redirect to="/custhome" />;
    } else if (response != "Transaction done Successfully") {
      //alert(response.error);
      toast.error(response, {
        autoClose: 3000,
      });
    } //else if (error) {
    //   //alert(error);
    //   toast.error("Transaction Fail", {
    //     autoClose: 1500,
    //   });
    // }
  }, [loading, error, response]);

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
