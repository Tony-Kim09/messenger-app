import { Avatar, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from './styles'
import AccountMenu from "./AccountMenu";

const CurrentUserBox = ({ currentUser, setCurrentUser }) => {
  const classes = useStyles();

  return (
    <Container className={classes.currentUserContainer}>
      <div className={classes.avatarNameContainer}>
        <Avatar className={classes.currentUserAvatarColor} />
        <Typography className={classes.currentUserName} >
          <b>{currentUser ? currentUser.username : "None"}</b>
        </Typography>
      </div>
      <AccountMenu setCurrentUser={setCurrentUser} />
    </Container>
  )
};

export default CurrentUserBox;