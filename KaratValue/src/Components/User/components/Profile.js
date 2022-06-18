import React from "react";

import "../User.css";

const Profile = () => {
  return (
    <div className="tab-pane fade show active">
      <table className="table table-hover table-sm table-properties">
        <tr>
          <th>sub</th>
          <td
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: " 20rem",
            }}
          ></td>
        </tr>
        <tr>
          <th>password</th>
          <td></td>
        </tr>
        <tr>
          <th>uid</th>
          <td></td>
        </tr>
        <tr>
          <th>nickname</th>
          <td></td>
        </tr>
        <tr>
          <th>preferred username</th>
          <td></td>
        </tr>
        <tr>
          <th>gender</th>
          <td></td>
        </tr>
        <tr>
          <th>birthdate</th>
          <td></td>
        </tr>
        <tr>
          <th>locale</th>
          <td></td>
        </tr>
        <tr>
          <th>zoneinfo</th>
          <td></td>
        </tr>
        <tr>
          <th>given name</th>
          <td></td>
        </tr>
        <tr>
          <th>middle name</th>
          <td></td>
        </tr>
        <tr>
          <th>family name</th>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Profile;
