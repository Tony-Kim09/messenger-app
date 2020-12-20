import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginForm from "../components/LoginForm";
import loginService from "../services/login";
import { Alert } from "@material-ui/lab";
import useStyle from "../themes/loginAndRegister";

const Register = () => {
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    const classes = useStyle();

    const loginUser = (userObject) => {
        loginService.login(userObject)
                    .then(returnedUser => {
                        setMessage(`Login Successful! Redirecting to messager app`);

                        window.localStorage.setItem(
                            "userAuthenticated", JSON.stringify(returnedUser)
                        );
                        history.push("/messenger");
                    })
                    .catch(error => {
                        setErrorMessage("Invalid Username or Password");
                        setTimeout(() => {
                            setErrorMessage(null);
                          }, 5000)
                    })
    }

    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} >
                {(message && 
                    <Alert severity="success">
                        {message}    
                    </Alert>
                )}
                {(errorMessage && 
                    <Alert severity="error">
                        {errorMessage}
                    </Alert>
                )}
                <LoginForm loginUser={loginUser} />    
            </Grid>
        </Grid>
    );
}

export default Register;