import "./App.scss";
import { secureRoute } from "./Routes/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Layout/Admin";
import Advertisement from "./Pages/Advertisement/Advertisement";
import AdminProfile from "./Pages/Profile/AdminProfile";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        {secureRoute?.map(({ path, Component }) => {
          if (path === "/") {
            return <Route path={path} component={Component} exact />;
          } else {
            return <Route path={path} component={Component} />;
          }
        })}
        <Route path="/admin" component={Admin} />
      </Switch> */}

      <Advertisement />
      {/* <Profile /> */}
      {/* <AdminProfile /> */}
      {/* <Advertise /> */}
    </div>
  );
}

export default App;
