import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#fff", contrastText: "#1976d2"},
  }
});