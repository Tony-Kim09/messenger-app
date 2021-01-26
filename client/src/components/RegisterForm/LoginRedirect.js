import React from "react";
import { useHistory } from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import loginRegisterStyles from "../../themes/loginAndRegister";

const RedirectToLogin = () => {
  const classes = loginRegisterStyles();
  const history = useHistory();

  const redirectButton = () => {
    history.push("/login");
  }

  return (
    <div className={classes.loginRegisterRedirect}>
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Typography className={classes.loginRedirectText} variant="subtitle1">
          Already have an account?
          </Typography>
        </Grid>
        <Grid item>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          size="large"
          className={classes.secondaryButton}
          onClick={redirectButton}
        >
          Login
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RedirectToLogin;