import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.css";

const PaymentPage = () => {
  const [ViewTransactions, setViewTransactions] = useState(false);

  useEffect(() => {
    if (ViewTransactions) {
      window.location.href = "./ViewTransactions";
    }
  }, [ViewTransactions]);
  const [fullname, setFullName] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4001/api/payment", {
      fullname,
      amount,
    });
    window.location.href = response.data.url;
  };

  return (
    <div className="payment">
      <div className="container payment_p">
        <div className="pay_card">
          <h2>Make Payment Here</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="FullName"
              required
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount INR"
              required
            />
            <button type="submit">Pay</button>
          </form>
          <div className="tran mt-2">
            <button
              type="button"
              className="tran_button"
              onClick={() => {
                setViewTransactions(true);
              }}
            >
              View Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;