import React, { useState } from "react";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
const Swappable = () => {
  const [isAdding, setIsAdding] = useState(false);

  return !isAdding ? (
    <Balance onClick={() => setIsAdding(!isAdding)} balance={0} />
  ) : (
    <TransactionForm onCancel={() => setIsAdding(!isAdding)} />
  );
};

export default Swappable;
