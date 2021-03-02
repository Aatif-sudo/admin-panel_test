import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/DashboardComponents/Dashboard";
import AdvertiseUpload from "../Pages/Advertisement/AdvertiseUpload";
import Profile from "../Pages/Profile/Profile";
import AppTable from "../Components/Tables/AppTable";

// function Routes() {
//   return (
//     <div>
//       <Switch>
//         <Route path="/dashboard">
//           <Dashboard />
//         </Route>
//         <Route exact path="/" component={Login} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/advertise">
//           <Dashboard>
//             <AdvertiseUpload />
//           </Dashboard>
//         </Route>
//         <Route path="/table">
//           <Dashboard>
//             <AppTable />
//           </Dashboard>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

const adminRoute = [
  {
    name: "Dashboard",
    path: "/dashboard",
    Component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Advertisement",
    path: "/advertise",
    Component: AdvertiseUpload,
    layout: "/admin",
  },
  {
    name: "Profile",
    path: "/profile",
    Component: Profile,
    layout: "/admin",
  },
];

const secureRoute = [
  {
    name: "Login",
    path: "/",
    Component: Login,
  },
  {
    name: "Sign Up",
    path: "/signup",
    Component: Signup,
  },
];

export { adminRoute, secureRoute };
