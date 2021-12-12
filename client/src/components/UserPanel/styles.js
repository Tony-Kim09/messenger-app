import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  userPanelContainer: {
    height: "100vh",
    overflow: "auto",
    boxShadow: "0.125em 0.125em 0.25em rgba(0, 0, 0, 0.025)",
  },
  chatHeaderText: {
    margin: theme.spacing(0, 2, 2, 2)
  },
}));