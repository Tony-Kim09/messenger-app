import UserList from "./UserList/UserList";
import FilterInput from "./FilterContacts/FilterInput";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import CurrentUserBox from "./CurrentUserBox/CurrentUserBox";

const UserPanel = ({ currentUser, setCurrentUser, users, startConversation }) => {
  const [filteredName, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const classes = useStyles();

  return (
    <div className={classes.userPanelContainer}>
      <CurrentUserBox currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Typography className={classes.chatHeaderText} variant="h4">Chats</Typography>
      <FilterInput name={filteredName} handler={handleFilter} />
      <UserList users={users} filterUser={filteredName} startConversation={startConversation} />
    </div>
  );
}

export default UserPanel;