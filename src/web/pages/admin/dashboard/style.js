import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  account: {
    "&-image": {
      opacity: 1,
      display: "block",
      width: 192,
      height: 192,
      borderRadius: 96,
      transition: ".3s ease",
      backfaceVisibility: "hidden",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.4,
      },
      "&-container": {
        position: "relative",
        height: 192,
        width: 192,
        borderRadius: 96,
      },
      "&-uploading": {
        backgroundColor: alpha("#000000", 0.4),
        color: "#fff",
        textAlign: "center",
        height: 192,
        width: 192,
        borderRadius: 96,
        paddingTop: 90,
        transition: ".3s ease",
        opacity: 1,
        position: "absolute",
        top: "0%",
        left: "0%",
        transform: "translate(-50%, -50%)",
        "-ms-transform": "translate(-50%, -50%)",
        "&:hover": {
          cursor: "pointer",
        },
      },
      "&-text": {
        backgroundColor: alpha("#000000", 0.4),
        color: "#fff",
        textAlign: "center",
        height: 192,
        width: 192,
        borderRadius: 96,
        paddingTop: 75,
        paddingInline: 32,
        transition: ".3s ease",
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "-ms-transform": "translate(-50%, -50%)",
        "&:hover": {
          cursor: "pointer",
          opacity: 1,
        },
      },
    },
  },
  education: {
    "&-text-gl": {
      paddingTop: "16px",
      paddingBottom: "16px",
      fontSize: "18px",
      fontWeight: 500,
      color: "black",
    },
    "&-edu": {
      padding: "16px",
      transition: "all 0.5s",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: alpha("#000", 0.05),
        transition: "all 0.5s",
      },
    },
  },
}));

export default useStyles;