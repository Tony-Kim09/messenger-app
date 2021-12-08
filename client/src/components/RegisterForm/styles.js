import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0, 5),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 4)
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 15)
    },
  },
  headerText: {
    fontSize: "1.75em",
    textAlign: "start",
    width: "100%",
    marginBottom: theme.spacing(3)
  },
  formContainer: {
    margin: theme.spacing(0, 5),
  },
  inputField: {
    marginBottom: theme.spacing(2, 0),
  },
  mainButton: {
    padding: theme.spacing(1.5, 5.5),
    margin: theme.spacing(10, 0, 5),
  },
  redirectContainer: {
    marginBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "end",
    width: "100%",
  },
  redirectButton: {
    padding: theme.spacing(1.5, 5.5),
  },
  redirectText: {
    color: "lightgrey",
    marginTop: theme.spacing(1),
  },
}));