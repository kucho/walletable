import React, { useState } from "react";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";

const Swappable = ({ balance, onSuccess }) => {
  const [isAdding, setIsAdding] = useState(false);

  return !isAdding ? (
    <Balance onClick={() => setIsAdding(!isAdding)} balance={balance} />
  ) : (
    <TransactionForm
      onCancel={() => setIsAdding(!isAdding)}
      onSuccess={onSuccess}
    />
  );
};

export default Swappable;
