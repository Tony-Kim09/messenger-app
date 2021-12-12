import { createTheme } from '@material-ui/core/styles'
export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#fff", contrastText: "#3A8DFF" },
  }
});