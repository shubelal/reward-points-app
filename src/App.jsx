import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './api/transactions';
import { aggregateMonthlyRewards, aggregateTotalRewards } from './helpers/rewardUtils';
import TransactionsTable from './components/TransactionsTable';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import Loader from './components/Loader';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Loader render
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const monthlyRewards = aggregateMonthlyRewards(transactions);
  const totalRewards = aggregateTotalRewards(transactions);

  return (
    // Dashboard  data Design 
    <div>
      <h1>Reward Points Dashboard</h1>
      <TransactionsTable transactions={transactions} />
      <MonthlyRewardsTable data={monthlyRewards} />
      <TotalRewardsTable data={totalRewards} />
    </div>
  );
};

export default App;
