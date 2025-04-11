import React from 'react';
import PropTypes from 'prop-types';

const MonthlyRewardsTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Customer ID</th>
        <th>Name</th>
        <th>Month</th>
        <th>Year</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td>{row.customerId}</td>
          <td>{row.name}</td>
          <td>{row.month}</td>
          <td>{row.year}</td>
          <td>{row.rewardPoints}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

MonthlyRewardsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MonthlyRewardsTable;
