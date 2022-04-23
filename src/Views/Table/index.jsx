/** @format */

import "../Table/table.scss";
const TableContent = () => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>India</td>
            <td>Delhi</td>
            <td>!@#$%^</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>1</td>
            <td>India</td>
            <td>Delhi</td>
            <td>!@#$%^</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
