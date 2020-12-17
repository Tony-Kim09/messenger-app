import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import RegistrationForm from "../components/RegisterForm";
import LoginRedirect from "../components/LoginRedirect";

const Register = () => {

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <LoginRedirect />
            <RegistrationForm />            
        </Container>
    );
}

export default Register;