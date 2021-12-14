import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard";
import Login from "../../pages/admin/login";
import { ToastProvider } from "react-toast-notifications";
const Admin = () => {
  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={5000}
      placement="bottom-right"
    >
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/" component={Dashboard} />
        </Switch>
      </Router>
    </ToastProvider>
  );
};

export default Admin;
