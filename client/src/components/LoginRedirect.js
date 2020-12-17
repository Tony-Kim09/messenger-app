import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const RedirectToLogin = ({classStyle}) => {

  return (
    <div className={classStyle.loginRedirect}>
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Typography className={classStyle.loginRedirectText} variant="subtitle1">
          Already have an account?
          </Typography>
        </Grid>
        <Grid item>
          <Button
              type="button"
              variant="contained"
              color="secondary"
              className={classStyle.secondaryButton}
              >
              Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RedirectToLogin;