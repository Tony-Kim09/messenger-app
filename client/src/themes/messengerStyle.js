import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core";

const DRAWER_WIDTH = "400px";

const messengerStyle = makeStyles((theme) => ({

  root: {
    display: "flex",
  },
  chatInput:{
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    overflowX: "hidden",
  },
  chatHeaderText: {
    margin: theme.spacing (0, 2, 2, 2)
  },
  searchBarContainer: {
    width: DRAWER_WIDTH,
    margin: theme.spacing (0, 2, 2, 2),
    backgroundColor: fade(theme.palette.primary.light, 0.25),
  },
  contentRight: {
    width : `calc(100vw - ${DRAWER_WIDTH})`,
    height: "100vh",
    display: "flex",
    background:"#F3F3F3",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(0, 2)
  },
  currentUserAvatarColor: {
    background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))`
  },

  //Styles for the Messages
  messageBox: {
    height: "85vh",
    padding: theme.spacing(2),
  },

  sendingMessageContainer: {
    padding: theme.spacing(2, 3),
    display: "flex",
    justifyContent: "flex-end",

  },
  receivingMessageContainer: {
    padding: theme.spacing(2, 3),
    display: "flex",
    justifyContent: "flex-start",
  },
  sentMessageBackground: {
    backgroundColor: "#2979FF",
    color: "white",
    borderRadius: "20px",
    padding: theme.spacing(2, 5, 2, 4),
  },
  receivedMessageBackground: {
    background: "#F3F3F3",
    color: "black",
    borderRadius: "20px",
    padding: theme.spacing(2, 5, 2, 4),
  }
}));

export default messengerStyle;