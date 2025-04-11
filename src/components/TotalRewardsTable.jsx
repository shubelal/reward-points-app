import React from 'react';
import PropTypes from 'prop-types';

const TotalRewardsTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Total Points</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(data).map(([name, points]) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{points}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TotalRewardsTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TotalRewardsTable;
