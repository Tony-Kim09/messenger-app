import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import useStyle from "../themes/loginAndRegister";
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import RegistrationForm from "../components/RegisterForm/RegisterForm";
import registerService from "../services/register";
import { Box, Typography } from "@material-ui/core";

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
            <Grid component={Box} xs={false} sm={5} className={classes.image} display={{ xs: "none", sm: "block" }}>
                <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                    <TextsmsOutlinedIcon className={classes.backgroundImageText} color="secondary" style={ { fontSize: "90" }} />
                    <br/>
                    <Typography className={classes.backgroundImageText} variant="h4" color="secondary" align="center">
                        <Box letterSpacing={2} lineHeight={1.5}>
                            Converse with anyone at any moment
                        </Box>
                    </Typography>
                </Box>
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
                <RegistrationForm createUser={createUser} /> 
            </Grid>
        </Grid>
    );
}

export default Register;