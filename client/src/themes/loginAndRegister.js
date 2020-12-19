import { makeStyles } from "@material-ui/core/styles";

//Styling for Login and Registration Page
const loginRegisterStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    mainButton: {
      margin: theme.spacing(3, 0, 2),
      padding: theme.spacing(1, 3),
    },
    secondaryButton: {
      margin: theme.spacing(1, 0, 0),
      padding: theme.spacing(1, 2),
    },
    loginRegisterRedirect: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",   
    },
    loginRedirectText: {
      marginTop: theme.spacing(2),
      color: "lightgrey"
    }
}));

export default loginRegisterStyles;