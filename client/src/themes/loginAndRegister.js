import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../assets/bg-img.png";

//Styling for Login and Registration Page
const loginRegisterStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    paper: {
      marginTop: "15%",
      marginLeft: "15%",
      marginRight: "15%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    image: {
      background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    mainButton: {
      margin: theme.spacing(7, 0, 2),
      padding: theme.spacing(1, 3)
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
    },
    backgroundImageText: {
      padding: theme.spacing(0, "15%")
    }

}));

export default loginRegisterStyles;