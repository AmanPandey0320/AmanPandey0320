import React, { Fragment, Suspense, useEffect } from "react";
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
        <AppRouter role={role} />
      </Suspense>
    </Fragment>
  );
}

export default App;
