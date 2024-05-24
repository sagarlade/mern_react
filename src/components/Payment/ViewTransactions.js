import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-api-1g0m.onrender.com/api/transactions")
      .then((response) => {
        setTransactions(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="trans_table">
      <h1>Transaction History</h1>
      <table className="rwd-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.fullname}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
