import {
  AppBar,
  CssBaseline,
  Drawer,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../../lib/utils/firebase";
import Loader from "../../../shared/loading";
import DrawerList, { drawerList } from "./_drawerItem";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { utilAction } from "../../../../lib/store/util";
import Education from "./_education";
import AboutMe from "./_aboutMe";
import Experience from "./_experience";
import { RiUser2Fill } from "react-icons/ri";
import Project from "./_project";

const clientKey = process.env.REACT_APP_CLIENT_KEY;

/**
 *
 */
const Dashboard = () => {
  const drawerWidth = 256;
  const history = useHistory();
  const [user, setUser] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);

  /**EFFECTS */
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const value = authUser.uid;
        const key = "uid";
        dispatch(utilAction.setKeyValue({ key, value }));
        setUser(authUser);
      } else {
        history.replace("/login");
      }
    });
  }, [history, dispatch]);

  const handlePOrtfolioBtnClick = (e) => {
    window.localStorage.setItem("role", clientKey);
    history.push("/");
    window.location.reload();
  };

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
              <Typography variant="h6">
                {drawerList[+query.get("open")]?.text}
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Portfolio">
                <IconButton onClick={handlePOrtfolioBtnClick}>
                  <RiUser2Fill color="white" />
                </IconButton>
              </Tooltip>
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {query.get("open") === "0" && <Education />}
        {query.get("open") === "1" && <AboutMe />}
        {query.get("open") === "2" && <Experience />}
        {query.get("open") === "3" && <Project />}
      </Box>
    </Box>
  );
};

export default Dashboard;
