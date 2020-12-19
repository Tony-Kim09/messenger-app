import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginForm from "../components/LoginForm";
import RegisterRedirect from "../components/RegisterRedirect";
import loginService from "../services/login";
import { Alert } from "@material-ui/lab";

const Register = () => {
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

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
            <RegisterRedirect />
            <LoginForm loginUser={loginUser} />            
        </Container>
    );
}

export default Register;