import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard";
import Login from "../../pages/admin/login";
const Admin = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Admin;
