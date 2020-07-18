import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/core";
import TransactionList from "./TransactionList";
import Swappable from "./Swappable";

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

  return (
    <Flex direction="column">
      <Flex
        bg="indigo.100"
        p="25px 15px"
        justify="space-between"
        align="center"
      >
        <Swappable />
      </Flex>
      <TransactionList data={transactions} />
    </Flex>
  );
};

export default Transactions;
