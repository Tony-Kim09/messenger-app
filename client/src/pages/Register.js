import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import RegistrationForm from "../components/RegisterForm";
import registerService from "../services/register";
import { Alert } from "@material-ui/lab";
import useStyle from "../themes/loginAndRegister";

const Register = () => {
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();
    const classes = useStyle();

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
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5}>
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