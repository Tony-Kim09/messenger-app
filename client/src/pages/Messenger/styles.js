import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw"
  },
  openPanel: {
    display: "block"
  },
  closePanel: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
  },
  noChatContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    background: "rgba(232, 232, 232, 0.4)",
    textAlign: "center",
    alignItems: "center",

  },
  noChatIcon: {
    color: "rgba(89, 89, 89, 0.80)",
    fontSize: 100,
    marginBottom: theme.spacing(5)
  },
  noChatText: {
    color: "rgba(89, 89, 89, 0.80)",
  }
}));