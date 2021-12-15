import { Box, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import userImg from "../../../../assets/images/profile.png";
import { auth } from "../../../../lib/utils/firebase";
import { uploadProfileImage } from "./logic";
import useStyles from "./style";

const Account = () => {
  const classes = useStyles();
  const imgRef = useRef();
  const user = auth.currentUser;
  return (
    <Box>
      <Grid direction="row" container>
        <Grid item>
          <Box>
            <Grid direction="column" spacing={1} container>
              <Grid item>
                <div className={`${classes.account}-image-container`}>
                  <input
                    ref={imgRef}
                    type="file"
                    name="file"
                    accept="image/png image/jpeg image/jpg"
                    onChange={uploadProfileImage}
                    hidden
                  />
                  <img
                    className={`${classes.account}-image`}
                    src={user?.photoURL ? user.photoURL : userImg}
                    alt="user"
                  />
                  <div
                    onClick={(e) => imgRef.current.click()}
                    className={`${classes.account}-image-text`}
                  >
                    Click to change image
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Typography component="p" align="center" variant="h6">
                  User name
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Account;
