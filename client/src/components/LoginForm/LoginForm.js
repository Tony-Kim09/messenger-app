import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import loginRegisterStyles from "../../themes/loginAndRegister";
import RegisterRedirect from "./RegisterRedirect";

//loginUser prop will be an async function that takes user credential as an object
const LoginForm = ({ loginUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = loginRegisterStyles();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const submitUser = (event) => {
    event.preventDefault();

    loginUser({
      email: email,
      password: password
    })
    setEmail("");
    setPassword("");
  }

  return (
    <div className={classes.paper}>
      <RegisterRedirect />
      <Grid container alignContent="flex-start" >
        <Typography component="h1" variant="h4" fontWeight="fontWeightBold">
          <b>Welcome Back!</b>
        </Typography>
      </Grid>
      <form className={classes.form} onSubmit={submitUser}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={email}
              id="email"
              label="E-mail"
              required
              fullWidth
              autoFocus
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={password}
              id="password"
              type="password"
              label="Password"
              required
              fullWidth
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button
              type="submit"
              id="login-button"
              variant="contained"
              color="primary"
              size="large"
              className={classes.mainButton}
              disableElevation
            >
              <b>Login</b>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;