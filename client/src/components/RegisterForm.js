import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import loginRegisterStyles from "../themes/loginAndRegister";

const RegisterForm = () => {
  const classes = loginRegisterStyles();

  return (
    <div className={classes.paper}>
      <Grid container alignContent="flex-start">
          <Typography className={classes.registrationHeader} component="h1" variant="h5">
              Create an account.
          </Typography>
      </Grid>
      <div>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
              name="userName"
              id="userName"
              label="Username"
              required
              fullWidth
              autoFocus
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              name="nickName"
              id="nickName"
              label="Name"
              required
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="E-mail Address"
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Password"
              />
          </Grid>
          </Grid>
          <Grid container justify="center">
              <Grid item>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.mainButton}
                disableElevation
                >
                Create
                </Button>
            </Grid>
        </Grid>
      </form>
      </div>

    </div>
  );
}

export default RegisterForm;