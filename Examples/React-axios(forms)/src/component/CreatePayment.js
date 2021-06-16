import React from "react";
import { useEffect, useState } from "react";
import qs from "qs";
import axios from "axios";
import { Container } from "react-bootstrap";

function CreatePayment() {
  const initailpaymentdetails = {
    CheckNum: 0,
    CustomerID: 0,
    PaymentDate: "",
    Amount: "",
  };

  const [payment, setpayment] = useState(initailpaymentdetails);

  const handleInput = (event) => {
    setpayment({ ...payment, [event.target.name]: event.target.value });
  };

  const handleAddProduct = async () => {
    debugger;
    var paymentdata = {
      CheckNum: payment.CheckNum,
      CustomerID: payment.CustomerID,
      PaymentDate: payment.PaymentDate,
      Amount: payment.Amount,
    };

    const response = await axios.post(
      "http://localhost:44306/Payment/CreatePayment",
      qs.stringify(paymentdata)
    );

    setpayment({
      CheckNum: response.paymentdata.CheckNum,
      CustomerID: response.paymentdata.CustomerID,
      PaymentDate: response.paymentdata.PaymentDate,
      Amount: response.paymentdata.Amount,
    });
  };

  return (
    <div>
      <Container>
        <h1>Create payment</h1>
        <form>
          <div>
            <label>CheckNum</label>
            <input
              type="number"
              className="form-control"
              id="CheckNum"
              name="CheckNum"
              placeholder="Enter the CheckNum"
              value={payment.CheckNum}
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <label>CustomerID</label>
            <input
              type="number"
              className="form-control"
              id="CustomerID"
              name="CustomerID"
              placeholder="Enter the CustomerID"
              value={payment.CustomerID}
              onChange={handleInput}
            ></input>
          </div>
          <div>
            <label>PaymentDate</label>
            <input
              type="text"
              className="form-control"
              id="PaymentDate"
              name="PaymentDate"
              placeholder="Enter the PaymentDate"
              value={payment.PaymentDate}
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              id="Amount"
              name="Amount"
              placeholder="Enter the Amount"
              value={payment.Amount}
              onChange={handleInput}
            />
          </div>
          <button onClick={handleAddProduct} className="btn btn-success">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}
export default CreatePayment;

// CheckNum: "",
//     CustomerID: "",
//     Amount: "",
