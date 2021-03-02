import React from "react";
import { Route, Redirect } from "react-router-dom";

// const user = JSON.parse(sessionStorage.getItem("user"));
// console.log(user, "user");
let user = true;
const ProtectedRoute = ({ path, component: Component }) => (
  <Route
    path={path}
    render={(props) => (user ? <Component {...props} /> : <Redirect to="/" />)}
  />
);
export default ProtectedRoute;
