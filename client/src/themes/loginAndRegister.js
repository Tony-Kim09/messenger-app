import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../assets/bg-img.png";

//Styling for Login and Registration Page
const loginRegisterStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    paper: {
      margin: theme.spacing(10, 8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    image: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
        marginBottom: theme.spacing(5),
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "end",   
        width: "100%"
    },
    loginRedirectText: {
      marginTop: theme.spacing(2),
      color: "lightgrey"
    }
}));

export default loginRegisterStyles;