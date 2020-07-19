import React, { useContext } from "react";
import { Flex } from "@chakra-ui/core";
import TransactionList from "./TransactionList";
import Swappable from "./Swappable";
import useTransactions from "../../hooks/useTransactions";
import { UserContext } from "../../context/userContext";

const Transactions = () => {
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const [transactions, setTransactions] = useTransactions(token);
  const balance = transactions.reduce((acc, trans) => acc + trans.amount, 0);

  return (
    <Flex direction="column" flexGrow="1">
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
