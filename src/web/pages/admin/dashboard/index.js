import {
  AppBar,
  CssBaseline,
  Drawer,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../../lib/utils/firebase";
import Loader from "../../../shared/loading";
import DrawerList, { drawerList } from "./_drawerItem";
import { useSelector } from "react-redux";
/**
 *
 */
const Dashboard = () => {
  const drawerWidth = 256;
  const { drawer } = useSelector((state) => state.util.data);
  const history = useHistory();
  const [user, setUser] = useState(0);

  /**EFFECTS */
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        history.replace("/login");
      }
    });
  }, [history]);

  /**VIEWS */

  /**
   * loader view
   */
  if (user === 0) {
    return <Loader />;
  }

  /**
   * main view
   */
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        position="fixed"
      >
        <Toolbar>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item>
              <Typography variant="h6">{drawerList[drawer]?.text}</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerList />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Dashboard;
