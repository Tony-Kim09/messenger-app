import React from "react";
import { useStyles } from "./styles";
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatBox = ({ currentUser, messages }) => {
  const classes = useStyles();

  return (
    <ScrollToBottom className={classes.messageBox}>
      {messages.map((message, i) =>
        currentUser.username == message.sender.username ?
          <div key={i} className={classes.sendingMessageContainer}>
            <div className={classes.sentMessageBackground}>
              {message.text}
            </div>
          </div> :
          <div key={i} className={classes.receivingMessageContainer}>
            <div className={classes.receivedMessageBackground}>
              <b>{message.sender.username}:</b> {message.text}
            </div>
          </div>
      )}
    </ScrollToBottom>
  );
}

export default ChatBox;