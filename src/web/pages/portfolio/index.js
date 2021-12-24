import { CssBaseline } from "@mui/material";
import Canvas from "../../shared/canvas";
import useStyles from "./styles";
import NavigationBar from "./_appbar";

const Portfolio = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Canvas />
      <div className={classes.root}>
        <CssBaseline />
        <NavigationBar />
      </div>
    </div>
  );
};

export default Portfolio;
