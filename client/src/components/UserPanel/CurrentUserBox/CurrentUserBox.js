import { Avatar, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from './styles'
import AccountMenu from "./AccountMenu";

const CurrentUserBox = ({ currentUser, setCurrentUser }) => {
  const classes = useStyles();

  return (
    <Container className={classes.currentUserContainer}>
      <div className={classes.avatarNameContainer}>
        <Avatar className={classes.currentUserAvatarColor}
          // Check if user exists first then check if they have avatar. 
          // bandaid solution for now, will have to look for better method
          src={currentUser ? currentUser.avatar ? `/users/avatar/${currentUser.avatar}` : "" : ""}
        />
        <Typography className={classes.currentUserName} >
          <b>{currentUser ? currentUser.username : "None"}</b>
        </Typography>
      </div>
      <AccountMenu setCurrentUser={setCurrentUser} />
    </Container>
  )
};

export default CurrentUserBox;