import { useEffect, useState } from "react";
import { getTransactions } from "../api/transaction";

export const useTransactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const transactions = await getTransactions();

      setData(transactions);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setData(null);
      setIsLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTransactions();
  }, []);

  return {
    isLoading,
    data,
    error,
  };
};
