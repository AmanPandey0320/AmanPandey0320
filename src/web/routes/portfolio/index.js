import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "../../pages/portfolio";

const PortfolioRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </Router>
  );
};

export default PortfolioRouter;
