import { makeStyles } from "@material-ui/core/styles";

const messangerStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(10, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  messageBox: {
    width: '100%',
    height: '80vh'
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

export default messangerStyle;