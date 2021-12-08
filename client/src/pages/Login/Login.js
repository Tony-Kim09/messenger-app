import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import LoginForm from "../../components/LoginForm/LoginForm";
import loginService from "../../services/login";
import { useStyles } from "./styles";
import LeftImage from "../../components/LeftImageIntro/LeftImage";

const Login = () => {

    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    const classes = useStyles();

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
        <Grid container className={classes.container}>
            <Grid item sm={5} className={classes.left} >
                <LeftImage />
            </Grid>
            <Grid item xs={12} sm={7}>
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

export default Login;