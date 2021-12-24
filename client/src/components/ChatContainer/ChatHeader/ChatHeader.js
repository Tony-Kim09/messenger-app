import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { stringToHslColor } from "../../../helper/functions";

const ChatHeader = ({ targetUser, toggleOpen }) => {
  const classes = useStyles();

  const avatarBGColor = stringToHslColor(targetUser.username, 50, 80);

  return (
    <div className={classes.chatHeaderContainer}>
      <div className={classes.chatHeaderTextAvatarContainer}>
        <Avatar src={targetUser.avatar ? `/users/avatar/${targetUser.avatar}` : ""} style={{ width: 50, height: 50, background: `${avatarBGColor}` }}>
        </Avatar>
        <div className={classes.chatHeaderText}>
          {targetUser.username}
        </div>
      </div>
      <Button onClick={toggleOpen} className={classes.closeChat}>
        <CloseIcon color="primary" fontSize="large" />
      </Button>
    </div>
  )
}

export default ChatHeader
