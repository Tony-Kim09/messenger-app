import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";


const LogoutButton = ({setUser}) => {
  const history = useHistory();

  const handleLogOut = (event) => {
    window.localStorage.removeItem("userAuthenticated");
    history.push("/register");
    setUser(null);
  }
  
  return (
    <Button
    type="button"
    variant="contained"
    color="primary"
    onClick={handleLogOut}
  >
  LogOut
  </Button>
  );
}

export default LogoutButton;