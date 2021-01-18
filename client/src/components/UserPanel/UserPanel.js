import UserList from "./UserList";
import FilterInput from "./FilterContacts/FilterInput";
import React, { useState } from "react";

const UserPanel = ({users, currentUser}) => {
  const [filteredName, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  let otherUsers = users.filter(user => user.username !== currentUser.username);

  return (
    <div>
      <FilterInput name={filteredName} handler={handleFilter} />
      <UserList users={otherUsers} filterUser={filteredName}/>
    </div>
  );
} 

export default UserPanel;