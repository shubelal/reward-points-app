import React from 'react';
import PropTypes from 'prop-types';
import { calculateRewardPoints } from '../helpers/rewardUtils';

const TransactionsTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Customer</th>
        <th>Date</th>
        <th>Product</th>
        <th>Price</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((txn) => (
        <tr key={txn.transactionId}>
          <td>{txn.transactionId}</td>
          <td>{txn.customerName}</td>
          <td>{txn.purchaseDate}</td>
          <td>{txn.product}</td>
          <td>${txn.price.toFixed(2)}</td>
          <td>{calculateRewardPoints(txn.price)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionsTable;
