import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import useStyle from "../themes/messengerStyle";
import ChatBox from "../components/ChatBox";
import UserPanel from "../components/UserPanel/UserPanel";
import usersService from "../services/users";
import messengerService from "../services/messenger";
import CurrentUserBox from "../components/UserPanel/CurrentUserBox";
import { CssBaseline, Drawer, Grid } from "@material-ui/core";
import { Box } from "@mui/system";

let socket;

const Messenger = () => {
  const history = useHistory();
  const classes = useStyle();

  const [currentConversationID, setConversationID] = useState("");
  const [existingChat, setExistingChat] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  //Initialize SocketIO and users
  useEffect(()=> {
    socket = io();
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
  }, [history]);

  //Function for Starting Chat
  const startConversation = async (target) => {
    setMessages([]);
    const participants = { usernames: [currentUser.username, target.username]};

    const conversation = await messengerService.createConversation(participants)
    setExistingChat(true);
    setConversationID(conversation.id);

    //Show old messages if available
    if (conversation.messages){
      setMessages(conversation.messages);
    }
    const conversationInfo = {user: currentUser.username, target: target.username, id: conversation.id};
    socket.emit("join", conversationInfo);
  }

  //Get real-time message
  useEffect(()=> {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });
  }, []);

  //Send user message to Server
  const sendMessage = (event) => {
    event.preventDefault();
    const trimmedText = text.trim();
    const msg = { sender: currentUser.username, text: trimmedText };

    if(msg){
      socket.emit("sendMessage", ({currentConversationID, msg}), () => setText(""));
    }
    setText("");
  }

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Drawer
          variant="permanent"
          anchor="left"
          classes={{paper: classes.drawerPaper}}>
          <CurrentUserBox currentUser={currentUser} setUser={setCurrentUser}/>
          <UserPanel className={classes.userListContainer} users={users} currentUser={currentUser} startConversation={startConversation} />
        </Drawer>
      </div>
      <div bordertop={1} className={classes.contentRight}>
        {existingChat ? 
            <ChatBox currentUser={currentUser} messages={messages} text={text} setText={setText} sendMessage={sendMessage} />
            : 
            <Box>
              
            </Box>}
      </div>
    </div>
  );
}

export default Messenger;