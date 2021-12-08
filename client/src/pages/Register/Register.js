import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./styles";
import RegistrationForm from "../../components/RegisterForm/RegisterForm";
import registerService from "../../services/register";
import LeftImage from "../../components/LeftImageIntro/LeftImage";

const Register = () => {
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    const classes = useStyles();

    const createUser = (userObject) => {
        registerService.create(userObject)
            .then(returnedUser => {
                setMessage(`Registration Successful! Welcome ${returnedUser.name}`);

                window.localStorage.setItem(
                    "userAuthenticated", JSON.stringify(returnedUser)
                );

                history.push("/messenger");
            })
            .catch(error => {
                setErrorMessage("Something went wrong on our side. Please try again later");
            })
    }

    return (
        <Grid container className={classes.container}>
            <Grid item sm={5} className={classes.left} >
                <LeftImage />
            </Grid>
            <Grid item xs={12} sm={7} className={classes.right}>
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
                <RegistrationForm createUser={createUser} />
            </Grid>
        </Grid>
    );
}

export default Register;