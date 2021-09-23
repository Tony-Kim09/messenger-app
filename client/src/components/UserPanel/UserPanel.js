import UserList from "./UserList";
import FilterInput from "./FilterContacts/FilterInput";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useStyles from '../../themes/messengerStyle'

const UserPanel = ({users, startConversation}) => {
  const [filteredName, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.chatHeaderText} variant="h4" style={{marginBottom: 10}} >Chats</Typography>
      <FilterInput name={filteredName} handler={handleFilter} />
      <UserList users={users} filterUser={filteredName} startConversation={startConversation} />
    </div>
  );
} 

export default UserPanel;