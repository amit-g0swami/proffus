import React from "react";

import "../User.css";

const Addess = () => {
  return (
    <div className="tab-pane" style={{ marginTop: "400px" }}>
      <h1>HEYYY</h1>
      <table className="table table-hover table-sm table-properties">
        <tr>
          <th>country</th>
          <td></td>
        </tr>
        <tr>
          <th>postal code</th>
          <td></td>
        </tr>
        <tr>
          <th>locality</th>
          <td></td>
        </tr>
        <tr>
          <th>region</th>
          <td></td>
        </tr>
        <tr>
          <th>street address</th>
          <td></td>
        </tr>
        <tr>
          <th>formatted</th>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Addess;
