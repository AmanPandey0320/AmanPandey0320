import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  account: {
    "&-modal": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "2px 2px 4px grey",
    },
    "&-image": {
      opacity: 1,
      display: "block",
      width: 192,
      height: 192,
      borderRadius: 96,
      border: "2px solid #2196f3",
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
      "&-skill-img": {
        width: "32px",
        height: "32px",
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
  errText: {
    fontSize: 12,
    color: "red",
  },
  experience: {
    "&-card": {
      padding: "8px 16px",
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.02)",
        cursor: "pointer",
        transition: "all 0.2s ease",
      },
    },
    "&-text-sm": {
      fontSize: 12,
      color: "grey",
    },
    "&-text-md": {
      fontSize: 14,
      color: "grey",
    },
    "&-box-jc-sp": {
      display: "flex",
      justifyContent: "space-between",
      paddingInline: "4px",
    },
    "&-box-jc-r": {
      display: "flex",
      justifyContent: "right",
      paddingInline: "4px",
    },
  },
}));

export default useStyles;
