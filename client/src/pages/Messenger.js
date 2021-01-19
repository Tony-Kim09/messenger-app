import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyle from "../themes/messengerStyle";
import CssBaseline from "@material-ui/core/CssBaseline";

import UserPanel from "../components/UserPanel/UserPanel";
import usersService from "../services/users";

let socket;

const Messenger = () => {
  const history = useHistory();
  const classes = useStyle();

  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:3000"

  //Initialize SocketIO and users
  useEffect(()=> {
    socket = io(ENDPOINT);
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    if (loggedUserJSON) {
    // Set Current User 
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setCurrentUser(userLoggedIn);

    //Set all current Users
    usersService.getUsers({username: userLoggedIn.username})
                .then( userList => setUsers(userList));
    } else {
      alert("You must be logged in");
      history.push("/login");
    }
  }, [ENDPOINT]);

  //Get real-time message
  useEffect(()=> {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });
  }, []);

  //Send user message to Server
  const sendMessage = (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();

    if(trimmedMessage){
      socket.emit("sendMessage", trimmedMessage, () => setMessage(""));
    }
    setMessage("");
  }
  
  const handleLogOut = (event) => {
    window.localStorage.removeItem("userAuthenticated");
    history.push("/register");
    setCurrentUser(null);
  }

  const handleMessage = (event) => {
    event.preventDefault(); 
    setMessage(event.target.value);
  }

  return (
    <Grid container direction="row" spacing={2} className={classes.root}>
      <CssBaseline />
      <Grid item xd={3}>
      <UserPanel users={users} currentUser={currentUser}/>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.messageBox}> 
          {messages.map((message, i) => <div key={i}>{currentUser.name}: {message}</div>)}
        </div>
        <div>
          <form autoComplete="off" className={classes.chatInput} onSubmit={sendMessage}>
              <TextField
                value={message}
                fullWidth
                autoFocus
                onChange={handleMessage}/>
              <Button
              disabled={message.trim() === ""}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              >
              Send
              </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={1}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleLogOut}
        >
        LogOut
        </Button>
      </Grid>
    </Grid>
  );
}

export default Messenger;