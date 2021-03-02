import React, { useState } from "react";
import DatePicker from "react-datepicker";
import LineChart from "../../../Components/Charts/LineChart";
import "./DashboardComponents.scss";
import AppTable from "../../../Components/Tables/AppTable";
import RecentRegisterations from "../../../Components/Lists/RecentRegisterations";
import PieChart from "../../../Components/Charts/PieChart";
import Dough from "../../../Components/Charts/Dough";
import Sidebar from "../../../Components/Sidebar/Sidebar";

function Dashboard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Sidebar isHovered={isHovered} setIsHovered={setIsHovered} />
      <div
        className={
          isHovered
            ? "dashboard_components_hovered_container"
            : "dashboard_components_container"
        }
      >
        <section className="left">
          <RecentRegisterations />
          <Dough />
        </section>
        <section className="center">
          <LineChart />
          <AppTable />
        </section>
        <section className="right">
          <PieChart />
        </section>
      </div>
    </>
  );
}

export default Dashboard;
