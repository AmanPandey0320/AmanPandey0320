import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import useStyles from "./style";
import { useFormik } from "formik";
import { EducationValidationSchema } from "./logic";
import { db } from "../../../../lib/utils/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { v4 } from "uuid";
import { useToasts } from "react-toast-notifications";

/**
 *
 * @param {*} props
 * @returns
 */
const Education = (props) => {
  const classes = useStyles();
  const [save, setSave] = useState(false);
  const [refreshCnt, setRefreshCnt] = useState(0);
  const [edus, setEdus] = useState([]);
  const [focusId, setFocusId] = useState(undefined);
  const toast = useToasts();

  /**
   *
   */
  useEffect(() => {
    const ref = collection(db, "education");
    const q = query(ref, orderBy("from", "desc"));
    let docs = [];
    getDocs(q)
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          const data = snapshot.data();
          const from = new Date(data.from.seconds * 1000);
          data.kfrom = `${from.getMonth() + 1}/${from.getFullYear()}`;
          if (data.to) {
            const to = new Date(data.to.seconds * 1000);
            data.kto = `${to.getMonth() + 1}/${to.getFullYear()}`;
          }
          if (data.present === true) {
            data.kto = "Present";
          }
          if (data.cgpa) {
            data.kresult = `CGPA - ${data.result}`;
          } else {
            data.kresult = `Result - ${data.result}%`;
          }
          docs.push({ id: snapshot.id, ...data });
        });
        console.log(docs);
        setEdus([...docs]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshCnt]);

  /**
   * @description form state management
   */
  const formik = useFormik({
    initialValues: {
      course: "",
      institute: "",
      from: "",
      to: "",
      result: "",
      present: false,
      cgpa: false,
    },
    validationSchema: EducationValidationSchema,
    onSubmit: (val) => {
      console.log("clicked");
      setSave(true);
      const id = focusId ? focusId : `${v4()}-${Date.now()}`;
      const docRef = doc(db, "education", id);
      setDoc(docRef, val)
        .then((snapshot) => {
          formik.setFieldValue("course", "");
          formik.setFieldValue("institute", "");
          formik.setFieldValue("from", "");
          formik.setFieldValue("to", "");
          formik.setFieldValue("result", "");
          formik.setFieldValue("present", false);
          formik.setFieldValue("cgpa", true);
          toast.addToast("Saved", { appearance: "success" });
          setRefreshCnt(refreshCnt + 1);
          setFocusId(undefined);
          setSave(false);
        })
        .catch((err) => {
          console.log(err);
          toast.addToast(err.message ? err.message : "Some error occured", {
            appearance: "error",
          });
          setSave(false);
        });
    },
  });

  // console.log(formik.values, formik.errors);

  /** Methods */

  /**
   *
   * @param {*} doc
   * @returns
   */
  const handleEditClick = (doc) => (e) => {
    formik.setFieldValue("course", doc.course);
    formik.setFieldValue("institute", doc.institute);
    formik.setFieldValue("from", new Date(doc.from.seconds * 1000));
    formik.setFieldValue("to", new Date(doc.to.seconds * 1000));
    formik.setFieldValue("result", doc.result);
    formik.setFieldValue("present", doc.present);
    formik.setFieldValue("cgpa", doc.cgpa);
    setFocusId(doc.id);
  };

  /**
   *
   * @param {*} id
   * @returns
   */
  const handleDeleteClick = (id) => (e) => {
    const ref = doc(db, "education", id);
    deleteDoc(ref)
      .then((res) => {
        toast.addToast("Deleted", {
          appearance: "info",
        });
        setRefreshCnt(refreshCnt + 1);
      })
      .catch((err) => {
        console.log(err);
        toast.addToast(err.message ? err.message : "Some error occured", {
          appearance: "error",
        });
      });
  };

  /**
   *@view
   */
  return (
    <Box>
      <Grid container spacing={2} direction="row">
        <Grid md={7} item>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <TextField
                      fullWidth
                      value={formik.values.course}
                      onChange={formik.handleChange}
                      name="course"
                      label="Course name"
                      variant="outlined"
                      error={formik.errors.course?.length > 0}
                      helperText={formik.errors.course}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      value={formik.values.institute}
                      onChange={formik.handleChange}
                      name="institute"
                      label="Institute name"
                      variant="outlined"
                      error={formik.errors.institute?.length > 0}
                      helperText={formik.errors.institute}
                    />
                  </Grid>
                  <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        spacing={1}
                      >
                        <Grid xs={4} item>
                          <DatePicker
                            label="From"
                            name="from"
                            value={formik.values.from}
                            onChange={(val) => {
                              formik.setFieldValue("from", val);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Grid>
                        <Grid xs={4} item>
                          <DatePicker
                            label="To/Tentative"
                            name="to"
                            value={formik.values.to}
                            onChange={(val) => {
                              formik.setFieldValue("to", val);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Grid>
                        <Grid xs={4} item>
                          <FormControlLabel
                            checked={formik.values.present}
                            onChange={formik.handleChange}
                            control={<Checkbox />}
                            name="present"
                            labelPlacement="end"
                            label="Presently studing here"
                          />
                        </Grid>
                      </Grid>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" spacing={1}>
                      <Grid item>
                        <TextField
                          value={formik.values.result}
                          onChange={formik.handleChange}
                          name="result"
                          label="Percentage/CGPA"
                          variant="outlined"
                          error={formik.errors.result?.length > 0}
                          helperText={formik.errors.result}
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          name="cgpa"
                          checked={formik.values.cgpa}
                          onChange={formik.handleChange}
                          control={<Checkbox />}
                          labelPlacement="end"
                          label="CGPA"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row-reverse">
                      <Grid item>
                        <Button
                          color="success"
                          disabled={save}
                          type="submit"
                          variant="contained"
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid md={5} item>
          <Box
            sx={{
              overflowY: "scroll",
              maxHeight: "85vh",
              padding: "8px",
              borderRadius: "4px",
              borderLeft: "2px solid lightgrey",
              borderBottom: "2px solid lightgrey",
            }}
          >
            <Grid container direction="column" spacing={1}>
              {edus.map((edu) => {
                return (
                  <Grid key={edu.id} item>
                    <Card className={`${classes.education}-edu`}>
                      <Typography variant="h6">{edu.course}</Typography>
                      <Typography>{edu.institute}</Typography>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Grid item>
                          <Typography>
                            {" "}
                            {edu.kfrom} - {edu.kto}{" "}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>{edu.kresult}</Typography>
                        </Grid>
                      </Grid>
                      <Grid container direction="row-reverse" spacing={1}>
                        <Grid item>
                          <Button
                            onClick={handleDeleteClick(edu.id)}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            onClick={handleEditClick(edu)}
                            variant="contained"
                            color="info"
                          >
                            Edit
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
