import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { stringToHslColor } from "../../../helper/functions";

const ChatHeader = ({ targetName, toggleOpen }) => {
  const classes = useStyles();

  const avatarBGColor = stringToHslColor(targetName, 50, 80);

  return (
    <div className={classes.chatHeaderContainer}>
      <div className={classes.chatHeaderTextAvatarContainer}>
        <Avatar style={{ width: 50, height: 50, background: `${avatarBGColor}` }}>
          {targetName.substring(0, 1).toUpperCase()}
        </Avatar>
        <div className={classes.chatHeaderText}>
          {targetName}
        </div>
      </div>
      <Button onClick={toggleOpen} className={classes.closeChat}>
        <CloseIcon color="primary" fontSize="large" />
      </Button>
    </div>
  )
}

export default ChatHeader
