import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider,
  Avatar,
  IconButton,
  Button,
  Modal,
  Fade,
  Backdrop,
  Skeleton,
  Card,
} from "@mui/material";
import { Upload, Delete, ContentPaste } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useFormik } from "formik";
import { projectSchema } from "./schema";
import { useEffect, useRef, useState } from "react";
import {
  deleteProject,
  editProject,
  fetchAllProjects,
  saveProject,
  uploadProjectApp,
  uploadTechIcon,
} from "./logic";
import Portal from "../../../shared/portal";
import useStyles from "./style";
import { useToasts } from "react-toast-notifications";

/**
 *
 * @param {*} props
 * @returns
 */
const Project = (props) => {
  /**
   *
   */
  const iconRef = useRef([]);
  const appRef = useRef();
  const isMounted = useRef(false);
  const [open, setOpen] = useState(0);
  const classes = useStyles();
  const [project, setProjects] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [saving, setSaving] = useState(false);
  const toast = useToasts();

  /**
   *
   */
  const formik = useFormik({
    initialValues: {
      id: null,
      name: "",
      desc: "",
      repo: "",
      link: "",
      from: "",
      to: "",
      present: false,
      tech: [],
    },
    initialTouched: {
      name: false,
      desc: false,
      repo: false,
      link: false,
      from: false,
      to: false,
      present: false,
    },
    validationSchema: projectSchema,
    onSubmit: (vals) => {
      setSaving(true);
      saveProject(vals)
        .then((res) => {
          setRefresh((prev) => prev + 1);
          toast.addToast("Project saved!", {
            appearance: "success",
          });
        })
        .catch((err) => {
          toast.addToast(err.message ? err.message : "Some error occured", {
            appearance: "error",
          });
        })
        .finally(() => {
          if (isMounted.current) {
            setSaving(false);
          }
        });
    },
  });
  /**
   *
   * @param {*} e
   * @returns
   */
  const handleTouched = (e) => {
    const name = e.target.name;
    if (name === undefined) {
      return;
    } else if (formik.touched[name] === true) {
      return;
    }
    formik.setFieldTouched(name, true);
    return;
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
   * Effects
   */
  useEffect(() => {
    fetchAllProjects(setProjects);
  }, [refresh]);

  useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
    }

    return () => {
      isMounted.current = false;
    };
  }, []);
  /**
   *
   */
  return (
    <>
      <Box>
        <Grid container justifyContent="space-between" direction="row">
          <Grid md={7} item>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <TextField
                  fullWidth
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  variant="standard"
                  label="Project name"
                  onBlur={handleTouched}
                  error={formik.touched.name && formik.errors.name?.length > 0}
                  helperText={
                    formik.touched.name ? formik.errors.name : undefined
                  }
                />
                <TextField
                  sx={{ marginTop: "16px" }}
                  multiline
                  rows={3}
                  fullWidth
                  name="desc"
                  variant="outlined"
                  label="Description"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  onBlur={handleTouched}
                  error={formik.touched.desc && formik.errors.desc?.length > 0}
                  helperText={
                    formik.touched.desc ? formik.errors.desc : undefined
                  }
                />
                <Grid
                  sx={{ marginTop: "8px" }}
                  container
                  spacing={2}
                  direction="row"
                >
                  <Grid md={6} item>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaGithub />
                            &nbsp;
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      variant="outlined"
                      label="Repo link"
                      name="repo"
                      value={formik.values.repo}
                      onChange={formik.handleChange}
                      onBlur={handleTouched}
                      error={
                        formik.touched.repo && formik.errors.repo?.length > 0
                      }
                      helperText={
                        formik.touched.repo ? formik.errors.repo : undefined
                      }
                    />
                    <input
                      type="file"
                      onChange={uploadProjectApp(formik, toast.addToast)}
                      ref={(e) => (appRef.current = e)}
                      hidden
                    />
                    <TextField
                      fullWidth
                      sx={{ marginTop: "12px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BiLink />
                            &nbsp;
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={e => appRef.current.click() } size="small">
                              <Upload />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      label="Project link"
                      name="link"
                      value={formik.values.link}
                      onChange={formik.handleChange}
                      onBlur={handleTouched}
                      error={
                        formik.touched.link && formik.errors.link?.length > 0
                      }
                      helperText={
                        formik.touched.link ? formik.errors.link : undefined
                      }
                    />
                    <div style={{ marginTop: "16px" }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="From"
                          name="from"
                          value={formik.values.from}
                          onChange={(val) => {
                            formik.setFieldValue("from", val);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {formik.values.present === false ? (
                          <DatePicker
                            label="To"
                            name="to"
                            value={formik.values.to}
                            onChange={(val) => {
                              formik.setFieldValue("to", val);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                style={{ marginTop: "8px" }}
                              />
                            )}
                          />
                        ) : null}
                      </LocalizationProvider>
                    </div>
                    <FormControlLabel
                      checked={formik.values.present}
                      onChange={formik.handleChange}
                      name="present"
                      labelPlacement="end"
                      control={<Checkbox />}
                      label="Present"
                    />
                  </Grid>
                  <Grid md={6} item>
                    <Box>
                      <Typography variant="h6" color="primary">
                        <BsStack />
                        &nbsp; Tech-Stack
                      </Typography>
                      <Divider />
                      <br />
                      <Grid container spacing={1} direction="column">
                        {formik.values.tech?.map((ts, i) => (
                          <Grid key={`tech-proj-${i}`} item>
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
                                  src={ts?.icon ? ts.icon : "</>"}
                                />
                              </Grid>
                              <Grid item>
                                <IconButton
                                  onClick={(e) => iconRef.current[i].click()}
                                  size="small"
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
                            fullWidth
                            onClick={addtechStack}
                            color="primary"
                            variant="contained"
                          >
                            + Add new
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <br />
                <Grid container direction="row" justifyContent="center">
                  <Grid md={4} item>
                    <Button
                      disabled={saving}
                      type="submit"
                      fullWidth
                      variant="outlined"
                      color="success"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
          <Grid md={4} item>
            <Grid container direction="column" spacing={1}>
              {project.length > 0 ? (
                <>
                  {project?.map((item, i) => {
                    return (
                      <Grid key={item.id} item>
                        <Card className={`${classes.experience}-card`}>
                          <Typography>{item.name}</Typography>
                          <Box className={`${classes.experience}-box-jc-sp`}>
                            <span className={`${classes.experience}-text-sm`}>
                              {item.kfrom}-{item.kto}
                            </span>
                          </Box>
                          <Box className={`${classes.experience}-box-jc-r`}>
                            <Button
                              size="small"
                              color="secondary"
                              variant="outlined"
                              onClick={editProject(i, project, formik)}
                            >
                              Edit
                            </Button>
                            <span>&nbsp;</span>
                            <Button
                              size="small"
                              color="error"
                              variant="outlined"
                              onClick={deleteProject(
                                i,
                                project,
                                setProjects,
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

export default Project;
