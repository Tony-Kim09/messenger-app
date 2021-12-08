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
      margin: theme.spacing(0, 8)
    },
  },
  headerText: {
    fontSize: "1.75em",
    textAlign: "start",
    width: "100%",
    marginBottom: theme.spacing(4)
  },
  formContainer: {
    width: "70%"
  },
  inputField: {
    marginBottom: theme.spacing(2, 0),
  },
  mainButton: {
    padding: theme.spacing(1.5, 5.5),
    margin: theme.spacing(8, 0, 5),
  },
  redirectContainer: {
    marginBottom: theme.spacing(10),
    marginRight: theme.spacing(15),
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "end",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0)
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(5)
    },
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(6)
    },
  },
  redirectButton: {
    padding: theme.spacing(1.5, 5.5),
  },
  redirectText: {
    color: "lightgrey",
    marginTop: theme.spacing(1),
  },
}));