import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import { setToken } from "./helper/token"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    if (loggedUserJSON) {
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setCurrentUser(userLoggedIn);
      setToken(userLoggedIn.token)
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
          {currentUser ? <Redirect to="/messenger" /> : <Register />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;