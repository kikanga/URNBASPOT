import React from "react";
import { Table } from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Current extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Truth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Steph</td>
            <td>Curry</td>
            <td>Is a bitch</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default Current;
