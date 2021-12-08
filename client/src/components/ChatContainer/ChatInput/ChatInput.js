import React from 'react'
import { IconButton, InputBase, Paper } from "@material-ui/core";
import { useStyles } from "./styles"
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ChatInput = ({ sendMessage, text, setText }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleText = (event) => {
    event.preventDefault();
    setText(event.target.value);
  }
  return (
    <form autoComplete="off" onSubmit={sendMessage}>
      <Paper
        className={classes.chatInput}
        elevation={0}
      >
        <InputBase
          className={classes.chatInputText}
          value={text}
          variant="outlined"
          placeholder={mobile ? "Say....." : "Type something..."}
          fullWidth
          autoFocus
          onChange={handleText}
          onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
        />
        <IconButton
          aria-label="send-message"
          disabled="true"
          disabled={text.trim() === ""}
          type="button"
          onClick={sendMessage}
          variant="contained"
          color="primary"
          size="large"
          disableElevation
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </form>
  )
}

export default ChatInput
