import { ErrorContainer, RewardTable, Spinner } from "./components";
import { useTransactions } from "./hooks/use-transactions";

import "./App.css";
import { getAggregatedReward } from "./utils/reward";
import { useMemo } from "react";

function App() {
  const { data: transactions, error, isLoading } = useTransactions();

  const rewardData = useMemo(
    () => getAggregatedReward(transactions),
    [transactions]
  );

  return (
    <div className="App">
      {isLoading && <Spinner />}
      {error && <ErrorContainer message={error} />}
      {!isLoading && !error && <RewardTable data={rewardData} />}
    </div>
  );
}

export default App;
