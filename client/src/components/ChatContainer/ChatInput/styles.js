import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatInput: {
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "center",
    background: `#F4F6FA`,
    height: 80,
    borderRadius: 10,
    margin: theme.spacing(0, 2, 2, 2),
    padding: theme.spacing(0, 1, 0, 4),

    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 2, 2, 2),
      padding: theme.spacing(0, 0, 0, 4),
      height: 60
    },
  },
  chatInputText: {
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18
    },
  },
}));