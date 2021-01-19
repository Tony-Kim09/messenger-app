import UserList from "./UserList";
import FilterInput from "./FilterContacts/FilterInput";
import React, { useState } from "react";

const UserPanel = ({users, currentUser}) => {
  const [filteredName, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <FilterInput name={filteredName} handler={handleFilter} />
      <UserList users={users} filterUser={filteredName}/>
    </div>
  );
} 

export default UserPanel;