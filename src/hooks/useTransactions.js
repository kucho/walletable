import { useEffect, useState } from "react";
import { getTransactions } from "../services/transaction";

function useTransactions(token) {
  const cachedTransactions = JSON.parse(localStorage.getItem("transactions"));
  const [transactions, setTransactions] = useState(cachedTransactions || []);

  // Check transitions every time
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

  return [transactions, setTransactions];
}

export default useTransactions;
