import React from 'react';
import PropTypes from 'prop-types';

const RewardsTable = ({ data = [] }) => {
  return (
    <div className="table-container">
      {/* <h2>User Monthly Rewards</h2> */}
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th style={{ textAlign: 'right' }}>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.customerId}</td>
              <td>{item.name}</td>
              <td>{item.month}</td>
              <td>{item.year}</td>
              <td style={{ textAlign: 'right' }}>{item.rewardPoints }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RewardsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      rewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RewardsTable;
