import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw"
  },
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
}));