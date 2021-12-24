import { alpha, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    overflowY: "scroll",
  },
}));

export const MainAppBar = styled(AppBar)({
  backgroundColor: alpha("#000", 0.2),
  boxShadow: "none",
});

export default useStyles;
