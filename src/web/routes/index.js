import Loader from "../shared/loading";
import Admin from "./admin";
import Portfolio from "./portfolio";

const adminKey = process.env.REACT_APP_ADMIN_KEY;
const clientKey = process.env.REACT_APP_CLIENT_KEY;

const AppRouter = ({ role, ...props }) => {
  if (role === adminKey) {
    return <Admin />;
  }
  if (role === clientKey) {
    return <Portfolio />;
  }
  return <Loader />;
};

export default AppRouter;
