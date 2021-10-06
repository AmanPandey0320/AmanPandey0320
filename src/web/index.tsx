import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";

const App = (props: any) => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          if (route.redirect) {
            return (
              <Route exact={route.exact} path={route.path}>
                <Redirect
                  to={`${route.to}`}
                  exact={route.exact}
                  path={route.to}
                />
              </Route>
            );
          } else {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          }
        })}
      </Switch>
    </Router>
  );
};

export default App;
