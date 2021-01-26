import React, { useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";

import loginRegisterStyles from "../../themes/loginAndRegister";
import LoginRedirect from "./LoginRedirect";

//createUser props will be the axios post call that will take user object created here as parameter
const RegisterForm = ({ createUser }) => {

  const [username, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showSnackbar, setShowSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState( { });
  const classes = loginRegisterStyles();

  const validate = () => {
    let errors = {};
    errors.username = username.length > 2 ? "" : "Minimum of 3 characters";
    errors.password = password.length > 5 ? "" : "Minimum of 6 characters";
    errors.email = (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) ? "" : "Email Format is xyz@xxx.xxx";
    setErrorMessage({ ...errors });

    return Object.values(errors).every(n => n === "");
  }

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  }
  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackBar(false);
  };

  const registerUser = (event) => {
    event.preventDefault();

    //Only send request when all validations are passed
    if (validate()) {
      createUser({
        username: username,
        name: nickName,
        email: email,
        password: password
      })
      setShowSnackBar(false);
      setUserName("");
      setNickName("");
      setEmail("");
      setPassword("");
    } else {
      setShowSnackBar(true);
    }
  }

  return (
    <div className={classes.paper}>
      <LoginRedirect/>
      <Grid container alignContent="flex-start">
          <Typography component="h1" variant="h5">
              Create an account.
          </Typography>
      </Grid>
      <div>
      <form className={classes.form} onSubmit={registerUser}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
              value={username}
              label="Username"
              required
              fullWidth
              autoFocus
              onChange={handleUsernameChange}
              error={Boolean(errorMessage.username)}
              helperText={errorMessage.username ? errorMessage.username : ""}
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              value={nickName}
              label="Name"
              required
              fullWidth
              onChange={handleNickNameChange}
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              value={email}
              label="E-mail Address"
              required
              fullWidth
              onChange={handleEmailChange}
              error={Boolean(errorMessage.email)}
              helperText={errorMessage.email ? errorMessage.email : ""}
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              value={password}
              type="password"
              label="Password"
              required
              fullWidth
              onChange={handlePasswordChange}
              error={Boolean(errorMessage.password)}
              helperText={errorMessage.password? errorMessage.password : ""}
              />
          </Grid>
          </Grid>
          <Grid container justify="center">
              <Grid item>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.mainButton}
                disableElevation
                >
                Create
                </Button>
            </Grid>
        </Grid>
      </form>
      </div>
      <div>
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right"}} open = {showSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
          <Alert onClose={handleCloseSnack} severity="error">
            Please make sure all inputs are valid.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default RegisterForm;