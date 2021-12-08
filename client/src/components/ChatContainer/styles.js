import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      width: "100vw"
    },
  },
}));