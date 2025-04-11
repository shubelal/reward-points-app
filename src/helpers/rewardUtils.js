import { parseISO } from 'date-fns'; // Manipulating dates 

// Logic for Rewards points calculation 
export const calculateRewardPoints = (amount) => {
  if (amount <= 50) return 0;
  const over100 = Math.floor(amount - 100);
  const over50 = Math.floor(Math.min(amount, 100) - 50);
  return over100 * 2 + over50 * 1;
};

export const aggregateMonthlyRewards = (transactions) => {
  const grouped = {};

  transactions.forEach((txn) => {
    const date = parseISO(txn.purchaseDate);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const key = `${txn.customerId}-${month}-${year}`;
    const points = calculateRewardPoints(txn.price);

    if (!grouped[key]) {
      grouped[key] = {
        customerId: txn.customerId,
        name: txn.customerName,
        month,
        year,
        rewardPoints: 0,
      };
    }

    grouped[key].rewardPoints += points;
  });

  return Object.values(grouped);
};

export const aggregateTotalRewards = (transactions) => {
  return transactions.reduce((acc, txn) => {
    const points = calculateRewardPoints(txn.price);
    if (!acc[txn.customerName]) {
      acc[txn.customerName] = 0;
    }
    acc[txn.customerName] += points;
    return acc;
  }, {});
};
