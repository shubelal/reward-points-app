import { rewardsTransactions } from '../data/sampleData';

// asynchronous API call 
export const fetchTransactions = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(rewardsTransactions);
      }, Math.random() * 1000 + 500);
    } catch (error) {
      reject('Failed to fetch Rewards Points');
    }
  });
