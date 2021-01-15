import { makeStyles } from "@material-ui/core/styles";

const messengerStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vh",
    display: "flex",
    margin: theme.spacing(2, 2)
  },
  userPanel: {
    flexDirection: "column"
  },
  paper: {
    margin: theme.spacing(10, 8),
    display: "flex",
    flexDirection: "column",
  },
  messageBox: {
    height: "90vh"
  },
  chatInput:{
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  }
}));

export default messengerStyle;