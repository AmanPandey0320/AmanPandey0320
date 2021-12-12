import { Grid, useMediaQuery } from "@mui/material";
import Lottie from "react-lottie";
import config from "../../../lib/config/lottie_config.json";
import useStyles from "./styles";

const Loader = () => {
  const classse = useStyles();
  const isMobile = useMediaQuery("(max-width:500px)");
  const isSmallMobile = useMediaQuery("(max-width:350px)");
  const isBigMobile = useMediaQuery("(max-width:800px)");
  /**
   * lottie config
   */

  const aninationOption = {
    loop: true,
    autoplay: true,
    animationData: config,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classse.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        justifySelf="center"
      >
        <Grid item>
          <Lottie
            options={aninationOption}
            width={
              isMobile
                ? isSmallMobile
                  ? "75vw"
                  : "75vw"
                : isBigMobile
                ? "60vw"
                : "45vw"
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Loader;
