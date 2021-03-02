import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import DashboardComponents from "../Pages/Dashboard/DashboardComponents/Dashboard";
import AppTable from "../Components/Tables/AppTable";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoute } from "../Routes/Routes";
// import "./Dashboard.scss";
import AdvertiseUpload from "../Pages/Advertisement/AdvertiseUpload";
import ProtectedRoute from "../Routes/ProtectedRoute";

function Admin() {
  console.log(adminRoute, "Admin route");
  return (
    <div className="main_container">
      <Navbar />
      <Switch>
        {adminRoute.map(({ path, Component, layout }) => {
          return <ProtectedRoute path={layout + path} component={Component} />;
        })}
      </Switch>
      <Redirect from="/admin" to="/admin/dashboard" />
    </div>
  );
  // const user = JSON.parse(sessionStorage.getItem("user"));
  // const googleuser = JSON.parse(sessionStorage.getItem("googleuser"));
  // if (user) {
  // } else {
  //   window.location.href = "/";
  //   alert("login first");
  // }
}

export default Admin;
