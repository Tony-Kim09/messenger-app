import React, {useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { theme } from "./themes/theme";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";
import messengerService from "./services/messenger";

import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    if (loggedUserJSON) {
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setUser(userLoggedIn);
      messengerService.setToken(userLoggedIn.token)
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/messenger">
            <Messenger changeUserState={setUser} />
          </Route>
          <Route path="/">
            {user ? <Redirect to="/messenger"/> : <Register />}
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;