import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles"

const RedirectToRegister = () => {
  const classes = useStyles();
  const history = useHistory();

  const redirectButton = () => {
    history.push("/register");
  }

  return (
    <div className={classes.redirectContainer}>
      <Grid container justify="flex-end" spacing={2}>
        <Grid item>
          <Typography className={classes.redirectText} variant="subtitle1">
            Don't have an account?
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="large"
            className={classes.redirectButton}
            onClick={redirectButton}
          >
            <b>Create</b>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RedirectToRegister;