import React, { useState, useEffect } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const cachedTransactions = localStorage.getItem("transactions");
  if (Array.isArray(cachedTransactions) && cachedTransactions.length) {
    setTransactions({ transactions: JSON.parse(cachedTransactions) });
  } else {
    // Fetch transactions again
  }

  // Update localStorage on every change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return null;
};

export default Transactions;
