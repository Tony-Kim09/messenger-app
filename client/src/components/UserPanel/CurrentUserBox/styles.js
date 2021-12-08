import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  currentUserContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    justifyContent: "space-between",
    padding: theme.spacing(3, 2),
  },
  avatarNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  currentUserAvatarColor: {
    background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85))`,
    width: "60px",
    height: "60px",
    marginRight: theme.spacing(2),
  },
  currentUserName: {
    fontSize: 24
  },
}));
