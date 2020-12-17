import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import classStyling from "../themes/classStyles";
import RegistrationForm from "../components/RegisterForm";
import LoginRedirect from "../components/LoginRedirect";

const Register = () => {
    const classes = classStyling();
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <LoginRedirect classStyle={classes} />
            <RegistrationForm classStyle={classes} />            
        </Container>
    );
}

export default Register;