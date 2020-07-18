import React, { useContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";
import TransactionList from "./TransactionList";
import Swappable from "./Swappable";
import { UserContext } from "../../context/userContext";
import { getTransactions } from "../../services/transaction";

const Transactions = () => {
  const cachedTransactions = JSON.parse(localStorage.getItem("transactions"));
  const [transactions, setTransactions] = useState(cachedTransactions || []);

  const { userData } = useContext(UserContext);
  const token = userData.token;

  // Check transitions everytime
  useEffect(() => {
    const fetchTransaction = async () => {
      const { data, error } = await getTransactions(token);
      if (!error) {
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        // Only update the cache and state if there's change
        if (JSON.stringify(sortedData) !== JSON.stringify(transactions)) {
          console.log("Updating transactions...");
          setTransactions(sortedData);
          localStorage.setItem("transactions", JSON.stringify(sortedData));
        }
      }
    };
    fetchTransaction().then();
  });

  const balance = transactions.reduce((acc, trans) => acc + trans.amount, 0);

  return (
    <Flex direction="column">
      <Flex
        bg="indigo.100"
        p="25px 15px"
        justify="space-between"
        align="center"
      >
        <Swappable
          balance={balance}
          onSuccess={(transaction) =>
            setTransactions([transaction, ...transactions])
          }
        />
      </Flex>
      <TransactionList data={transactions} />
    </Flex>
  );
};

export default Transactions;
