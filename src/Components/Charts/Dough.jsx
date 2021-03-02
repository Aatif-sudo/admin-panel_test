import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Dough.scss";

const data = {
  labels: ["Failed", "Passed", "Supply"],
  datasets: [
    {
      data: [200, 500, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      //hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function Dough() {
  return (
    <div className="dough_container">
      <Doughnut data={data} />
    </div>
  );
}

export default Dough;
