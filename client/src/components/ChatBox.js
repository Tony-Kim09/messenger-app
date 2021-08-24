import React from "react";
import useStyle from "../themes/messengerStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

const ChatBox = ({messages, text, setText, sendMessage}) => {
  const classes = useStyle();
  
  const handleText = (event) => {
    event.preventDefault(); 
    setText(event.target.value);
  }

  return (
    <Paper>
      <div className={classes.messageBox}> 
        {messages.map((message, i) => <div key={i}><b>{message.sender}:</b> {message.text}</div>)}
      </div>
      <div>
        <form autoComplete="off" className={classes.chatInput} onSubmit={sendMessage}>
            <TextField
              value={text}
              variant="outlined"
              fullWidth
              autoFocus
              onChange={handleText}
              onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}/>
            <Button
            disabled={text.trim() === ""}
            type="button"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            >
            Send
            </Button>
        </form>
      </div>
    </Paper>
  );
}

export default ChatBox;