import { Toolbar, Grid, IconButton, Tooltip } from "@mui/material";
import { MainAppBar } from "./styles";
import { RiAdminFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const adminKey = process.env.REACT_APP_ADMIN_KEY;

/**
 *
 * @returns
 */
const NavigationBar = () => {
  const history = useHistory();
  const handleAdminBtnClick = (e) => {
    window.localStorage.setItem("role", adminKey);
    history.push("/");
    window.location.reload();
  };
  return (
    <MainAppBar>
      <Grid container justifyContent="space-between" direction="row">
        <Grid item></Grid>
        <Grid item>
          <Toolbar>
            <Tooltip title="Admin">
              <IconButton onClick={handleAdminBtnClick}>
                <RiAdminFill color="white" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Grid>
      </Grid>
    </MainAppBar>
  );
};

export default NavigationBar;
