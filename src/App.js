import React, { useEffect, useState } from 'react';
import RewardsTable from './components/RewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import TransactionsTable from './components/TransactionsTable';
import Loader from './components/loader/Loader';
import fetchTransactions from './api/fetchTransactions'
import { calculateRewardsData } from './components/utils/calculateRewards';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardData, setRewardData] = useState({ monthly: [], total: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch transactions and calculate rewards on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);

        const rewards = calculateRewardsData(data);

        setRewardData(rewards);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Customer Rewards Program</h1>

      <section>
        <h2>Monthly Rewards</h2>
        <RewardsTable data={rewardData.monthly} />
      </section>

      <section>
        <h2>Total Rewards</h2>
        <TotalRewardsTable data={rewardData.total} />
      </section>

      <section>
        <h2>Transactions</h2>
        <TransactionsTable transactions={transactions} />
      </section>
    </div>
  );
};

export default App;
