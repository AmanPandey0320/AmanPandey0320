import React, { Fragment, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../lib/store";
import { getRole } from "../lib/utils/util";
import Loader from "./shared/loading";
const AppRouter = React.lazy(() => import("./routes"));
function App() {
  const [role, setRole] = React.useState(undefined);
  useEffect(() => {
    const newRole = getRole();
    setRole(newRole);
  }, []);
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <AppRouter role={role} />
        </Provider>
      </Suspense>
    </Fragment>
  );
}

export default App;
