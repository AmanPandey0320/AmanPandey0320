import {
  Box,
  Grid,
  Icon,
  Typography,
  TextField,
  Button,
  Tooltip,
  IconButton,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import userImg from "../../../../assets/images/profile.png";
import CircularLoader from "../../../shared/circleLoder";
import {
  fetchAboutMe,
  saveAboutMe,
  uploadProfileImage,
  uploadSkillIcon,
} from "./logic";
import { AboutMeValidatonSchema } from "./schema";
import useStyles from "./style";
import { Upload } from "@mui/icons-material";
import { MdContentPaste } from "react-icons/md";
import { useFormik } from "formik";
import Portal from "../../../shared/portal";
import { useToasts } from "react-toast-notifications";

/**
 *
 * @returns
 */
const AboutMe = () => {
  const classes = useStyles();
  const imgRef = useRef();
  const iconRef = useRef([]);
  const { addToast } = useToasts();
  const [open, setOpen] = useState(0);
  const { uploading } = useSelector((state) => state.util.data);
  const formik = useFormik({
    initialValues: {
      name: undefined,
      about: undefined,
      image: undefined,
      skill: [],
    },
    validationSchema: AboutMeValidatonSchema,
    onSubmit: (value) => {
      const { image, about, name, skill } = value;
      saveAboutMe({ image, about, name, skill }, addToast);
    },
  });

  /**METHOD */

  /**
   *
   * @param {*} e
   */
  const handleClose = (e) => {
    setOpen(0);
  };
  /**
   *
   * @param {} e
   */
  const openModal = (idx) => (e) => {
    setOpen(idx + 1);
  };
  const addNewSkillHandler = (e) => {
    const oldSkills = formik.values.skill;
    const newSkills = [...oldSkills, { text: "New Skill", icon: undefined }];
    formik.setFieldValue("skill", newSkills);
  };

  /**EFFECTS */
  useEffect(() => {
    fetchAboutMe(formik);
    // eslint-disable-next-line
  }, []);

  // console.log(formik.values.skill);

  return (
    <>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid direction="row" spacing={1} container>
            <Grid xs={2} item>
              <Box>
                <Grid direction="column" spacing={2} container>
                  <Grid item>
                    <div className={`${classes.account}-image-container`}>
                      <input
                        ref={imgRef}
                        type="file"
                        name="file"
                        accept="image/png image/jpeg"
                        onChange={uploadProfileImage(formik)}
                        hidden
                      />
                      <img
                        className={`${classes.account}-image`}
                        src={
                          formik.values.image ? formik.values.image : userImg
                        }
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
                    <Grid
                      container
                      justifyContent="space-between"
                      direction="row"
                    >
                      <Grid xs={12} item>
                        <TextField
                          label="Name"
                          variant="outlined"
                          value={formik.values.name ? formik.values.name : ""}
                          onChange={formik.handleChange}
                          error={formik.errors.name?.length > 0}
                          helperText={formik.errors.name}
                          name="name"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid xs={7} item>
              <TextField
                name="about"
                value={formik.values.about ? formik.values.about : ""}
                onChange={formik.handleChange}
                error={formik.errors.about?.length > 0}
                helperText={formik.errors.about}
                label="About"
                rows={16}
                multiline
                fullWidth
              />
              <br />
              <Typography>
                <small>
                  Use <span style={{ color: "tomato" }}>{"<br/>"}</span> break
                  lines
                </small>
              </Typography>
              <br />
              <br />
              <Grid container direction="row" justifyContent="space-around">
                <Grid xs={3} item>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={3} item>
              <Grid container spacing={1} direction="column">
                {formik.values.skill?.map((skill, idx) => (
                  <Grid key={idx} item>
                    <Grid
                      container
                      justifyContent="space-between"
                      direction="row"
                    >
                      <Grid xs={6} item>
                        <TextField
                          name={`skill[${idx}].text`}
                          value={formik.values.skill[idx].text}
                          onChange={formik.handleChange}
                          label="Skill"
                          fullWidth
                          error={
                            formik?.errors?.skill &&
                            formik?.errors?.skill[idx]?.text?.length > 0
                          }
                        />
                      </Grid>

                      <Grid item>
                        <input
                          ref={(e) => (iconRef.current[idx] = e)}
                          type="file"
                          name="file"
                          accept="image/png image/jpeg"
                          onChange={uploadSkillIcon(formik, idx)}
                          hidden
                        />
                        <img
                          width={50}
                          height={50}
                          src={
                            formik.values.skill[idx].icon
                              ? formik.values.skill[idx].icon
                              : userImg
                          }
                          alt={formik.values.skill[idx].text}
                        />
                      </Grid>
                      <Grid item>
                        <Tooltip title="Paste icon url">
                          <IconButton
                            onClick={openModal(idx)}
                            variant="outlined"
                          >
                            <Icon color="primary">
                              <MdContentPaste />
                            </Icon>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title="Upload skill icon">
                          <IconButton
                            onClick={(e) => iconRef.current[idx].click()}
                            variant="outlined"
                          >
                            <Icon color="primary">
                              <Upload />
                            </Icon>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    {formik?.errors?.skill &&
                      formik?.errors?.skill[idx]?.text?.length > 0 && (
                        <span className={classes.errText}>
                          {formik?.errors?.skill[idx]?.text}.&nbsp;
                        </span>
                      )}
                    {formik?.errors?.skill &&
                      formik?.errors?.skill[idx]?.icon?.length > 0 && (
                        <span className={classes.errText}>
                          {formik?.errors?.skill[idx]?.icon}.&nbsp;
                        </span>
                      )}
                  </Grid>
                ))}
                <Grid item>
                  <Button
                    onClick={addNewSkillHandler}
                    fullWidth
                    variant="contained"
                    color="info"
                  >
                    {"+ Add skill"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Portal eid="portal-root">
        <Modal
          open={Boolean(open)}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={Boolean(open)}>
            <Box className={`${classes.account}-modal`}>
              <Typography> Skill Icon URL </Typography>
              <br />
              <TextField
                name={`skill[${open - 1}].icon`}
                value={
                  formik.values.skill[open - 1]?.icon
                    ? formik.values.skill[open - 1]?.icon
                    : ""
                }
                onChange={formik.handleChange}
                fullWidth
                placeholder="Paste here"
              />
              <br />
              <Grid container direction="row-reverse">
                <Grid item>
                  <Button variant="text" onClick={handleClose} color="primary">
                    Done
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      </Portal>
    </>
  );
};

export default AboutMe;
