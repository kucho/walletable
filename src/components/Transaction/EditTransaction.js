import React, { useContext, useEffect, useState } from "react";
import {
  deleteTransaction,
  getTransaction,
  updateTransaction,
} from "../../services/transaction";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { useToast } from "@chakra-ui/core";
import TransactionForm from "./TransactionForm";

const labelSettings = {
  fontSize: "sm",
};
const inputSettings = {
  fontSize: "sm",
  width: "100%",
};

const EditTransaction = ({ router }) => {
  const id = router.match.params.id;
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const toast = useToast();
  const history = useHistory();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    async function fetchTransaction() {
      const { data } = await getTransaction(token, id);
      if (data) {
        setTransaction({
          ...data,
          date: format(Date.parse(data.date), "yyyy-MM-dd"),
        });
      } else {
        history.replace("/transactions");
      }
    }
    fetchTransaction().then();
  }, [token, id, history]);

  const handleSave = async (form) => {
    const { error } = await updateTransaction(token, id, form);
    if (!error) {
      toast({
        description: "The transaction was updated successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        description: "We could not update the transaction. Try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async () => {
    const { error } = await deleteTransaction(token, id);
    if (!error) {
      history.push("/transactions");
    } else {
      toast({
        description: "We could not delete this transaction. Try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <TransactionForm
      style={{ width: "200px", margin: "2rem auto" }}
      labelSettings={labelSettings}
      inputSettings={inputSettings}
      value={transaction}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
};

export default EditTransaction;
