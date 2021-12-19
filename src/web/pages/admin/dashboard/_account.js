import { Box, Grid, Icon, Typography, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import userImg from "../../../../assets/images/profile.png";
import { auth } from "../../../../lib/utils/firebase";
import CircularLoader from "../../../shared/circleLoder";
import { uploadProfileImage } from "./logic";
import useStyles from "./style";
import { Edit } from "@mui/icons-material";

const Account = () => {
  const classes = useStyles();
  const imgRef = useRef();
  const [, setImgUrl] = useState(0);
  const user = auth.currentUser;
  const { uploading } = useSelector((state) => state.util.data);
  return (
    <Box>
      <Grid direction="row" container>
        <Grid item>
          <Box>
            <Grid direction="column" spacing={2} container>
              <Grid item>
                <div className={`${classes.account}-image-container`}>
                  <input
                    ref={imgRef}
                    type="file"
                    name="file"
                    accept="image/png image/jpeg image/jpg"
                    onChange={uploadProfileImage(setImgUrl)}
                    hidden
                  />
                  <img
                    className={`${classes.account}-image`}
                    src={user?.photoURL ? user.photoURL : userImg}
                    alt="user"
                  />
                  {uploading ? (
                    <CircularLoader
                      className={`${classes.account}-image-uploading`}
                    ></CircularLoader>
                  ) : (
                    <div
                      onClick={(e) => imgRef.current.click()}
                      className={`${classes.account}-image-text`}
                    >
                      Click to change image
                    </div>
                  )}
                </div>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between" direction="row">
                  <Grid item>
                    <Typography component="p">
                      User name
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton size="small">
                      <Icon color="primary">
                        <Edit />
                      </Icon>
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Account;
