import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles"
import RegisterRedirect from "./RegisterRedirect";

//loginUser prop will be an async function that takes user credential as an object
const LoginForm = ({ loginUser }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

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
    <div className={classes.container}>
      <RegisterRedirect />
      <div className={classes.formContainer}>
        <Typography variant="h4" className={classes.headerText} >
          <b>Welcome Back!</b>
        </Typography>
        <form onSubmit={submitUser}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                value={email}
                id="email"
                label="E-mail"
                fullWidth
                autoFocus
                autoComplete='off'
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                id="password"
                type="password"
                label="Password"
                fullWidth
                autoComplete='off'
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

    </div>
  );
}

export default LoginForm;