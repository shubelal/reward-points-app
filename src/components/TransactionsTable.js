import React from 'react';
import PropTypes from 'prop-types';

const TransactionsTable = ({ transactions = [] }) => {
  // console.log("Transaction" , transactions )

  return (
    <div className="table-wrapper">
      {/* <h2>Transactions</h2> */}
      <table className="styled-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Product</th>
            <th className="align-right">Price ($)</th>
            <th className="align-right">Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
            <td>{txn.id}</td>
            <td>{txn.customerName}</td>
            <td>{txn.purchaseDate}</td>
            <td>{txn.product}</td>
            <td className="align-right">{txn.amount.toFixed(2)}</td>
            <td className="align-right">{txn.rewardPoints}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseDate: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      rewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionsTable;