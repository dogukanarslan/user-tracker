import React from 'react';
import './EmployeeList.css';

export const EmployeeList = () => {
  return (
    <table className="employee-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Position</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>CEO</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
};
