import React from 'react'
import "./App.css";
import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentPage from "./components/Payment/Payment";
import Themes from "./components/themes";
import ViewTransactions from "./components/Payment/ViewTransactions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Themes />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/ViewTransactions" element={<ViewTransactions />} />
    </Routes>
  );
}

export default App;
