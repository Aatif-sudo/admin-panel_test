import React, { useState } from "react";
import "./RecentRegisterations.scss";

const initial = [
  {
    Name: "Zubin Khan",
    City: "Jaipur",
    Qualification: "M.tech",
  },
  {
    Name: "Barkha Jaiswal",
    City: "Gorakhpur",
    Qualification: "B.tech",
  },
  {
    Name: "Regina Philange",
    City: "NewYork",
    Qualification: "M.s",
  },
  {
    Name: "Gajodhar Sahu",
    City: "Kharsia",
    Qualification: "B.tech",
  },
  {
    Name: "Rishabh Panth",
    City: "Ranchi",
    Qualification: "Ssc",
  },
];
console.log("is_______----> ", initial);
function RecentRegisterations() {
  const [newRegister, setNewRegister] = useState(initial);
  console.log("is", newRegister);

  return (
    <div className="list_cont">
      <ul className="unordered_list">
        <p>New Regsiters</p>
        {newRegister.map((user) => (
          <li className="list_items">
            <h5>{user.Name}</h5>
            <p>
              {user.City} || {user.Qualification}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentRegisterations;
