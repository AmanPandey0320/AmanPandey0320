import {
  AppBar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./style";
import { useFormik } from "formik";
import { loginValidationScheme, forgotPasswordScheme } from "./logic";
import userImg from "../../../../assets/images/profile.png";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../../lib/utils/firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

/**
 *
 * @param {*} props
 * @returns
 */
const AdminLogin = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const toast = useToasts();
  const [logging, setLogging] = useState(false);
  const [signin, setSignin] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signin ? loginValidationScheme : forgotPasswordScheme,
    onSubmit: (val) => {
      setLogging(true);
      if (signin) {
        const { email, password } = val;
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            const { user } = res;
            console.log("login res----->", user);
            history.replace("/");
          })
          .catch((err) => {
            setLogging(false);
            if (err.code === "auth/wrong-password") {
              toast.addToast("Wrong password", {
                appearance: "error",
              });
            }
            console.log("login err----->", `:${err.code}`);
          });
      } else {
        const { email } = val;
        sendPasswordResetEmail(auth, email)
          .then((res) => {
            toast.addToast("Password reset mail sent", {
              appearance: "info",
            });
            setSignin(true);
            setLogging(false);
          })
          .catch((err) => {
            toast.addToast("Some error occured", {
              appearance: "error",
            });
            setLogging(false);
            console.log(err);
          });
      }
    },
  });
  /**
   * view
   */
  return (
    <Container maxWidth="xl" disableGutters={true} className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justifyContent="space-between" direction="row">
            <Grid item>
              <Typography variant="h6">Admin @ Portfolio</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container direction="column">
        <Grid item>
          <Toolbar />
        </Grid>
        <Grid item>
          <Grid
            className={classes.loginBox}
            container
            justifyContent="space-around"
            direction="row"
          >
            <Grid item>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2} direction="column">
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-around"
                        >
                          <Grid item>
                            <img width={96} src={userImg} alt="user" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          error={formik.errors.email?.length > 0}
                          helperText={formik.errors.email}
                        />
                      </Grid>
                      <Grid item>
                        {signin && (
                          <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.errors.password?.length > 0}
                            helperText={formik.errors.password}
                          />
                        )}
                      </Grid>
                      <Grid item>
                        <Button
                          disabled={logging}
                          type="submit"
                          variant="contained"
                          fullWidth
                        >
                          {signin ? "Login" : "Forgot password"}
                        </Button>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row-reverse">
                          <Grid item>
                            <Button
                              disabled={logging}
                              onClick={(e) => setSignin(!signin)}
                              variant="text"
                              color="error"
                              size="small"
                            >
                              {signin ? "Forgot password" : "Login"}
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminLogin;
