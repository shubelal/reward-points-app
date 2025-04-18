import { parseISO, format, differenceInCalendarMonths, compareAsc } from 'date-fns';

export function calculatePoints(amount) {
  const amt = Number(amount);
  if (amt <= 50) return 0;
  if (amt <= 100) return amt - 50;
  return (amt - 100) * 2 + 50;
}

export function calculateRewardsData(transactions) {
  if (!transactions || !transactions.length) return { monthly: [], total: [], filteredTransactions: [] };

  const sortedTransactions = [...transactions].sort((a, b) =>
    compareAsc(parseISO(a.purchaseDate), parseISO(b.purchaseDate))
  );
  const latestDate = parseISO(sortedTransactions[sortedTransactions.length - 1].purchaseDate);

  // Keep only transactions within 3 months of latest date
  const filteredTransactions = transactions.filter((tx) => {
    const txDate = parseISO(tx.purchaseDate);
    const monthsDiff = differenceInCalendarMonths(latestDate, txDate);
    return monthsDiff >= 0 && monthsDiff < 3;
  });

  const monthlyRewards = {};
  const totalRewards = {};

  filteredTransactions.forEach((tx) => {
    const customerId = tx.customerId;
    const name = tx.customerName;
    const date = parseISO(tx.purchaseDate);
    const year = date.getFullYear();
    const month = format(date, 'MMMM');
    const key = `${customerId}_${month}_${year}`;

    const points = calculatePoints(Number(tx.amount) || 0);
    tx.rewardPoints = points;

    if (!monthlyRewards[key]) {
      monthlyRewards[key] = {
        customerId,
        name,
        month,
        year,
        rewardPoints: 0,
      };
    }
    monthlyRewards[key].rewardPoints += points;

    if (!totalRewards[customerId]) {
      totalRewards[customerId] = {
        name,
        rewardPoints: 0,
      };
    }
    totalRewards[customerId].rewardPoints += points;
  });

  return {
    monthly: Object.values(monthlyRewards),
    total: Object.values(totalRewards),
    filteredTransactions,
  };
}
