import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core";

const DRAWER_WIDTH = 400;

const messengerStyle = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  messageBox: {
    height: "85vh"
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
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  currentUserAvatarColor: {
    background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))`
  }
}));

export default messengerStyle;