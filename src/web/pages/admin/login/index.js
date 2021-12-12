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
import { loginValidationScheme } from "./logic";
import userImg from "../../../../assets/images/profile.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/utils/firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";

/**
 *
 * @param {*} props
 * @returns
 */
const AdminLogin = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [logging, setLogging] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationScheme,
    onSubmit: (val) => {
      setLogging(true);
      const { email, password } = val;
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const { user } = res;
          console.log("login res----->", user);
          history.replace("/");
        })
        .catch((err) => {
          setLogging(true);
          console.log("login err----->", err);
        });
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
                      </Grid>
                      <Grid item>
                        <Button
                          disabled={logging}
                          type="submit"
                          variant="contained"
                          fullWidth
                        >
                          Login
                        </Button>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row-reverse">
                          <Grid item>
                            <Button variant="text" color="error" size="small">
                              Forgot password
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
