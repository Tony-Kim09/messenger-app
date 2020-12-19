import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import RegistrationForm from "../components/RegisterForm";
import LoginRedirect from "../components/LoginRedirect";
import registerUser from "../services/register";
import { Alert } from "@material-ui/lab";

const Register = () => {
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const createUser = (userObject) => {
        registerUser.create(userObject)
                    .then(returnedUser => {
                        setMessage(`Registration Successful! Feel free to login ${returnedUser.name}`);
                    })
                    .catch(error => {
                        setErrorMessage("Something went wrong on our side. Please try again later");
                    })
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
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
            <LoginRedirect />
            <RegistrationForm createUser={createUser} />            
        </Container>
    );
}

export default Register;