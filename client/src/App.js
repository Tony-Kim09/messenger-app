import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import messengerService from "./services/messenger";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    if (loggedUserJSON) {
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setUser(userLoggedIn);
      messengerService.setToken(userLoggedIn.token)
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/messenger">
          <Messenger />
        </Route>
        <Route path="/">
          {user ? <Redirect to="/messenger" /> : <Register />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;