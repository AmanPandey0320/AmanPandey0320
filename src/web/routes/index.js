import Loader from "../shared/loading";
import Admin from "./admin";
import Portfolio from "./portfolio";

const AppRouter = ({ role, ...props }) => {
  if (role === "admin") {
    return <Admin />;
  }
  if (role === "client") {
    return <Portfolio />;
  }
  return <Loader />;
};

export default AppRouter;
