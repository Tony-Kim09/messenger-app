import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#fff", contrastText: "#3A8DFF" },
  }
});