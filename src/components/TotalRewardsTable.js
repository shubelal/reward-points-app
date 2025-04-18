import React from 'react';
import PropTypes from 'prop-types';

const TotalRewardsTable = ({ data = [] }) => {
  return (
    <div className="table-container">
      {/* <h2>Total Rewards</h2> */}
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'right' }}>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td style={{ textAlign: 'right' }}>{item.rewardPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TotalRewardsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TotalRewardsTable;