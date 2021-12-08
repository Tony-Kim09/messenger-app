import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatHeaderContainer: {
    boxShadow: "0.125em 0.25em 0.5em rgba(0, 0, 0, 0.1)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3, 0),
  },
  chatHeaderTextAvatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: theme.spacing(4)
  },
  chatHeaderText: {
    marginLeft: theme.spacing(4),
    fontSize: 30,
    fontWeight: "bold",
  },
  closeChat: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
  },
  closeIcon: {
    fontSize: 50
  }
}));