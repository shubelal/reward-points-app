const fetchTransactions = async () => {
    const response = await fetch('/data/transactions.json');
    if (!response.ok) throw new Error('Failed to fetch transactions');
    return response.json();
  };
  export default fetchTransactions;