import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
  Avatar,
  Modal,
  Fade,
  Backdrop,
  Skeleton,
  Card,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useFormik } from "formik";
import { ExperienceSchema } from "./schema";
import { useToasts } from "react-toast-notifications";
import { Upload, Delete, ContentPaste } from "@mui/icons-material";
import userImg from "../../../../assets/images/profile.png";
import useStyles from "./style";
import { useEffect, useRef, useState } from "react";
import {
  deleteExperience,
  editExperience,
  fetchAllExperiences,
  saveExperience,
  uploadTechIcon,
} from "./logic";
import Portal from "../../../shared/portal";

/**
 *
 * @returns
 */
const Experience = () => {
  const classes = useStyles();
  const iconRef = useRef([]);
  const toast = useToasts();
  const [open, setOpen] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [experience, setExperience] = useState([]);
  const [saveBtn, setSaveBtn] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: undefined,
      org: "",
      from: "",
      present: false,
      to: "",
      role: "",
      contri: [],
      tech: [],
    },
    validationSchema: ExperienceSchema,
    onSubmit: (value) => {
      setSaveBtn(true);
      saveExperience(value)
        .then(({ saved, id }) => {
          if (saved) {
            toast.addToast("Saved", { appearance: "success" });
            formik.setValues({
              id: undefined,
              org: "",
              from: "",
              present: false,
              to: "",
              role: "",
              contri: [],
              tech: [],
            });
            setRefresh((prev) => prev + 1);
          } else {
            toast.addToast("Unable to save", { appearance: "error" });
          }
          setSaveBtn(false);
        })
        .catch((err) => {
          toast.addToast(err.message ? err.message : "Some error occured", {
            appearance: "error",
          });
          setSaveBtn(false);
        });
    },
  });

  /**EFFECTS */
  useEffect(() => {
    fetchAllExperiences(setExperience);
  }, [refresh]);

  console.log(experience);
  /**Methods */

  /**
   *
   * @param {*} e
   * @returns
   */
  const addContribution = (e) => {
    const oldContri = formik.values.contri;
    if (oldContri?.length >= 4) {
      toast.addToast("Not more than four contribution allowed", {
        appearance: "warning",
      });
      return;
    }
    const newContri = [...oldContri, ""];
    formik.setFieldValue("contri", newContri);
  };
  /**
   *
   * @param {*} idx
   * @returns
   */
  const deleteContribution = (idx) => (e) => {
    const oldContri = formik.values.contri?.filter((val, i) => i !== idx);
    formik.setFieldValue("contri", oldContri);
  };

  /**
   *
   * @param {*} e
   */
  const addtechStack = (e) => {
    const oldTech = formik.values.tech;
    const newTech = [...oldTech, { text: "", icon: "" }];
    formik.setFieldValue("tech", newTech);
  };

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
  /**view */
  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid xs={7} item>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <TextField
                      name="org"
                      value={formik.values.org ? formik.values.org : ""}
                      onChange={formik.handleChange}
                      label="Organization/Company"
                      error={formik.errors.org?.length > 0}
                      helperText={formik.errors.org}
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} direction="row">
                      <Grid xs={3} item>
                        <TextField
                          name="role"
                          value={formik.values.role ? formik.values.role : ""}
                          onChange={formik.handleChange}
                          error={formik.errors.role?.length > 0}
                          helperText={formik.errors.role}
                          label="Role"
                          fullWidth
                        />
                      </Grid>
                      <Grid xs={3} item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="From"
                            name="from"
                            value={formik.values.from}
                            onChange={(val) => {
                              formik.setFieldValue("from", val);
                            }}
                            renderInput={(params) => (
                              <TextField error={formik.errors.to} {...params} />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                      {formik.values.present === false && (
                        <Grid xs={3} item>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="To"
                              name="to"
                              value={formik.values.to}
                              onChange={(val) => {
                                formik.setFieldValue("to", val);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                      )}
                      <Grid item>
                        <FormControlLabel
                          label="Present"
                          checked={formik.values.present}
                          onChange={formik.handleChange}
                          name="present"
                          labelPlacement="end"
                          control={<Checkbox />}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2} direction="row">
                  <Grid xs={7} item>
                    <Grid container spacing={1} direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          fontFamily="Segoe UI"
                          color="primary"
                        >
                          Contribution
                        </Typography>
                      </Grid>
                      {formik.values.contri?.map((ctr, i) => (
                        <Grid key={i} item>
                          <Grid
                            container
                            justifyContent="space-between"
                            direction="row"
                          >
                            <Grid xs={10} item>
                              <TextField
                                name={`contri[${i}]`}
                                value={ctr}
                                onChange={formik.handleChange}
                                fullWidth
                              />
                            </Grid>
                            <Grid item>
                              <IconButton
                                onClick={deleteContribution(i)}
                                color="error"
                              >
                                <Delete />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                      <Grid item>
                        <Button
                          variant="outlined"
                          onClick={addContribution}
                          color="primary"
                          fullWidth
                        >
                          {" "}
                          + Add contribution
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={5} item>
                    <Grid container spacing={1} direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          fontFamily="Segoe UI"
                          color="primary"
                        >
                          Tech-Stack
                        </Typography>
                      </Grid>
                      {formik.values.tech?.map((ts, i) => (
                        <Grid key={i} item>
                          <input
                            ref={(e) => {
                              iconRef.current[i] = e;
                            }}
                            type="file"
                            name="file"
                            accept="image/png image/jpeg"
                            onChange={uploadTechIcon(formik, i)}
                            hidden
                          />
                          <Grid
                            container
                            justifyContent="space-between"
                            direction="row"
                          >
                            <Grid xs={5} item>
                              <TextField
                                label="Name"
                                name={`tech[${i}].text`}
                                value={ts.text}
                                onChange={formik.handleChange}
                                fullWidth
                              />
                            </Grid>
                            <Grid item>
                              <Avatar
                                sx={{ width: 50, height: 50 }}
                                alt="tech"
                                variant="rounded"
                                src={ts?.icon ? ts.icon : userImg}
                              />
                            </Grid>
                            <Grid item>
                              <IconButton
                                size="small"
                                onClick={(e) => iconRef.current[i].click()}
                                color="primary"
                              >
                                <Upload />
                              </IconButton>
                            </Grid>
                            <Grid item>
                              <IconButton
                                onClick={openModal(i)}
                                size="small"
                                color="secondary"
                              >
                                <ContentPaste />
                              </IconButton>
                            </Grid>
                            <Grid item>
                              <IconButton size="small" color="error">
                                <Delete />
                              </IconButton>
                            </Grid>
                          </Grid>
                          {formik?.errors?.tech &&
                            formik?.errors?.tech[i]?.text?.length > 0 && (
                              <span className={classes.errText}>
                                {formik?.errors?.tech[i]?.text}.&nbsp;
                              </span>
                            )}
                          {formik?.errors?.tech &&
                            formik?.errors?.tech[i]?.icon?.length > 0 && (
                              <span className={classes.errText}>
                                {formik?.errors?.tech[i]?.icon}.&nbsp;
                              </span>
                            )}
                        </Grid>
                      ))}
                      <Grid item>
                        <Button
                          variant="outlined"
                          onClick={addtechStack}
                          color="primary"
                          fullWidth
                        >
                          {" "}
                          + Add tech-stack
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    disabled={saveBtn}
                    color="success"
                    type="submit"
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
          <Grid xs={4} item>
            <Grid container direction="column" spacing={1}>
              {experience.length > 0 ? (
                <>
                  {experience?.map((item, i) => {
                    return (
                      <Grid key={item.id} item>
                        <Card className={`${classes.experience}-card`}>
                          <Typography>{item.org}</Typography>
                          <Box className={`${classes.experience}-box-jc-sp`}>
                            <span className={`${classes.experience}-text-md`}>
                              {item.role}
                            </span>
                            <span className={`${classes.experience}-text-sm`}>
                              {item.kfrom}-{item.kto}
                            </span>
                          </Box>
                          <Box className={`${classes.experience}-box-jc-r`}>
                            <Button
                              size="small"
                              color="secondary"
                              variant="outlined"
                              onClick={editExperience(i, experience, formik)}
                            >
                              Edit
                            </Button>
                            <span>&nbsp;</span>
                            <Button
                              size="small"
                              color="error"
                              variant="outlined"
                              onClick={deleteExperience(
                                i,
                                experience,
                                setExperience,
                                toast.addToast
                              )}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Card>
                      </Grid>
                    );
                  })}
                </>
              ) : (
                <>
                  <Skeleton
                    width="128px"
                    variant="rectangular"
                    animation="wave"
                  />
                  <br />
                  <Skeleton
                    width="150px"
                    variant="rectangular"
                    animation="wave"
                  />
                  <br />
                  <Skeleton
                    width="250px"
                    variant="rectangular"
                    animation="wave"
                  />
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
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
              <Typography> Tech Icon URL </Typography>
              <br />
              <TextField
                name={`tech[${open - 1}].icon`}
                value={
                  formik.values.tech[open - 1]?.icon
                    ? formik.values.tech[open - 1]?.icon
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

export default Experience;
