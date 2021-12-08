import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  messageBox: {
    flexGrow: 1,
    overflow: "scroll",
    margin: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 4)
    },
  },
  sendingMessageContainer: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
  receivingMessageContainer: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-start",
  },
  sentMessageBackground: {
    background: "linear-gradient(90deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))",
    color: "white",
    borderBottomLeftRadius: 18,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: theme.spacing(2, 5, 2, 4),
    maxWidth: "50%",
  },
  receivedMessageBackground: {
    background: "#F4F4F4",
    color: "rgba(89, 89, 89, 0.80)",
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    padding: theme.spacing(2, 5, 2, 4),
    maxWidth: "50%",
  }
}));