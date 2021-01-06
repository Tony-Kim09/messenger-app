import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import useStyle from "../themes/messangerStyle";

let socket;

//Currently only works with one user

const Messenger = () => {
  const history = useHistory();
  const classes = useStyle();

  const [currentUser, setCurrentUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:3000"

  //Initialize SocketIO and currentUser
  useEffect(()=> {
    socket = io(ENDPOINT);
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");
    if (loggedUserJSON) {
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setCurrentUser(userLoggedIn);
    }
  }, [ENDPOINT]);

  useEffect(()=> {
    socket.on("message", msg => {
      setMessages(messages => [...messages, msg]);
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
    <Grid container className={classes.root}>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleLogOut}
      >
      LogOut
      </Button>
      <div className={classes.messageBox}> 
        {messages.map((message, i) => <div key={i}>{currentUser.name}: {message}</div>)}
      </div>
      <div>
        <form autoComplete="off" className={classes.chatInput} onSubmit={sendMessage}>
          <Grid item  xs={11}>
            <TextField
              value={message}
              fullWidth
              autoFocus
              onChange={handleMessage}/>
          </Grid>
          <Grid item xs={1}>
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
          </Grid>
        </form>
      </div>
    </Grid>
  );
}

export default Messenger;