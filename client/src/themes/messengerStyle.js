import { makeStyles } from "@material-ui/core/styles";

const DRAWER_WIDTH = 280;

const messengerStyle = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  userListItem: {
    width: "100%"
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
    width: DRAWER_WIDTH
  },
  searchBarContainer: {
    margin: theme.spacing (0, 2, 2, 2)
  },
  contentRight: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default messengerStyle;