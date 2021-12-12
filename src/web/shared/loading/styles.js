import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    width: "100vw",
    overflowX: "hidden",
    position: "absolute",
    top: "50%",
    "-ms-transform": "translateY(-50%)",
    transform: "translateY(-50%)",
  },
}));

export default useStyles;
