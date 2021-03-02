import React from "react";
import { PieChart as Pie } from "react-minimal-pie-chart";
import "./PieChart.scss";

function PieChart() {
  return (
    <div className="pie_container">
      <Pie
        lengthAngle={-360}
        animate
        onMouseOver={(e, segmentIndex) => {
          console.log(e, "Eve");
        }}
        animationDuration={1500}
        radius={40}
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#00adb5" },
          { title: "Three", value: 20, color: "#6A2135" },
          { title: "Four", value: 40, color: "#222831" },
        ]}
      />
    </div>
  );
}

export default PieChart;
