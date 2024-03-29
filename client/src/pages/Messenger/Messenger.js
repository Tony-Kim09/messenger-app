import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import socket from "../../socket-client/socket";
import usersService from "../../services/users";
import messengerService from "../../services/messenger";
import { setToken } from "../../helper/token"
import UserPanel from "../../components/UserPanel/UserPanel";
import { Box } from "@mui/system";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import { Grid, Typography } from "@material-ui/core";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useStyles } from './styles';

const Messenger = () => {
  const history = useHistory();
  const classes = useStyles();

  const [currentConversationID, setConversationID] = useState("");
  const [existingChat, setExistingChat] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const [currentlySpeakingWith, setCurrentlySpeakingWith] = useState("");

  //For Mobile, Toggle Open will be used to switch views from UserPanel and Chat Panel

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  //Initialize users
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("userAuthenticated");

    if (loggedUserJSON) {
      // Set Current User 
      const userLoggedIn = JSON.parse(loggedUserJSON);
      setCurrentUser(userLoggedIn);
      setToken(userLoggedIn.token);

      //Get all other Users
      usersService.getUsers({ username: userLoggedIn.username })
        .then(userList => setUsers(userList));
    } else {
      alert("You must be logged in");
      history.push("/login");
    }
  }, [history]);

  //Function for Starting Chat
  const startConversation = async (target) => {
    setMessages([]);
    setCurrentlySpeakingWith(target);
    const participants = { usernames: [currentUser.username, target.username] };

    const conversation = await messengerService.createConversation(participants)
    setExistingChat(true);
    setConversationID(conversation.id);

    //Show old messages if available
    if (conversation.messages) {
      setMessages(conversation.messages);
    }
    const conversationInfo = { user: currentUser.username, target: target.username, id: conversation.id };
    socket.emit("join", conversationInfo);

    //Toggle Panel for Mobile Users
    toggleOpen();
  }

  //Get real-time message
  useEffect(() => {
    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });
  }, []);

  //Send user message to Server
  const sendMessage = async (event) => {
    event.preventDefault();
    const message = text.trim();

    //For socket messages
    const messageToSend = { sender: { username: currentUser.username }, text: message };

    if (message) {
      const returnedMessage = await messengerService.saveMessage(currentConversationID, message);

      socket.emit("sendMessage", ({ currentConversationID, msg: messageToSend }), () => setText(""));
    }
    setText("");
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4} md={3} className={open ? classes.closePanel : classes.openPanel}>
        <UserPanel
          currentUser={currentUser} setCurrentUser={setCurrentUser}
          users={users} currentUser={currentUser} startConversation={startConversation} />
      </Grid>
      <Grid item sm={8} md={9} className={open ? classes.openPanel : classes.closePanel}>
        {existingChat ?
          <ChatContainer currentUser={currentUser} targetUser={currentlySpeakingWith} messages={messages} text={text} setText={setText} sendMessage={sendMessage} toggleOpen={toggleOpen} />
          :
          <Box className={classes.noChatContainer} >
            <IoChatbubbleEllipsesSharp className={classes.noChatIcon} />
            <Typography className={classes.noChatText} variant="h2">No Active Chats yet!</Typography>
          </Box>}
      </Grid>
    </Grid>
  );
}

export default Messenger;